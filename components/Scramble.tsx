"use client";

import { useRef, useState } from "react";
import { useScramble } from "use-scramble";

type Props = {
  lines: string[];
  pause: number;
};

export default function Scramble({ lines, pause }: Props) {
  const [index, setIndex] = useState(0);
  const loopRef = useRef<NodeJS.Timeout>();

  const { ref, replay } = useScramble({
    text: lines[index],
    tick: 5,
    scramble: 20,
    ignore: ["^", "`", "*", "`"],
    range: [33, 126],
    onAnimationStart: () => {
      clearInterval(loopRef.current);
    },
    onAnimationEnd: () => {
      clearInterval(loopRef.current);

      loopRef.current = setTimeout(() => {
        setIndex((index) => (index < lines.length - 1 ? index + 1 : 0));
      }, pause);
    },
  });

  return (
    <p className="text-4xl md:text-6xl" ref={ref}>
      &nbsp;
    </p>
  );
}
