// data/projects.ts
export type Project = {
  slug: string
  name: string
  image: string
  shortDescription: string
  description: string
  techStack: string[]
  liveUrl: string
  githubUrl: string
  challenges: string
  improvements: string
}

export const PROJECTS: Project[] = [
  {
    slug: "auth-system",
    name: "Auth System",
    image: "/auth-system.png",
    shortDescription:
      "A secure authentication system with JWT-based login, registration, and protected routes.",
    description:
      "A full-stack authentication system supporting registration, login, password hashing, JWT access/refresh token flow, and protected API routes. Built to demonstrate secure, production-style auth handling from scratch rather than relying on a third-party auth provider.",
    techStack: ["Node.js", "Express.js", "PostgreSQL", "Prisma", "JWT", "React"],
    liveUrl: "https://user-authentication-and-profile-man.vercel.app/register",
    githubUrl: "https://github.com/mohammadhasansojib/user-authentication-and-profile-management-api/tree/master/frontend",
    challenges:
      "Handling refresh token rotation securely and preventing token replay attacks was the trickiest part — I had to think carefully about where tokens are stored (httpOnly cookies vs local storage) and how to invalidate old refresh tokens on rotation.",
    improvements:
      "Planning to add OAuth (Google/GitHub login), rate limiting on auth endpoints, and email verification for new accounts.",
  },
  {
    slug: "university-management-system",
    name: "University Management System",
    image: "/university-management-system.png",
    shortDescription:
      "This is a management system for an universit to handle student admission, teacher assign, and other administrative tasks.",
    description:
      "A comprehensive university management platform built to simplify academic and administrative workflows. It includes student admission, department and faculty management, course registration, teacher assignments, semester management, and role-based access control, providing an efficient solution for managing day-to-day university operations.",
    techStack: ["Node.js", "React", "PostgreSQL", "TailwindCSS", "Prisma"],
    liveUrl: "https://university-management-system-bice.vercel.app",
    githubUrl: "https://github.com/mohammadhasansojib/university-management-system/tree/master/client",
    challenges:
      "Designing a scalable role-based access control system while maintaining data consistency across related entities such as students, faculties, departments, courses, and semesters. Managing complex database relationships and validation logic with Prisma was one of the biggest challenges.",
    improvements:
      "Add email notifications, attendance tracking, result publishing, payment integration, analytics dashboards, and audit logs. Future versions could also include class scheduling, real-time announcements, and file management for assignments and academic documents.",
  },
  {
    slug: "todo-list-app",
    name: "Todo List App",
    image: "/to-do-list-app.png",
    shortDescription:
      "A full-stack task management application that helps users organize, prioritize, and track their daily tasks with a clean and responsive interface.",
    description:
      "A modern to-do application built to simplify personal task management. Users can create, update, delete, and organize tasks, mark them as completed, and filter tasks based on their status. The application focuses on delivering a smooth user experience with efficient state management and a scalable backend architecture.",
    techStack: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://listed-todo.vercel.app/",
    githubUrl: "https://github.com/mohammadhasansojib/todo-list-app",
    challenges:
      "Designing a flexible task management system while maintaining data consistency during create, update, and delete operations. Structuring the backend with clean architecture and implementing efficient validation and error handling were key challenges.",
    improvements:
      "Add task categories, due dates, reminders, recurring tasks, drag-and-drop task organization, collaborative workspaces, real-time synchronization, and email or push notifications for upcoming deadlines.",
  },
]