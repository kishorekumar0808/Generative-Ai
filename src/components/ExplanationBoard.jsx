import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ExplanationBoard({ question }) {
  const renderExplanation = () => {
    const q = question.toLowerCase();

    if (q.includes("triangle")) {
      return (
        <motion.svg
          key="triangle"
          width="150"
          height="150"
          className="mt-4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 4, ease: "easeInOut" }}
        >
          <motion.polygon
            points="75,10 10,140 140,140"
            stroke="black"
            strokeWidth="2"
            fill="none"
          />
        </motion.svg>
      );
    }

    if (q.includes("12 x 13") || q.includes("12 * 13")) {
      return (
        <AnimatedSteps
          key={question}
          steps={[
            "Step 1: 12 x 13",
            "Step 2: Break 13 → 10 + 3",
            "Step 3: (12 x 10) + (12 x 3) = 120 + 36",
            "Step 4: Final Answer = 156",
          ]}
        />
      );
    }

    if (q.includes("photosynthesis")) {
      return (
        <AnimatedSteps
          key={question}
          steps={[
            "Photosynthesis is how plants make food.",
            "Step 1: Plants take sunlight ☀️",
            "Step 2: Absorb water through roots 💧",
            "Step 3: Take in CO₂ from air 🌫",
            "Step 4: Produce oxygen + glucose 🍃",
          ]}
        />
      );
    }

    if (q.includes("area of circle")) {
      return (
        <AnimatedSteps
          key={question}
          steps={[
            "Formula: π × r²",
            "Step 1: Plug in r = 7 → π × 7²",
            "Step 2: π × 49 = 153.94 (approx)",
          ]}
        />
      );
    }

    return <p className="text-gray-600 mt-4">No explanation available.</p>;
  };

  return (
    <div>
      {question && (
        <div className="border-t pt-4 mt-4">
          <h2 className="text-xl font-bold mb-2">Explanation</h2>
          <AnimatePresence>{renderExplanation()}</AnimatePresence>
        </div>
      )}
    </div>
  );
}

function AnimatedSteps({ steps }) {
  return (
    <div className="mt-4 space-y-2">
      {steps.map((line, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: index * 1.2,
            duration: 1.0,
            ease: "easeOut",
          }}
          className="text-lg text-gray-800 font-medium"
        >
          {line}
        </motion.div>
      ))}
    </div>
  );
}
