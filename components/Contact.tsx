import { Mail } from "lucide-react";
import RevealHeading from "./RevealHeading";
import { site, socials } from "@/lib/data";

function SocialIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "instagram":
      return (
        <span
          className="h-11 w-11 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)" }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2}>
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none" />
          </svg>
        </span>
      );
    case "twitter":
      return (
        <span className="h-11 w-11 rounded-xl bg-black flex items-center justify-center shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="white">
            <path d="M17.53 3H21l-7.5 8.57L22 21h-6.9l-5.4-6.62L3.5 21H0l8.06-9.22L2 3h7.1l4.88 6.06L17.53 3zm-1.2 16h1.9L7.75 5H5.7l10.62 14z" />
          </svg>
        </span>
      );
    case "facebook":
      return (
        <span className="h-11 w-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: "#1877F2" }}>
          <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="white">
            <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12" />
          </svg>
        </span>
      );
    case "discord":
      return (
        <span className="h-11 w-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: "#5865F2" }}>
          <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="white">
            <path d="M20.3 5.4A17.6 17.6 0 0 0 15.9 4c-.2.4-.5.9-.6 1.3a16.4 16.4 0 0 0-4.6 0A8.3 8.3 0 0 0 10 4a17.5 17.5 0 0 0-4.4 1.4C2.9 9 2.2 12.6 2.5 16.1a17.7 17.7 0 0 0 5.4 2.7c.4-.6.8-1.2 1.1-1.9-.6-.2-1.2-.5-1.7-.9l.4-.3a12.6 12.6 0 0 0 10.6 0l.4.3c-.5.4-1.1.7-1.7.9.3.7.7 1.3 1.1 1.9a17.6 17.6 0 0 0 5.4-2.7c.4-4-.6-7.6-2.8-10.7ZM9.7 13.9c-.9 0-1.6-.8-1.6-1.8s.7-1.8 1.6-1.8 1.6.8 1.6 1.8-.7 1.8-1.6 1.8Zm5.1 0c-.9 0-1.6-.8-1.6-1.8s.7-1.8 1.6-1.8 1.6.8 1.6 1.8-.7 1.8-1.6 1.8Z" />
          </svg>
        </span>
      );
    default:
      return null;
  }
}

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 border-t border-ink/[0.06] dark:border-white/[0.06]">
      <div className="container-content">
        <p className="section-label">Contact</p>
        <RevealHeading as="h2" className="text-3xl sm:text-4xl font-semibold tracking-tight max-w-xl mb-4">
          Open to collaborations and professional opportunities.
        </RevealHeading>
        <p className="text-ink-muted dark:text-ink-muted-dark max-w-lg mb-12">
          The fastest way to reach me is email.
        </p>

        <a href={`mailto:${site.email}`} className="btn-primary mb-14">
          <Mail size={15} />
          {site.email}
        </a>

        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card-surface flex items-center gap-4 p-4 transition-all hover:-translate-y-0.5"
            >
              <SocialIcon icon={social.icon} />
              <span className="text-sm font-medium">{social.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
