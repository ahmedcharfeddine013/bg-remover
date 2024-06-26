import db from "@/db/db";
import { RegisterSchema } from "@/lib/validators/user";
import { revalidatePath } from "next/cache";
import { notFound } from "next/navigation";

export async function getUserById(id: string) {
  const user = await db.user.findUnique({ where: { id } });
  return user;
}

export async function getUserByClerkId(clerkId: string) {
  const user = await db.user.findUnique({ where: { clerkId } });
  return user;
}

export async function getUserByEmail(email: string) {
  const user = await db.user.findUnique({ where: { email: email } });
  return user;
}

export async function createUser(prevState: unknown, formData: FormData) {
  const result = RegisterSchema.safeParse(
    Object.fromEntries(formData.entries())
  );
  if (result.success == false) {
    return result.error.formErrors.fieldErrors;
  }
  const data = result.data;

  await db.user.create({
    data: {
      email: data.email,
      name: data.name,
      clerkId: data.clerkId,
      credits: data.credits,
    },
  });

  revalidatePath("/");
}

export async function updateUser(
  id: string,
  prevState: unknown,
  formData: FormData
) {
  const result = RegisterSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (result.success == false) {
    return result.error.formErrors.fieldErrors;
  }

  const data = result.data;

  const user = db.user.findUnique({
    where: { id },
  });

  if (user == null) return notFound();

  await db.user.update({
    where: { id },
    data: {
      email: data.email,
      name: data.name,
      clerkId: data.clerkId,
      credits: data.credits,
    },
  });
}

export async function deleteUser(id: string) {
  const user = await db.user.delete({ where: { id: id } });

  if (user == null) return notFound();

  revalidatePath("/");
}
