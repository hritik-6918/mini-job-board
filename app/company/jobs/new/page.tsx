import { sql } from "@vercel/postgres"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

async function createJob(formData: FormData) {
  "use server"

  const title = formData.get("title")
  const company = formData.get("company")
  const description = formData.get("description")
  const category = formData.get("category")
  const location = formData.get("location")
  const salaryRange = formData.get("salaryRange")

  // Ensure all values are strings
  if (
    typeof title !== "string" ||
    typeof company !== "string" ||
    typeof description !== "string" ||
    typeof category !== "string" ||
    typeof location !== "string" ||
    typeof salaryRange !== "string"
  ) {
    throw new Error("Invalid form data")
  }

  await sql`
    INSERT INTO jobs (title, company, description, category, location, salary_range)
    VALUES (${title}, ${company}, ${description}, ${category}, ${location}, ${salaryRange})
  `

  revalidatePath("/company/jobs")
  redirect("/company/jobs")
}

export default function NewJob() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Post a New Job</h1>
      <form action={createJob} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Job Title
          </label>
          <Input type="text" id="title" name="title" required />
        </div>
        <div className="mb-4">
          <label htmlFor="company" className="block text-sm font-medium text-gray-700">
            Company
          </label>
          <Input type="text" id="company" name="company" required />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Job Description
          </label>
          <Textarea id="description" name="description" rows={4} required />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <Input type="text" id="category" name="category" required />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <Input type="text" id="location" name="location" required />
        </div>
        <div className="mb-4">
          <label htmlFor="salaryRange" className="block text-sm font-medium text-gray-700">
            Salary Range
          </label>
          <Input type="text" id="salaryRange" name="salaryRange" />
        </div>
        <Button type="submit">Post Job</Button>
      </form>
    </div>
  )
}
