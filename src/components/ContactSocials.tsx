
import React from "react";

// Socials data
const SOCIALS = [
  {
    href: "https://github.com/Jamarblack",
    label: "GitHub",
    icon: <img src="/github.svg" alt="github" className="w-10 h-10" />,
  },
  {
    href: "https://www.linkedin.com/in/mubaraq-abdulraheem-8749892b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    label: "LinkedIn",
    icon: <img src="/linkedin.svg" alt="linkedin" className="w-10 h-10" />,
  },
  {
    href: "https://t.me/Darkieson",
    label: "Telegram",
    icon: <img src="/telegram.svg" alt="telegram" className="w-10 h-10" />,
  },
  {
    href: "mailto:darkiesoncodestudio@gmail.com",
    label: "Email",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const ContactSocials: React.FC = () => (
  <div className="mt-8 mb-8 dark:bg-gray-950 flex flex-wrap justify-center gap-8">
    {SOCIALS.map(({ href, icon, label }) => (
      <div key={label} className="flex flex-col items-center">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-brand-blue transition-all hover:bg-gray-200 hover:text-brand-blue hover:scale-105 hover:shadow-lg"
          aria-label={label}
        >
          {icon}
        </a>
        <span className="mt-2 text-sm text-gray-700">{label}</span>
      </div>
    ))}
  </div>
);

export default ContactSocials;
