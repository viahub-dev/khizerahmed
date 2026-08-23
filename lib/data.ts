// ---------------------------------------------------------------------------
// All editable site content lives here. Edit this file to update the site —
// nothing else in the codebase needs to change for content edits.
//
// Nothing in this file was invented: every field reflects only what was
// explicitly confirmed. Leave a field out (don't fabricate a placeholder)
// if new information isn't confirmed yet.
// ---------------------------------------------------------------------------

export const site = {
  name: "Khizer Ahmed Khan",
  role: "Computer Science Student",
  tagline: "Learning, Building, and Growing Every Day.",
  url: "https://khizerahmedkhan.vercel.app",
  email: "khizerahmedkhan21@gmail.com",
  location: "Karachi, Pakistan"
  // No phone number is displayed publicly, by request.
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Creative", href: "#creative" },
  { label: "Tutoring", href: "#tutoring" },
  { label: "Qur'an Tutor", href: "#quran-tutor" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" }
];

export const socials = [
  { label: "Instagram", href: "https://www.instagram.com/khizer.ahmedkhan/", icon: "instagram" },
  { label: "X / Twitter", href: "https://x.com/khizerahmed_7", icon: "twitter" },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61587351744067", icon: "facebook" },
  { label: "Discord", href: "https://discord.com/users/1415010071796256909", icon: "discord" }
  // GitHub / LinkedIn / YouTube / TikTok / WhatsApp intentionally skipped for now.
];

export const about = {
  paragraphs: [
    "I'm particularly interested in Artificial Intelligence, Machine Learning, Robotics, and Computer Vision, with a growing focus on Autonomous Vehicles and ADAS, Web Development, Software Engineering, Cybersecurity, and Aerospace Technology.",
    "I'm a curious and creative learner with an analytical and innovative mindset, driven by a passion for exploring new ideas, understanding how things work, and continuously developing my skills.",
    "I plan to pursue a Bachelor's degree in Computer Science, with the long-term goal of specializing through a Master's degree in either Automotive Technology or Cybersecurity."
  ],
  highlights: [
    { label: "Based in", value: "Karachi, Pakistan" },
    { label: "Studying", value: "Intermediate — Computer Science" },
    { label: "Open to", value: "Collaborations & opportunities" },
    { label: "Achievement", value: "Hifz-ul-Quran, 2022" }
  ],
  quickHighlight:
    "Passionate about exploring emerging technologies in Robotics, Autonomous Systems, and Cybersecurity."
};

export const skills = [
  { name: "HTML", level: "Beginner" },
  { name: "C++", level: "Beginner" },
  { name: "Python", level: "Beginner" }
];

export const tools = ["GitHub", "Supabase", "Next.js", "Tailwind CSS", "VS Code"];

export const interests = [
  "Artificial Intelligence",
  "Machine Learning",
  "Robotics",
  "Computer Vision",
  "Autonomous Vehicles / ADAS",
  "Web Development",
  "Software Engineering",
  "Cybersecurity",
  "Aerospace Technology"
];

export type Project = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  date: string;
  role: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "flareloop-studio",
    title: "Flareloop Studio",
    summary:
      "A modern online art portfolio designed to showcase creative work, artwork, and commission-based services.",
    category: "Art Portfolio",
    date: "July 2026",
    role: "Owner / Creator",
    liveUrl: "https://flareloopstudio.netlify.app"
  }
];

export const creativeCategories = [
  {
    title: "Artwork & Client Projects",
    description: "Original artwork, creative assignments, and commission-based client work."
  },
  {
    title: "CV & Resume Design",
    description: "Clean, professional resume and CV layouts designed for real-world use."
  },
  {
    title: "Advertising & Promotional Design",
    description: "Social media ads, posters, and other promotional/digital graphics."
  }
];

export const tutoring = {
  intro:
    "I teach students online, helping them build a clear understanding of their subjects in a structured, approachable way.",
  classes: [
    { grade: "Class 4th – 8th", subjects: ["All Subjects"] },
    { grade: "Class 9th – 10th", subjects: ["Physics", "Chemistry", "Computer Science", "Mathematics"] }
  ]
};

export const quranTutor = {
  intro:
    "Helping students build confidence in Qur'an reading through structured online lessons, consistent practice, and a supportive learning environment.",
  scope: [
    "Noorani Qaida",
    "Nazra Qur'an",
    "Hifz-ul-Qur'an Support",
    "Basic Tajweed",
    "Daily Lesson Revision",
    "Children & Adult Learners",
    "One-to-One Online Classes"
  ],
  highlights: [
    "Personalized learning approach",
    "Focus on correct pronunciation and fluency",
    "Structured lesson progression",
    "Flexible online scheduling",
    "Supportive learning environment",
    "Regular progress tracking"
  ]
};

export const education = [
  {
    institution: "PECHS Education Foundation Govt. Degree Science College",
    program: "Intermediate in Computer Science (ICS)",
    period: "2024 – 2026",
    location: "Karachi, Pakistan",
    subjects: ["Computer Science", "Mathematics", "Physics"]
  },
  {
    institution: "Madrasa Jamia Ul Quran Usman Bin Affan",
    program: "Hifz-ul-Quran",
    period: "Completed 2022",
    location: "Karachi, Pakistan",
    certification: "Wifaq-ul-Madaris Al-Arabia certified"
  }
];

export const experience = [
  {
    title: "Freelance Creative & Artwork Projects",
    org: "Independent / Client Work",
    description:
      "A modern online art portfolio designed to showcase creative work, artwork, and commission-based services."
  }
];
