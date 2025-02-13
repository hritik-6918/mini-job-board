import Link from "next/link"
import { sql } from "@vercel/postgres"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

async function getJobs() {
  const { rows } = await sql`SELECT * FROM jobs ORDER BY created_at DESC`
  return rows
}

export default async function JobListings() {
  const jobs = await getJobs()

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Job Listings</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <Card key={job.id}>
            <CardHeader>
              <CardTitle>{job.title}</CardTitle>
              <CardDescription>{job.company}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-2">{job.location}</p>
              <p className="mb-4">{job.salary_range}</p>
              <Link href={`/candidate/jobs/${job.id}`}>
                <Button>View Details</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

