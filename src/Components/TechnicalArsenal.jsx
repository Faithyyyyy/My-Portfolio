import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  SiNextdotjs,
  SiNuxtdotjs,
  SiOpenai,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiSupabase,
  SiFramer,
  SiVite,
  SiGo,
  SiNestjs,
  SiDocker,
  SiGit,
  SiFigma,
  SiRedis,
  SiGraphql,
  SiStripe,
} from "react-icons/si";

const tools = [
  { name: "Next.js", Icon: SiNextdotjs, color: "#ffffff" },
  { name: "Nuxt.js", Icon: SiNuxtdotjs, color: "#00DC82" },
  { name: "OpenAI", Icon: SiOpenai, color: "#74AA9C" },
  { name: "NestJS", Icon: SiNestjs, color: "#E0234E" },
  { name: "Go", Icon: SiGo, color: "#00ACD7" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "Prisma", Icon: SiPrisma, color: "#ffffff" },
  { name: "Supabase", Icon: SiSupabase, color: "#3ECF8E" },
  { name: "Framer Motion", Icon: SiFramer, color: "#FF0055" },
  { name: "Vite", Icon: SiVite, color: "#646CFF" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
  { name: "Redis", Icon: SiRedis, color: "#DC382D" },
  { name: "GraphQL", Icon: SiGraphql, color: "#E10098" },
  { name: "Stripe", Icon: SiStripe, color: "#635BFF" },
];

export default function TechnicalArsenal() {
  const [hovered, setHovered] = useState(null);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    //  <div id="tech"></div>
    <section id="tech" ref={ref} style={{ background: "var(--bg)" }}>
      {/* <section ref={ref} style={{ padding: "5rem 0", background: "var(--bg)" }}> */}
      <div
        className="px-6 py-16 md:pt-6  xl:pt-28 max-w-6xl mx-auto xl:px-0 "
        style={{ maxWidth: "1152px", margin: "0 auto" }}
      >
        {/* <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 2rem" }}> */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: "DM Sans, sans-serif",
            fontSize: "0.72rem",
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            marginBottom: "2rem",
          }}
        >
          Technical Arsenal
        </motion.p>

        <div
          className="container"
          // style={{
          //   display: "flex",
          //   flexWrap: "wrap",
          //   gap: "0.75rem",
          //   alignItems: "center",
          //   justifyContent: "center",
          // }}
        >
          {tools.map((tool, i) => {
            const isHovered = hovered === tool.name;
            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.4,
                  delay: i * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onMouseEnter={() => setHovered(tool.name)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  position: "relative",
                  width: "64px",
                  height: "64px",
                  borderRadius: "16px",
                  background: isHovered ? "#1a1a1a" : "#111111",
                  border: `1px solid ${isHovered ? tool.color + "44" : "rgba(255,255,255,0.06)"}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "default",
                  transition: "all 0.2s ease",
                  color: isHovered ? tool.color : "rgba(255,255,255,0.35)",
                  boxShadow: isHovered ? `0 0 24px ${tool.color}22` : "none",
                  transform: isHovered ? "translateY(-3px)" : "translateY(0)",
                }}
              >
                <tool.Icon size={26} />

                {/* Tooltip */}
                {isHovered && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: "calc(100% + 10px)",
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "#1a1a1a",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "8px",
                      padding: "0.3rem 0.7rem",
                      whiteSpace: "nowrap",
                      fontFamily: "DM Sans, sans-serif",
                      fontSize: "0.72rem",
                      fontWeight: 500,
                      color: tool.color,
                      pointerEvents: "none",
                      zIndex: 10,
                      boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
                    }}
                  >
                    {tool.name}
                    {/* Arrow */}
                    <div
                      style={{
                        position: "absolute",
                        top: "100%",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: 0,
                        height: 0,
                        borderLeft: "5px solid transparent",
                        borderRight: "5px solid transparent",
                        borderTop: "5px solid rgba(255,255,255,0.1)",
                      }}
                    />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
