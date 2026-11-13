
import { motion } from "motion/react";

export default function About() {
  const technicalInterests = [
    "Software Development",
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "Research & Innovation",
  ];

  const personalInterests = [
    "Guitar",
    "Singing",
    "Cycling",
    "Swimming",
    "Running",
    "Badminton",
    "Sketching",
  ];

  const interestCardStyle = {
    background: "#29222e",
    border: "1px solid #493342",
    borderRadius: "18px",
    padding: "30px",
  };

  const interestLabelStyle = {
    color: "#df91b7",
    letterSpacing: "3px",
    fontSize: "12px",
  };

  const interestContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginTop: "22px",
  };

  const interestTagStyle = {
    padding: "10px 14px",
    borderRadius: "25px",
    background: "#3a2b39",
    border: "1px solid #62465a",
    color: "#eed3e2",
    fontSize: "13px",
  };

  return (
    <section
      id="about"
      style={{
        background: "#1d1922",
        color: "white",
        padding: "110px 8%",
        minHeight: "80vh",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "auto" }}>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p
            style={{
              color: "#df91b7",
              letterSpacing: "5px",
              fontSize: "13px",
            }}
          >
            GET TO KNOW ME
          </p>

          <h1
            style={{
              fontSize: "clamp(38px, 5vw, 60px)",
              marginTop: "15px",
            }}
          >
            About <span style={{ color: "#df91b7" }}>Me.</span>
          </h1>

          <div
            style={{
              width: "65px",
              height: "4px",
              background: "#df91b7",
              marginTop: "20px",
              borderRadius: "5px",
            }}
          />
        </motion.div>

        {/* Main Content */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "60px",
            marginTop: "55px",
            alignItems: "start",
          }}
        >

          {/* About Me Introduction */}
          <div>
            <h2
              style={{
                fontSize: "27px",
                lineHeight: "1.5",
                color: "#f1dce8",
              }}
            >
              A curious mind and AURA FARMING since 7th November , 2006 🔥
            </h2>

            <p
              style={{
                color: "#bcb4c0",
                lineHeight: "2",
                marginTop: "25px",
                fontSize: "16px",
              }}
            >
              I'm Ankita, a Third Year  Computer Science and Engineering undergraduate
              at PES University. I'm passionate about exploring different
              areas of technology, understanding complex problems, and
              turning ideas into meaningful software solutions.
            </p>

            <p
              style={{
                color: "#bcb4c0",
                lineHeight: "2",
                marginTop: "18px",
                fontSize: "16px",
              }}
            >
              My interests span software development, artificial
              intelligence, machine learning and research. I enjoy
              experimenting with technologies, building projects,
              and continuously expanding my technical knowledge.
            </p>

            <p
              style={{
                color: "#bcb4c0",
                lineHeight: "2",
                marginTop: "18px",
                fontSize: "16px",
              }}
            >
              Beyond technology, music is an important part of my life.
              I enjoy playing guitar and singing, which gives me another
              creative outlet beyond coding.
            </p>
          </div>

          {/* Interest Cards */}
          <div>

            {/* Technical Interests */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={interestCardStyle}
            >
              <p style={interestLabelStyle}>
                AREAS OF INTEREST (Technical)
              </p>

              <div style={interestContainerStyle}>
                {technicalInterests.map((item) => (
                  <span key={item} style={interestTagStyle}>
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Personal Interests */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              style={{
                ...interestCardStyle,
                marginTop: "25px",
              }}
            >
              <p style={interestLabelStyle}>
                AREAS OF INTEREST (My chaotic side) :)
              </p>

              <div style={interestContainerStyle}>
                {personalInterests.map((item) => (
                  <span key={item} style={interestTagStyle}>
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
