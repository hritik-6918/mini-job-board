import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="container mx-auto py-16 text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to Mini Job Board</h1>
      <p className="text-xl mb-8">Find your next opportunity or post a job opening</p>
      <div className="space-x-4">
        <Link href="/candidate/jobs">
          <Button size="lg">Find Jobs</Button>
        </Link>
        <Link href="/company/jobs">
          <Button size="lg" variant="outline">
            Post Jobs
          </Button>
        </Link>
      </div>
    </div>
  )
}

