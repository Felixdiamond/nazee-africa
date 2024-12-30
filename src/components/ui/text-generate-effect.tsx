"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");
  const isClient = useRef(false);

  useEffect(() => {
    isClient.current = true;
  }, []);

  useEffect(() => {
    if (scope.current && isClient.current) {
      const elements = Array.from(scope.current.querySelectorAll("span")) as HTMLElement[];
      elements.forEach((element, index) => {
        animate(element, {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        }, {
          duration: duration ? duration : 1,
          delay: index * 0.2,
          ease: [0.25, 0.4, 0.25, 1],
        });
      });
    }
  }, [scope, animate, duration, filter]);

  return (
    <motion.div className={cn("font-bold", className)}>
      <div 
        ref={scope}
        className="flex flex-wrap justify-center gap-x-2 gap-y-1"
      >
        {wordsArray.map((word, idx) => {
          const isHighlight = word.toLowerCase() === "changemakers" || 
                            word.toLowerCase() === "empowering" || 
                            word.toLowerCase() === "generation";
          return (
            <motion.span
              key={word + idx}
              className={cn(
                "opacity-0 inline-flex text-center",
                isHighlight 
                  ? "bg-gradient-to-br from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent"
                  : "text-foreground/90"
              )}
              style={{
                filter: filter ? "blur(8px)" : "none",
              }}
            >
              {word}
            </motion.span>
          );
        })}
      </div>
    </motion.div>
  );
};
