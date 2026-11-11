
import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 pt-28 relative overflow-hidden"
    >
      <div className="absolute w-96 h-96 bg-violet-600/20 blur-[130px] rounded-full top-20 right-0" />

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-violet-400 tracking-[0.3em] uppercase text-sm mb-6">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Ankita
            <span className="text-violet-400"> Satish.</span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-300 mt-6">
            Computer Science Engineer
          </h2>

          <p className="text-gray-400 leading-8 mt-6 max-w-lg">
            Passionate about Artificial Intelligence, Machine Learning,
            Deep Learning and building technology that makes a difference.
            I love exploring ideas and turning them into real-world projects.
          </p>

          <div className="flex flex-wrap gap-4 mt-9">
            <a
              href="#projects"
              className="bg-violet-600 hover:bg-violet-700 px-7 py-3 rounded-lg flex items-center gap-2 transition"
            >
              Explore My Work <ArrowRight size={18} />
            </a>

            <a
              href="#contact"
              className="border border-white/20 hover:border-violet-400 px-7 py-3 rounded-lg transition"
            >
              Contact Me
            </a>
          </div>

          <div className="flex gap-6 mt-10 text-gray-400">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <Github className="hover:text-violet-400 transition" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              <Linkedin className="hover:text-violet-400 transition" />
            </a>
            <a href="mailto:your-email@example.com">
              <Mail className="hover:text-violet-400 transition" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-full border border-violet-500/40 bg-gradient-to-br from-violet-600/20 to-blue-500/10 flex items-center justify-center shadow-2xl shadow-violet-900/30">
            <div className="text-center">
              <div className="text-8xl mb-4">👩🏻‍💻</div>
              <p className="text-gray-400 tracking-widest text-sm">
                BUILD · LEARN · CREATE
              </p>
            </div>
          </div>
        </motion.div>

      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 animate-bounce"
      >
        <ArrowDown />
      </a>
    </section>
  );
}
