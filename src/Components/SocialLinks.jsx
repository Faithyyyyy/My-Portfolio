import { FiGithub, FiMail, FiTwitter, FiLinkedin } from "react-icons/fi";

const socials = [
  {
    label: "GitHub",
    Icon: FiGithub,
    href: "https://github.com/Faithyyyyy",
  },
  {
    label: "LinkedIn",
    Icon: FiLinkedin,
    href: "https://www.linkedin.com/in/faitholoninayin/",
  },
  {
    label: "Twitter",
    Icon: FiTwitter,
    href: "https://x.com/faitthtoby",
  },
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
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.55rem",
            padding: "0.65rem 1.25rem",
            borderRadius: "9px",
            background: "#111111",
            border: "1px solid rgba(255,255,255,0.08)",
            color: "rgba(255,255,255,0.65)",
            fontFamily: "DM Sans, sans-serif",
            fontSize: "0.875rem",
            fontWeight: 400,
            textDecoration: "none",
            transition: "all 0.2s ease",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#1a1a1a";
            e.currentTarget.style.borderColor = "#a78bfa";
            e.currentTarget.style.color = "#a78bfa";
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 0 16px rgba(167,139,250,0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#111111";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
            e.currentTarget.style.color = "rgba(255,255,255,0.65)";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <Icon size={15} />
          {label}
        </a>
      ))}
    </div>
  );
}
