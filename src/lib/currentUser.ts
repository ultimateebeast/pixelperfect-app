// lib/currentUser.ts
import { auth } from "@clerk/nextjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getCurrentUser() {
  const { userId } = auth();
  if (!userId) return null;

  const user = await prisma.user.findUnique({
    where: { clerkId: userId },
  });

  return user;
}
