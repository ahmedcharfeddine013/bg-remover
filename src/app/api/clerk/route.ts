import { WebhookEvent } from "@clerk/nextjs/server";

// export async function POST(request: Request) {}

export async function Get() {
  return Response.json({ message: "Hello world!" });
}
