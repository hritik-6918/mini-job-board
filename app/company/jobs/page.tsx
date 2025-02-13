import Link from "next/link"
import { sql } from "@vercel/postgres"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

async function getJobs() {
  const { rows } = await sql`SELECT * FROM jobs ORDER BY created_at DESC`
  return rows
}

export default async function CompanyJobDashboard() {
  const jobs = await getJobs()

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Company Job Dashboard</h1>
        <Link href="/company/jobs/new">
          <Button>Post New Job</Button>
        </Link>
      </div>
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
              <Link href={`/company/jobs/${job.id}/applications`}>
                <Button variant="outline">View Applications</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

