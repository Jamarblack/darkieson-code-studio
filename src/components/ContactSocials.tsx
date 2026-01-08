import React from "react";
import { Github, Linkedin, Send } from "lucide-react";

// Custom Telegram Icon
const TelegramIcon = ({ size = 20 }: { size?: number }) => (
  <svg 
    width={size} height={size} viewBox="0 0 24 24" fill="none" 
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
  >
    <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
  </svg>
);

const socials = [
  {
    name: "GITHUB_REPO",
    icon: Github,
    url: "https://github.com/Jamarblack",
    status: "PUBLIC"
  },
  {
    name: "LINKEDIN_NET",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/mubaraq-abdulraheem-8749892b7",
    status: "CONNECT"
  },
  {
    name: "TELEGRAM_COM",
    icon: TelegramIcon,
    url: "https://t.me/Darkieson",
    status: "CHAT"
  }
];

const ContactSocials = () => {
  return (
    <div className="mt-8 pt-8 border-t bg-black border-gray-800">
      <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-4 font-mono">
        Establish_Connection_Via:
      </div>
      <div className="flex flex-wrap gap-4">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-4 py-2 bg-gray-900 border border-gray-800 hover:border-brand-neon hover:bg-black transition-all"
          >
            <social.icon size={16} className="text-gray-400 group-hover:text-brand-neon" />
            <span className="text-xs font-mono text-gray-300 group-hover:text-white">
              {social.name}
            </span>
            <span className="text-[8px] px-1 bg-gray-800 text-gray-500 rounded group-hover:bg-brand-neon group-hover:text-black transition-colors">
              {social.status}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactSocials;