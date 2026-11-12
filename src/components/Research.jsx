
import { motion } from "motion/react";
import { FlaskConical, Microscope, ArrowUpRight } from "lucide-react";

const experiences = [
  {
    type: "RESEARCH EXPERIENCE",
    title: "Summer Research Intern",
    organisation: "CDSAML Research Center",
    description:
      "Exploring research-driven applications of computer science and artificial intelligence as part of the CDSAML research environment at PES University.",
    period: "Summer Research Internship",
    icon: Microscope,
    current: true,
  },
];

export default function Research() {
  return (
    <section
      id="research"
      className="min-h-screen w-full px-6 md:px-16 pt-36 pb-24"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-pink-300 tracking-[0.35em] text-sm mb-3">
            BEYOND THE CLASSROOM
          </p>

          <h2 className="text-4xl md:text-6xl font-bold">
            Research & <span className="text-pink-300">Experience.</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl text-lg">
            Exploring ideas, learning through research, and
            applying technology to meaningful problems.
          </p>
        </motion.div>

        <div className="relative max-w-4xl">
          <div className="absolute left-6 top-4 bottom-4 w-px bg-gradient-to-b from-pink-300 via-purple-400/40 to-transparent" />

          {experiences.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative pl-20 pb-12"
              >
                <div className="absolute left-0 top-1 w-12 h-12 rounded-full bg-[#29232f] border border-pink-300/40 flex items-center justify-center">
                  <Icon size={21} className="text-pink-300" />
                </div>

                <div className="rounded-3xl border border-pink-200/10 bg-white/[0.035] p-7 md:p-9 hover:border-pink-300/40 transition-colors">
                  <p className="text-pink-300 text-xs tracking-[0.2em] mb-4">
                    {item.type}
                  </p>

                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    {item.title}
                  </h3>

                  <h4 className="text-purple-200 text-lg mb-5">
                    {item.organisation}
                  </h4>

                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between flex-wrap gap-4 mt-7">
                    <span className="text-sm text-gray-500">
                      {item.period}
                    </span>

                    <span className="text-xs text-pink-200 border border-pink-300/20 rounded-full px-4 py-2">
                      Research
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
