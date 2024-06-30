// import { Webhook } from "svix";
// import { headers } from "next/headers";
// import { clerkClient, WebhookEvent } from "@clerk/nextjs/server";
// import db from "@/db/db";
// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

//   if (!WEBHOOK_SECRET) {
//     throw new Error(
//       "Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local"
//     );
//   }

//   const headerPayload = headers();
//   const svix_id = headerPayload.get("svix-id");
//   const svix_timestamp = headerPayload.get("svix-timestamp");
//   const svix_signature = headerPayload.get("svix-signature");

//   if (!svix_id || !svix_timestamp || !svix_signature) {
//     console.error("Missing Svix headers:", {
//       svix_id,
//       svix_timestamp,
//       svix_signature,
//     });
//     return new Response("Error occurred -- no svix headers", {
//       status: 400,
//     });
//   }

//   const payload = await req.json();
//   const body = JSON.stringify(payload);

//   const wh = new Webhook(WEBHOOK_SECRET);

//   let evt: WebhookEvent;

//   try {
//     evt = wh.verify(body, {
//       "svix-id": svix_id,
//       "svix-timestamp": svix_timestamp,
//       "svix-signature": svix_signature,
//     }) as WebhookEvent;
//   } catch (err) {
//     console.error("Error verifying webhook:", err);
//     return new Response("Error occurred during verification", {
//       status: 400,
//     });
//   }

//   console.log("Webhook event received:", evt);

//   if (evt.type === "user.created") {
//     try {
//       const { email_addresses, first_name, last_name, id } = evt.data;
//       const newUser = await db.user.create({
//         data: {
//           email: email_addresses[0].email_address,
//           name: `${first_name} ${last_name}`,
//           clerkId: id,
//           credits: "50",
//         },
//       });

//       if (newUser) {
//         await clerkClient.users.updateUserMetadata(id, {
//           publicMetadata: {
//             userId: newUser.id,
//           },
//         });
//       }

//       console.log(`New user created with ID: ${id}`);
//       return NextResponse.json({ message: "New user created", user: newUser });
//     } catch (err) {
//       console.error("Error creating new user:", err);
//       return new Response("Error occurred during user creation", {
//         status: 500,
//       });
//     }
//   }

//   return new Response("", { status: 200 });
// }
