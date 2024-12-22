import { neon } from "@neondatabase/serverless";

const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is not set.");
}

const sql = neon(DATABASE_URL);

export async function POST(request: Request) {
  try {
    const { email, clerkId, name } = await request.json();
    if (!email || !clerkId || !name) {
      return new Response(
        JSON.stringify({ error: "Please provide all the required fields" }),
        {
          status: 400,
        },
      );
    }
    const response = await sql`
      INSERT INTO users (email, name, clerk_id)
      VALUES (${email}, ${name}, ${clerkId})
      `;
    return new Response(JSON.stringify({ data: response }), {
      status: 201,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error }), {
      status: 400,
    });
  }
}
