import { AnimatePresence, motion } from "framer-motion";
import React, { useCallback, useRef, useState } from "react";

interface SubmitButtonProps {
  onClick?: () => void;
  submitText?: {
    originalSubstring: string;
    hiddenSubstring: string;
  };
  successText?: string;
}

const buttonStyles = {
  base: {
    fontFamily: "Inter, sans-serif",
    letterSpacing: "0.01em",
    padding: "15px 0px",
    borderRadius: "1000px",
    border: "none",
    cursor: "pointer",
    fontSize: "20px",
    width: "400px",
    display: "flex",
    justifyContent: "center",
    transition: "all 0.4s ease-out",
  },
  initial: {
    background: "#151515",
    color: "#f5f5f5",
  },
  submitting: {
    background: "#151515",
    color: "#9e9e9e",
  },
  success: {
    background: "#1b9b49",
    color: "#f5f5f5",
  },
} as const;

const springTransition = {
  type: "spring",
  stiffness: 200,
  damping: 15,
  mass: 0.8,
} as const;

const scaleTransition = {
  type: "spring",
  stiffness: 300,
  damping: 20,
} as const;

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  onClick,
  successText = "Done.",
  submitText = {
    originalSubstring: "Submit",
    hiddenSubstring: "ting",
  },
}) => {
  const [step, setStep] = useState<"initial" | "submitting" | "success">(
    "initial"
  );
  const [springLetters, setSpringLetters] = useState("");
  const hiddenLettersRef = useRef<HTMLSpanElement>(null);
  const [hiddenLettersWidth, setHiddenLettersWidth] = useState<number>(0);

  const handleSubmit = useCallback(() => {
    if (step !== "initial") return;

    onClick?.();
    setStep("submitting");
    setHiddenLettersWidth(
      hiddenLettersRef.current?.getBoundingClientRect()?.width || 0
    );

    // Animate letters appearing one by one
    setTimeout(() => {
      const letters = submitText.hiddenSubstring.split("");
      let count = 0;
      const interval = setInterval(() => {
        setSpringLetters(letters.slice(0, count).join(""));
        if (count === letters.length) {
          clearInterval(interval);
        } else {
          count++;
        }
      }, 100);
    }, 200);
  }, [onClick, step]);

  const getButtonStyle = () => {
    switch (step) {
      case "submitting":
        return { ...buttonStyles.base, ...buttonStyles.submitting };
      case "success":
        return { ...buttonStyles.base, ...buttonStyles.success };
      default:
        return { ...buttonStyles.base, ...buttonStyles.initial };
    }
  };

  return (
    <button
      onClick={handleSubmit}
      style={getButtonStyle()}
      disabled={step !== "initial"}
    >
      <AnimatePresence mode="wait">
        {step === "success" ? (
          <motion.div
            key="success"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={scaleTransition}
          >
            {successText}
          </motion.div>
        ) : (
          <motion.div
            key="submitting"
            style={{
              position: "relative",
              width: "fit-content",
              display: "flex",
              flexDirection: "row",
              paddingRight: `${hiddenLettersWidth}px`,
              transition: "all 0.2s ease-out",
            }}
          >
            <span>{submitText.originalSubstring}</span>
            <div style={{ position: "relative" }}>
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  display: "flex",
                }}
              >
                <AnimatePresence>
                  {springLetters.split("").map((letter, index) => (
                    <motion.span
                      key={index}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      onAnimationComplete={() => {
                        if (index === springLetters.length - 1) {
                          setTimeout(() => setStep("success"), 500);
                        }
                      }}
                      transition={{
                        ...springTransition,
                        delay: index * 0.1,
                      }}
                      style={{ display: "inline-block" }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </AnimatePresence>
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <span style={{ opacity: 0, position: "absolute" }} ref={hiddenLettersRef}>
        {submitText.hiddenSubstring}
      </span>
    </button>
  );
};
