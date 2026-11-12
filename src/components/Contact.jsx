
import { motion } from "motion/react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaGraduationCap,
} from "react-icons/fa";

const contacts = [
  {
    name: "GitHub",
    icon: FaGithub,
    link: "https://github.com/ankitasks-png",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    link: "https://www.instagram.com/_ankita__7116/",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/ankita-satish-kumar-0b84131b4/",
  },
  {
    name: "Personal Email",
    icon: FaEnvelope,
    link: "mailto:ankitasatish0711@gmail.com",
  },
  {
    name: "College Email",
    icon: FaGraduationCap,
    link: "mailto:PES1UG24CS066@stu.pes.edu",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full flex justify-center items-center px-6 py-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-4xl rounded-3xl border border-pink-300/20 bg-[#29222e] shadow-[0_10px_45px_rgba(223,145,183,0.07)] hover:border-pink-300/40 transition-all duration-500"
        style={{
          padding: "55px 35px",
        }}
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-center"
          style={{
            marginBottom: "65px",
          }}
        >
          CONTACT <span className="text-pink-300">ME.</span>
        </motion.h2>

        {/* Contact Icons */}
        <div
          className="flex items-center justify-center flex-wrap"
          style={{
            columnGap: "65px",
            rowGap: "35px",
          }}
        >
          {contacts.map((contact, index) => {
            const Icon = contact.icon;

            return (
              <motion.a
                key={contact.name}
                href={contact.link}
                target={contact.name.includes("Email") ? undefined : "_blank"}
                rel="noreferrer"
                aria-label={contact.name}
                title={contact.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.2, y: -6 }}
                whileTap={{ scale: 0.95 }}
                className="text-white hover:text-pink-300 transition-colors duration-300"
              >
                <Icon size={36} />
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
