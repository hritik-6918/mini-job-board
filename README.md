# Screenshots

![screencapture-mini-job-board-seven-vercel-app-2025-02-14-12_19_16 (1)](https://github.com/user-attachments/assets/db8892fe-8345-4a96-874f-0aa3dafc4cde)

![screencapture-mini-job-board-seven-vercel-app-candidate-jobs-2025-02-14-18_03_43 (1)](https://github.com/user-attachments/assets/27f1fda1-0473-4dc1-8879-59d5a7ffba2a)

![screencapture-mini-job-board-seven-vercel-app-company-jobs-2025-02-14-17_57_21](https://github.com/user-attachments/assets/c0e8a220-1e5f-4e45-9f3f-80d34205b878)

# Mini Job Board

A full-stack job board application built with Next.js 15, featuring App Router, Server Actions, and Neon DB (PostgreSQL).

## Features

- **Candidate Flow**
  - Browse job listings
  - View detailed job information
  - Apply for jobs with a simple form

- **Company Flow**
  - Post new job listings
  - View all posted jobs
  - Manage applications for each job

- **Tech Stack**
  - Next.js 15 with App Router
  - TypeScript
  - Tailwind CSS
  - shadcn/ui components
  - Neon DB (PostgreSQL)
  - Vercel for deployment

## Prerequisites

- Node.js 18.x or later
- npm or yarn
- A Neon DB account (for PostgreSQL database)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/mini-job-board.git
cd mini-job-board
```

2. Install dependencies:

```bash
npm install or yarn install
```

3. Set up environment variables:

  Create a `.env.local` file in the root directory and add the following:

```bash
POSTGRES_URL=your_neon_db_connection_string
```
Replace `your_neon_db_connection_string` with your actual Neon DB connection string.

4. Set up the database:
   
Run the SQL commands in `schema.sql` to create the necessary tables in your Neon DB database.

5. Run the development server:

```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This project can be easily deployed on Vercel. Follow these steps:

1. Push your code to a GitHub repository.
2. Sign up for a Vercel account if you haven't already.
3. Create a new project on Vercel and link it to your GitHub repository.
4. In the Vercel project settings, add the `POSTGRES_URL` environment variable with your Neon DB connection string.
5. Deploy the project

## Built With

- [Next.js 15](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Neon DB](https://neon.tech/)
