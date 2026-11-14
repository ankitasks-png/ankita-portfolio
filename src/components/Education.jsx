import { motion } from "motion/react";

const education = [
  {
    institution: "The Brigade School",
    period: "2009 – 2022",
    qualification: "High School · CBSE",
    activities: [
      "Sports",
      "Music",
      "Symposium Technical Team",
    ],
    number: "01",
  },
  {
    institution: "BASE PU College",
    period: "2022 - 2024 ",
    qualification: "Science Stream - Pre-University Education ",
    activities: ["Music", "Sports"],
    number: "02",
  },
  {
    institution: "PES University",
    period: "2024 - 2028",
    qualification: "Undergraduate - B.Tech · Computer Science and Engineering",
    activities: [],
    number: "03",
  },
];

const involvement = [
  {
    title: "Research",
    icon: "🔬",
    color: "#d9a0c1",
    items: [
      "Summer Research Intern – CDSAML",
    ],
  },
  {
    title: "Competitions & Events",
    icon: "🏆",
    color: "#d9a0c1",
    items: [
      "Capture The Flag (CTF)",
      "Mystara Hackathon",
      "Genesys – State Level Hackathon",
      "IBM Global Datathon",
      "Hack-O-Ween – 24 Hour Hackathon – Top 10 Finalist",
      "GRASP – National Hackathon",
      "CIE SPARK – Top 20 Finalist – Entrepreneurial Ideathon",
      "Runner-up – Badminton",
      "Battle of Bands – Aatmatrisha College Fest (2025)",
    ],
  },
  {
    title: "Club Work",
    icon: "👩‍💻",
    color: "#d9a0c1",
    items: [
      "AURA – Socials and Outreach",
      "Samarpana – Hospitality Team Member, Indian Army Martyrs Felicitation",
      "IRA – Operations and Marketing",
      "Kannada Koota – Guitarist",
      "Music Club of PES – Musician",
    ],
  },
];

export default function Education() {
  return (
    <section
      id="education"
      style={{
        background: "#17151d",
        color: "white",
        padding: "110px 7%",
      }}
    >
      <div style={{ maxWidth: "1250px", margin: "auto" }}>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p style={{
            color: "#df91b7",
            letterSpacing: "5px",
            fontSize: "12px",
          }}>
            MY ACADEMIC JOURNEY
          </p>

          <h1 style={{
            fontSize: "clamp(40px, 5vw, 65px)",
            marginTop: "15px",
          }}>
            Education<span style={{ color: "#df91b7" }}>.</span>
          </h1>

          <p style={{
            color: "#aaa1ae",
            marginTop: "15px",
            lineHeight: "1.8",
          }}>
            Every institution, experience and opportunity has
            contributed to the person I am becoming.
          </p>
        </motion.div>

        <div style={{
          marginTop: "55px",
          display: "grid",
          gap: "22px",
        }}>
          {education.map((edu, index) => (
            <motion.div
              key={edu.number}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              style={{
                display: "flex",
                gap: "25px",
                alignItems: "flex-start",
                background: "#241e29",
                border: "1px solid #493342",
                borderRadius: "16px",
                padding: "28px",
              }}
            >
              <span style={{
                color: "#df91b7",
                fontSize: "28px",
                fontWeight: "bold",
              }}>
                {edu.number}
              </span>

              <div style={{ flex: 1 }}>
                <p style={{
                  color: "#df91b7",
                  fontSize: "13px",
                  letterSpacing: "2px",
                }}>
                  {edu.period}
                </p>

                <h2 style={{
                  fontSize: "25px",
                  marginTop: "8px",
                }}>
                  {edu.institution}
                </h2>

                <p style={{
                  color: "#cbb9ca",
                  marginTop: "8px",
                }}>
                  {edu.qualification}
                </p>

                {edu.activities.length > 0 && (
                  <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "9px",
                    marginTop: "20px",
                  }}>
                    {edu.activities.map((activity) => (
                      <span key={activity} style={{
                        background: "#382a38",
                        color: "#e9cddd",
                        border: "1px solid #594154",
                        padding: "8px 13px",
                        borderRadius: "25px",
                        fontSize: "12px",
                      }}>
                        {activity}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{ marginTop: "100px" }}>
          <p style={{
            color: "#df91b7",
            letterSpacing: "4px",
            fontSize: "12px",
          }}>
            BEYOND THE CLASSROOM
          </p>

          <h2 style={{
            fontSize: "clamp(32px, 4vw, 48px)",
            marginTop: "15px",
          }}>
            University Involvement
          </h2>

          <p style={{
            color: "#aaa1ae",
            marginTop: "12px",
            lineHeight: "1.8",
          }}>
            Research, competitions and communities that
            have shaped my university experience.
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "22px",
            marginTop: "35px",
          }}>
            {involvement.map((group, index) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                style={{
                  background: "#241e29",
                  border: "1px solid #493342",
                  borderRadius: "16px",
                  padding: "25px",
                }}
              >
                <div style={{
                  fontSize: "28px",
                  marginBottom: "12px",
                }}>
                  {group.icon}
                </div>

                <h3 style={{
                  color: group.color,
                  fontSize: "20px",
                  marginBottom: "20px",
                }}>
                  {group.title}
                </h3>

                <div style={{
                  display: "grid",
                  gap: "16px",
                }}>
                  {group.items.map((item) => (
                    <div key={item} style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "flex-start",
                    }}>
                      <span style={{ color: "#df91b7" }}>✦</span>
                      <span style={{
                        color: "#c8bdca",
                        fontSize: "14px",
                        lineHeight: "1.7",
                      }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}