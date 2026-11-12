
import { motion } from "motion/react";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2.5, duration: 0.8 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
      style={{ background: "#17151d" }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 25, scale: 0.85 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          fontSize: "clamp(35px, 6vw, 76px)",
          fontWeight: "900",
          color: "#df91b7",
          textAlign: "center",
          letterSpacing: "-2px",
        }}
      >
        WASSUP GANG ✌️✌️
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        style={{
          color: "white",
          letterSpacing: "5px",
          fontSize: "18px",
          marginTop: "18px",
          fontWeight: "600",
        }}
      >
        THIS IS ANKS.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.7 }}
        style={{
          color: "#c9a9bd",
          fontSize: "11px",
          marginTop: "25px",
          letterSpacing: "4px",
        }}
      >
        WELCOME TO MY CORNER OF THE INTERNET.
      </motion.p>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        style={{
          width: "100px",
          height: "3px",
          background: "#df91b7",
          marginTop: "30px",
          borderRadius: "10px",
        }}
      />
    </motion.div>
  );
}
