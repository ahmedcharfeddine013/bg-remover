import db from "@/db/db";
import { getUserById } from "../user/user";
import { notFound } from "next/navigation";

export async function checkCreditsPermission(id: string) {
  const user = getUserById(id);
  if (user == null) return notFound();

  //   to do : check if credits are still available
  
}
