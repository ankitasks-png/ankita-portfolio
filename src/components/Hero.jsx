
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Hero() {
  const identities = [
    "Tech Enthusiast",
    "Guitarist",
    "Singer",
    "Sport Enthusiast",
    "Cinephile",
  ];

  const [currentIdentity, setCurrentIdentity] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdentity((prev) => (prev + 1) % identities.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      style={{
        minHeight: "calc(100vh - 76px)",
        background: "#17151d",
        color: "white",
        display: "flex",
        alignItems: "center",
        padding: "70px 7%",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1350px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "1.15fr 0.85fr",
          alignItems: "center",
          gap: "65px",
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p
            style={{
              color: "#e8a0c1",
              letterSpacing: "5px",
              marginBottom: "20px",
              fontSize: "22px",
              fontWeight: "600",
            }}
          >
            HELLO, I'M
          </p>

          <h1
            style={{
              fontSize: "clamp(70px, 7vw, 100px)",
              fontWeight: "700",
              lineHeight: "1.1",
              margin: 0,
            }}
          >
            ANKITA <span style={{ color: "#df91b7" }}>S.</span>
          </h1>

          <h2
            style={{
              color: "#d5c8d6",
              fontSize: "27px",
              marginTop: "25px",
            }}
          >
            BTech CSE Student @ PES University
          </h2>

          <p
            style={{
              color: "#e8a0c1",
              fontSize: "25px",
              marginTop: "12px",
            }}
          >
            Aspiring Software Research & Development Intern
          </p>

          {/* Animated Personal Interests */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "8px",
              marginTop: "28px",
              minHeight: "55px",
              fontSize: "36px",
              fontWeight: "700",
            }}
          >
            <span
              style={{
                color: "#df91b7",
                whiteSpace: "nowrap",
                textShadow: "0 0 12px rgba(223,145,183,0.55)",
              }}
            >
              I'm a
            </span>

            <AnimatePresence mode="wait">
              <motion.span
                key={currentIdentity}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                style={{
                  color: "#f2a8ce",
                  fontSize: "36px",
                  fontWeight: "700",
                  textShadow:
                    "0 0 8px rgba(242,168,206,0.8), 0 0 20px rgba(223,145,183,0.55), 0 0 35px rgba(223,145,183,0.3)",
                }}
              >
                {identities[currentIdentity]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={`${import.meta.env.BASE_URL}images/avatar.png`}
            alt="Ankita's anime guitar illustration"
            style={{
              width: "100%",
              maxWidth: "460px",
              aspectRatio: "1 / 1",
              objectFit: "cover",
              borderRadius: "25px",
              border: "1px solid #d78caf",
              boxShadow: "0 0 65px rgba(215,140,175,0.18)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
