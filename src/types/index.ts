import { JSX } from "react";

export type NavItem = {
  title: string;
  icon: JSX.Element;
};

export type SkillName =
  | "JavaScript"
  | "TypeScript"
  | "HTML"
  | "Tailwind CSS"
  | "CSS"
  | "Node.js"
  | "Express.js"
  | "NestJS"
  | "React.js"
  | "Pug.js"
  | "EJS"
  | "Next.js"
  | "Redux"
  | "Vue.js"
  | "MongoDB"
  | "Mongoose.js"
  | "MySQL"
  | "Linux"
  | "Git"
  | "GitHub"
  | "Docker"
  | "Python"
  | "Craft CMS"
  | "Php"
  | "Twig"
  | "Yup"
  | "Formik"
  | "FireBase"
  | "React Hook Form"
  | "RTK Query"
  | "React Query"
  | "Supabase"
  | "Formik"
  | "Yup"
  | "Zod"
  | "Shadcn UI"
  | "Framer Motion"
  | "Ant Design"
  | "Prisma ORM"
  | "Drizzle ORM";

export type Skill = {
  name: SkillName;
  iconUrl: string;
};
