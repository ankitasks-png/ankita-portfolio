
import { motion } from "motion/react";

const certificates = [
  { name: "PESUIO - Linux & NixOS", image: "PESUIO.png" },
  { name: "Python - HackerRank", image: "hackerrank.png" },
  { name: "C programming - CodeChef", image: "codechef.jpg" },
  { name: "Mystara", image: "mystara.jpg" },
  { name: "IBM", image: "ibm.png" },
  { name: "Genesys", image: "genesys.jpg" },
  { name: "Hack-O-Ween", image: "hackoween.jpg" },
  { name: "CDSAML", image: "cdsaml.jpg" },
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      style={{
        minHeight: "60vh",
        background: "#17151d",
        color: "white",
        padding: "100px 7%",
        textAlign: "center",
      }}
    >
      <p
        style={{
          color: "#e8a0c1",
          letterSpacing: "5px",
          marginBottom: "15px",
        }}
      >
        MY ACHIEVEMENTS - still counting 😎...
      </p>

      <h2
        style={{
          fontSize: "48px",
          fontWeight: "bold",
          marginBottom: "60px",
        }}
      >
        CERTIFICATES
      </h2>

      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
          gap: "30px",
        }}
        className="certificate-grid"
      >
        {certificates.map((certificate, index) => (
          <motion.div
            key={certificate.name}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
            whileHover={{ y: -6 }}
            style={{
              background: "#29222e",
              border: "1px solid #62465a",
              borderRadius: "15px",
              padding: "12px",
              boxShadow: "0 0 20px rgba(215,140,175,0.08)",
              transition: "box-shadow 0.3s ease",
            }}
          >
            <img
              src={`${import.meta.env.BASE_URL}images/certificates/${certificate.image}`}
              alt={`${certificate.name} certificate`}
              loading="lazy"
              style={{
                width: "100%",
                height: "210px",
                objectFit: "contain",
                borderRadius: "8px",
                background: "#17151d",
              }}
            />

            <h3
              style={{
                color: "#eed3e2",
                fontSize: "17px",
                fontWeight: "600",
                marginTop: "14px",
              }}
            >
              {certificate.name}
            </h3>
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .certificate-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }

        @media (max-width: 520px) {
          .certificate-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
