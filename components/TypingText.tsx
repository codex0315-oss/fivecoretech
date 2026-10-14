"use client";

import { useEffect, useState } from "react";

export default function TypingText({
  phrases,
  typingSpeed = 85,
  deletingSpeed = 45,
  pause = 1800,
}: {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pause?: number;
}) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(phrases[0]);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const full = phrases[index];
    let timer: ReturnType<typeof setTimeout>;

    if (!deleting && text === full) {
      // finished typing: wait, then start deleting
      timer = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      // finished deleting: move to the next phrase
      timer = setTimeout(() => {
        setDeleting(false);
        setIndex((i) => (i + 1) % phrases.length);
      }, 350);
    } else {
      timer = setTimeout(
        () =>
          setText(
            deleting
              ? full.slice(0, text.length - 1)
              : full.slice(0, text.length + 1),
          ),
        deleting ? deletingSpeed : typingSpeed,
      );
    }

    return () => clearTimeout(timer);
  }, [text, deleting, index, phrases, typingSpeed, deletingSpeed, pause]);

  return (
    <span className="text-highlight">
      <span className="sr-only">{phrases[0]}</span>
      <span aria-hidden="true">{text}</span>
      <span
        aria-hidden="true"
        className="typing-cursor ml-1 inline-block h-[0.85em] w-[3px] translate-y-[0.08em] bg-current"
      />
    </span>
  );
}