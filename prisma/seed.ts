import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  const posts = [
    {
      slug: "my-first-post",
      title: "Hello world",
      markdown: `
          # This is my first post

          -Sit duis sunt nostrud laborum sunt. 

          -Minim nisi nisi et magna proident voluptate.

          -Cupidatat cupidatat voluptate tempor minim commodo. 

          -Laborum labore voluptate eiusmod exercitation labore.

          -Consequat ad id do proident ullamco consectetur anim.
      `.trim(),
    },
    {
      slug: "90s-mixtape",
      title: "A music mix I Made",
      markdown: `
          # 90s Mixtape
          
          - I wish (Skee-Lo)
          - This Is How We Do It (Montell Jordan)
          - Everlong (Foo Fighters)
          - Ms. Jackson (Outkast)
          - Interstate Love Song (Stone Temple Pilots)
          - Killing Me Softly With His Song (Fugees, Ms. Lauryn Hill)
          - Just a Friend (Biz Markie)
          - The Man Who Sold The World (Nirvana)
          - Semi-Charmed Life (Third Eye Blind)
          - ...Baby One More Time (Britney Spears)
          - Better Man (Pearl Jam)
          - It's All Coming Back to Me Now (Céline Dion)
          - This Kiss (Faith Hill)
          - Fly Away (Lenny Kravits)
          - Scar Tissue (Red Hot Chili Peppers)
          - Santa Monica (Everclear)
          - C'mon N' Ride it (Quad City DJ's)
      `.trim(),
    },
    {
      slug: "my-second-post",
      title: "Adipisicing bla.",
      markdown: `
          # This is my first post

          -Sit duis sunt nostrud laborum sunt. 
          
          -Minim nisi nisi et magna proident voluptate.

          -Cupidatat cupidatat voluptate tempor minim commodo. 

          -Laborum labore voluptate eiusmod exercitation labore.

          -Consequat ad id do proident ullamco consectetur anim.
      `.trim(),
    },
    {
      slug: "my-third-post",
      title: "Elit exercitation bla.",
      markdown: `
          # This is my first post

          -Sit duis sunt nostrud laborum sunt. 
          
          -Minim nisi nisi et magna proident voluptate.

          -Cupidatat cupidatat voluptate tempor minim commodo. 

          -Laborum labore voluptate eiusmod exercitation labore.

          -Consequat ad id do proident ullamco consectetur anim.
      `.trim(),
    },
    {
      slug: "my-forth-post",
      title: "Ut eiusmod bla.",
      markdown: `
          # This is my first post

          -Sit duis sunt nostrud laborum sunt. 
          
          -Minim nisi nisi et magna proident voluptate.

          -Cupidatat cupidatat voluptate tempor minim commodo. 

          -Laborum labore voluptate eiusmod exercitation labore.

          -Consequat ad id do proident ullamco consectetur anim.
      `.trim(),
    },
  ];

  for (const post of posts) {
    await prisma.post.upsert({
      where: { slug: post.slug },
      update: post,
      create: post,
    });
  }

  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
