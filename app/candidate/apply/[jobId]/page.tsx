import { sql } from "@vercel/postgres"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

async function getJob(id: string) {
  const { rows } = await sql`SELECT * FROM jobs WHERE id = ${id}`
  return rows[0]
}

async function submitApplication(formData: FormData) {
  "use server"

  const jobId = formData.get("jobId")
  const name = formData.get("name")
  const email = formData.get("email")
  const resumeLink = formData.get("resumeLink")
  const coverLetter = formData.get("coverLetter")

  // Ensure all values are strings
  if (
    typeof jobId !== "string" ||
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof resumeLink !== "string" ||
    typeof coverLetter !== "string"
  ) {
    throw new Error("Invalid form data")
  }

  await sql`
    INSERT INTO applications (job_id, name, email, resume_link, cover_letter)
    VALUES (${jobId}, ${name}, ${email}, ${resumeLink}, ${coverLetter})
  `

  revalidatePath("/candidate/jobs")
  redirect("/candidate/jobs")
}

export default async function ApplyJob({ params }: { params: { jobId: string } }) {
  const job = await getJob(params.jobId)

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Apply for {job.title}</h1>
      <form action={submitApplication} className="max-w-md mx-auto">
        <input type="hidden" name="jobId" value={job.id} />
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <Input type="text" id="name" name="name" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <Input type="email" id="email" name="email" required />
        </div>
        <div className="mb-4">
          <label htmlFor="resumeLink" className="block text-sm font-medium text-gray-700">
            Resume Link
          </label>
          <Input type="url" id="resumeLink" name="resumeLink" required />
        </div>
        <div className="mb-4">
          <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700">
            Cover Letter
          </label>
          <Textarea id="coverLetter" name="coverLetter" rows={4} />
        </div>
        <Button type="submit">Submit Application</Button>
      </form>
    </div>
  )
}

