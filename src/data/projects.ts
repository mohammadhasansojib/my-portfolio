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
    image: "https://i.ytimg.com/vi/uj_4vxm9u90/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA5P0WRc3lOEFxUL4zOzQ3knFDskw",
    shortDescription:
      "A secure authentication system with JWT-based login, registration, and protected routes.",
    description:
      "A full-stack authentication system supporting registration, login, password hashing, JWT access/refresh token flow, and protected API routes. Built to demonstrate secure, production-style auth handling from scratch rather than relying on a third-party auth provider.",
    techStack: ["Node.js", "Express.js", "PostgreSQL", "Prisma", "JWT", "React"],
    liveUrl: "https://your-live-link.com",
    githubUrl: "https://github.com/your-username/auth-system",
    challenges:
      "Handling refresh token rotation securely and preventing token replay attacks was the trickiest part — I had to think carefully about where tokens are stored (httpOnly cookies vs local storage) and how to invalidate old refresh tokens on rotation.",
    improvements:
      "Planning to add OAuth (Google/GitHub login), rate limiting on auth endpoints, and email verification for new accounts.",
  },
  {
    slug: "ecommerce-backend",
    name: "E-commerce Backend",
    image: "https://sudishworld.co.uk/wp-content/uploads/2025/09/ecommerce-sudish-world.jpg",
    shortDescription:
      "A backend for an e-commerce platform with cart, orders, and secure payment-ready architecture.",
    description:
      "A backend system handling product catalog, cart management, and order processing with database transactions to ensure data consistency — e.g. stock isn't oversold under concurrent orders. Built with idempotency in mind so retried requests don't create duplicate orders.",
    techStack: ["Nest.js", "PostgreSQL", "Prisma", "TypeScript"],
    liveUrl: "https://your-live-link.com",
    githubUrl: "https://github.com/your-username/ecommerce-backend",
    challenges:
      "Making sure concurrent order placements didn't oversell limited stock required wrapping critical operations in database transactions and thinking through race conditions I hadn't dealt with before.",
    improvements:
      "Adding a proper payment gateway integration, order status webhooks, and an admin dashboard for inventory management.",
  },
  {
    slug: "realtime-chat",
    name: "Real-Time Chat App",
    image: "https://png.pngtree.com/thumb_back/fh260/background/20230712/pngtree-sterile-operating-room-equipped-with-c-arm-and-medical-tools-3d-image_3852193.jpg",
    shortDescription:
      "A real-time messaging app with WebSocket-based live updates and reconnection handling.",
    description:
      "A chat application supporting real-time message delivery via WebSockets, with automatic reconnection handling and message delivery guarantees. Explored Redis pub/sub for scaling real-time events across multiple server instances.",
    techStack: ["Node.js", "Socket.io", "Redis", "React", "PostgreSQL"],
    liveUrl: "https://your-live-link.com",
    githubUrl: "https://github.com/your-username/realtime-chat",
    challenges:
      "Handling WebSocket reconnection gracefully — without losing or duplicating messages — took several iterations, especially around what happens to in-flight messages when a client briefly disconnects.",
    improvements:
      "Adding typing indicators, read receipts, and message persistence with pagination for chat history.",
  },
]