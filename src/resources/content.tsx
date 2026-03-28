import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Khiem",
  lastName: "Pham Duc",
  name: `Pham Duc Khiem`,
  role: "Devops Engineer",
  avatar: "/images/avatar.jpg",
  email: "khiem0902@gmail.com",
  location: "Asia/Ho_Chi_Minh", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Vietnamese", "French"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/khiemict0902",
    essential: true,
  },

  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/",
    essential: true,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/",
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
    I'm Khiem, a devops engineer at <Text as="span" size="xl" weight="strong">ONCE UI</Text>, where I craft intuitive <br /> user experiences. After hours, I build my own projects.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
       A recent IT Graduate with a one-year background in Odoo Backend development, now seeking a DevOps/MLOps
        Engineer. I enjoy researching and learning new technologies and have a strong interest in automation and CI/CD
        workflows. I successfully automated deployment pipelines for Odoo systems using Jenkins and Git, replacing
        manual updates with a robust workflow. This optimization minimized errors and saved significant time for the
        team. Previously, I also participated in the ChongLuaDao frontend project while I was a student and was active in
        the university’s programming club, organizing several projects and activities for that club. In addition, I have a
        particular love Linux and am interested in researching the use of AI models in computer vision. As a graduate of
        an English-taught university program, I am proficient in reading and researching technical documentation in
        English. I am looking for an opportunity to apply my technical knowledge and automation skills in a professional
        environment.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "AUM Vietnam",
        timeframe: "Mar 2025 - Mar 2026",
        role: "Python Odoo Backend Developer",
        achievements: [
          <>
            Using Python, build and develop a CRM module, a customer profile management module, on the internal Odoo
system.

          </>,
          <>
            Implemented end-to-end CI/CD pipelines for internal and B2B Odoo systems on an on-premise server. Managed
full-stack environment setup, including service configuration and user access control. Utilized Jenkins to
automate code retrieval from Git and streamline deployment processes, ensuring system stability and efficient
server management. I successfully automated the deployment pipeline, transitioning from manual developer-led
updates to a robust CI/CD workflow. This eliminated the old process where developers manually uploaded and
ran their own code on the server. The new process is fully optimized, minimizing errors and saving a significant
amount of time.

          </>,
          <>
             Conducted research on packaging code using Docker for application in staging and production environments
          </>,
                    <>
           Conducted research on upgrading Odoo from version 16 to version 17, including studying source code changes,
database migration, and attachments. I have successfully tested several modules on a B2B system without errors
or data loss.

          </>,
                    <>
            Conducted research on restructuring the module and contact table to suit different customer segments, for
example, building customer profiles. The contact module features can be used and linked to accounting
information.
          </>,

        ],
        images: [
          // optional: leave the array empty if you don't want to display images

        ],
      },
      
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "University of Science and Technology of Hanoi(USTH)",
        description: [
          <>Hanoi, Vietnam
</>,
        <>Bachelor of Information Communication and Technology(ICT)
</>,
        <>Language of training: English
</>,
<>Graduate: Oct 2025
</>,]
      },

    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
