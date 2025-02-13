import { sql } from "@vercel/postgres"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

async function getJobApplications(jobId: string) {
  const { rows } = await sql`
    SELECT a.*, j.title as job_title
    FROM applications a
    JOIN jobs j ON a.job_id = j.id
    WHERE a.job_id = ${jobId}
    ORDER BY a.created_at DESC
  `
  return rows
}

export default async function JobApplications({ params }: { params: { id: string } }) {
  const applications = await getJobApplications(params.id)

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Applications for Job ID: {params.id}</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {applications.map((application) => (
          <Card key={application.id}>
            <CardHeader>
              <CardTitle>{application.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">
                <strong>Email:</strong> {application.email}
              </p>
              <p className="mb-2">
                <strong>Resume:</strong>{" "}
                <a
                  href={application.resume_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Resume
                </a>
              </p>
              <p className="mb-2">
                <strong>Cover Letter:</strong>
              </p>
              <p className="text-sm">{application.cover_letter}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

