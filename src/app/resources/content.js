import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "TejasGod :",
  lastName: "Tejas",
  leetcodeUsername: "Tejas_leetcode", // Added
  codeforcesUsername: "Tejas_cf", // Added
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  get handles() { // Added getter for coding profiles
    return {
      leetcode: `https://leetcode.com/${this.leetcodeUsername}`,
      codeforces: `https://codeforces.com/profile/${this.codeforcesUsername}`
    };
  },
  role: "DSA student",
  avatar: "/images/avatar.jpg",
  location: "Asia/India",
  languages: ["Python", "CPP", "Javascript"],
};

const newsletter = {
  display: true,
  title: <>Subscribe to Algographs Newsletter</>,
  description: (
    <>
      Our newsletter is where we share our latest tutorials, tips, and tricks. Stay up to date with our latest content!
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/once-ui-system/nextjs-starter",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/once-ui/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:example@gmail.com",
  },
];
const home = {
  label: "Home",
  title: "Master DSA with Interactive Visualizations",
  description: "Start your journey to acing coding interviews.",
  headline: <>Learn DSA <br/>through Real-time Visualizations</>,
  subline: <>Explore data structures and algorithms with hands-on challenges. Learn at your own pace.</>,
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    options: [ // Added scheduling options
      {
        title: "Schedule DSA Session",
        type: "dsa",
        link: "https://cal.com/dsa-session",
      }
    ],
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a DSA student who finds string problems 
      particularly challenging. Concepts like pattern matching and string 
      manipulation often leave me stuck, but I'm eager to improve. 
      With the right guidance and practice, I hope to strengthen 
      problem-solving skills and gain confidence in DSA.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "FLY",
        timeframe: "2022 - Present",
        role: "Senior Design Engineer",
        achievements: [
          <>
           Concepts like pattern matching and string 
           manipulation often leave me stuck, but I'm eager to improve.
          </>,
          <>
             I hope to strengthen 
             problem-solving skills and gain confidence in DSA
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/gallery/img1.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Creativ3",
        timeframe: "2018 - 2022",
        role: "Lead Designer",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Jakarta",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/gallery/img7.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/gallery/img6.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/gallery/img5.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  favouriteCourses: {
    display: true,
    title: "Favourite Courses",
    courses: [
      {
        title: "Data Structures and Algorithms",
        link: "https://www.youtube.com/watch?v=umVsN1i7wzQ",
      },
      {
        title: "Object-Oriented Programming",
        link: "https://www.youtube.com/watch?v=4F72VULWFvc",
      },
      {
        title: "Web Development",
        link: "https://www.youtube.com/watch?v=jT5aAZCR8e8",
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "The Art of Programming is the Art of organising Complexity",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
