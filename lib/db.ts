import { sql } from "@vercel/postgres"
import { cache } from "react"

// Create cached database query function
export const queryDb = cache(async (query: string, values: any[] = []) => {
  try {
    // Use sql template literal from @vercel/postgres
    const result = await sql.query(query, values)
    return result
  } catch (error) {
    console.error("Database query error:", error)
    throw new Error("Failed to fetch data")
  }
})

