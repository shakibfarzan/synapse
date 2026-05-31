import { auth, currentUser } from '@clerk/nextjs/server';
import { prisma } from '@/lib/prisma';

export default async function getCurrentUser() {
  const { userId } = await auth();

  if (!userId) return null;

  const clerkUser = await currentUser();

  if (!clerkUser) return null;

  let user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) {
    user = await prisma.user.create({
      data: {
        id: userId,
        email: clerkUser.emailAddresses[0].emailAddress,
        imageUrl: clerkUser.imageUrl,
      },
    });
  }

  return user;
}
