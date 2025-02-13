import Link from "next/link"
import { sql } from "@vercel/postgres"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"

async function getJob(id: string) {
  const { rows } = await sql`SELECT * FROM jobs WHERE id = ${id}`
  return rows[0]
}

export default async function JobDetails({ params }: { params: { id: string } }) {
  const job = await getJob(params.id)

  if (!job) {
    notFound()
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">{job.title}</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <p className="text-lg mb-4">
          <strong>Company:</strong> {job.company}
        </p>
        <p className="text-lg mb-4">
          <strong>Location:</strong> {job.location}
        </p>
        <p className="text-lg mb-4">
          <strong>Category:</strong> {job.category}
        </p>
        <p className="text-lg mb-4">
          <strong>Salary Range:</strong> {job.salary_range}
        </p>
        <h2 className="text-2xl font-semibold mb-4">Job Description</h2>
        <p className="mb-6">{job.description}</p>
        <Link href={`/candidate/apply/${job.id}`}>
          <Button>Apply Now</Button>
        </Link>
      </div>
    </div>
  )
}

