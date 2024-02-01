import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here
}

main()
  .then(async () => {
    // await prisma.user.create({
    //   data: {
    //     name: "Ivonne",
    //     email: "ivonne@prisma.io",
    //     posts: {
    //       create: { title: "Hello World" },
    //     },
    //     profile: {
    //       create: { bio: "I like turtles" },
    //     },
    //   },
    // });

    // const user = await prisma.user.findFirst({
    //   where: {
    //     enabled: false
    //   },
    //   include: {
    //     posts: true,
    //     profile: true
    //   }
    // });

    // if (!user) {
    //   throw new Error('User not found!'); 
    // }

    // await prisma.post.deleteMany({
    //   where: {
    //     id: {
    //       in: user.posts.map(post => post.id)
    //     }
    //   }
    // });

   
    // await prisma.profile.delete({
    //   where: {
    //     id: user.profile?.id
    //   }
    // });

    // const deletedUsers = await prisma.user.delete({
    //   where: {
    //     id: user.id
    //   }
    // }); 

    // console.dir(deletedUsers, { depth: null });

    const enabledUsers = await prisma.user.findMany({
      where: {
        enabled: false
      }
    });

    // const disabledUsers = await prisma.user.find
    console.dir(enabledUsers, { depth: null });

    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
