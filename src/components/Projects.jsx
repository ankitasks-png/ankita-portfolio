
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Mission Parakram",
    image: "/images/mission_parakram.png",
    github: "https://github.com/ankitasks-png/Mission_Parakram",
  },
  {
    number: "02",
    title: "RecovAI",
    image: "/images/recov_ai.png",
    github: "https://github.com/ankitasks-png/RecovAI-",
  },
  {
    number: "03",
    title: "HarmLens",
    image: "/images/harm_lens.png",
    github: null,
  },
  {
    number: "04",
    title: "ECHONAV",
    image: "/images/echonav.png",
    github: "https://github.com/ankitasks-png/ECHONAV",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 pt-56 pb-32"
      style={{
        width: "100vw",
        position: "relative",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <div className="w-full flex flex-col items-center">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >
          <p className="text-pink-300 tracking-[0.35em] text-sm mb-7">
            WHAT I'VE BEEN BUILDING ?? 🤔🤔
          </p>

          <h2 className="text-4xl md:text-6xl font-bold">
            MY BEST PROJECTS{" "}
            <span className="text-pink-300">LMAO 😁</span>
          </h2>
        </motion.div>

        {/* Project Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
          style={{
            width: "min(1100px, calc(100% - 40px))",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: (index % 2) * 0.1,
              }}
              whileHover={{ y: -7 }}
              className="group relative h-[300px] md:h-[340px] rounded-3xl overflow-hidden border border-pink-200/15 bg-[#211b30] hover:border-pink-300/50 transition-all duration-300"
            >
              {/* Project Image */}
              <img
                src={`${import.meta.env.BASE_URL}${project.image.replace(/^\//, "")}`}
                alt={`${project.title} project preview`}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-colors duration-300" />

              {/* Project Name */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {project.title}
                </h3>
              </div>

              {/* View Project Link */}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.title} GitHub repository`}
                  className="
                    absolute inset-0 z-20
                    flex items-center justify-center
                    opacity-0 group-hover:opacity-100
                    focus-visible:opacity-100
                    transition-opacity duration-300
                    max-md:opacity-100
                    max-md:items-start
                    max-md:justify-end
                    max-md:p-5
                  "
                >
                  <span className="flex items-center gap-2 text-white text-sm font-medium tracking-widest hover:text-pink-300 transition-colors">
                    VIEW PROJECT
                    <ArrowUpRight size={18} />
                  </span>
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
