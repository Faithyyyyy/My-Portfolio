import React from "react";
import { FiGithub, FiMail, FiTwitter, FiLinkedin } from "react-icons/fi";

const socials = [
  {
    label: "LinkedIn",
    Icon: FiLinkedin,
    href: "https://www.linkedin.com/in/faitholoninayin/",
  },
  {
    label: "GitHub",
    Icon: FiGithub,
    href: "https://github.com/Faithyyyyy",
  },
  // {
  //   label: "Twitter",
  //   Icon: FiTwitter,
  //   href: "https://x.com/faitthtoby",
  // },
  {
    label: "Email",
    Icon: FiMail,
    href: "mailto:faithfortune6@gmail.com",
  },
];

export default function SocialLinks() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "0.75rem",
        marginTop: "3rem",
      }}
    >
      {socials.map(({ label, Icon, href }) => (
        <a
          key={label}
          href={href}
          target={label === "Email" ? "_self" : "_blank"}
          rel="noopener noreferrer"
          className="social-link"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.55rem",
            padding: "0.65rem 1.25rem",
            borderRadius: "9px",
            fontFamily: "DM Sans, sans-serif",
            fontSize: "0.875rem",
            fontWeight: 400,
            textDecoration: "none",
            transition: "all 0.2s ease",
            cursor: "pointer",
          }}
        >
          <Icon size={15} />
          {label}
        </a>
      ))}
    </div>
  );
}
