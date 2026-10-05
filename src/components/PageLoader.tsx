"use client";

import { useEffect, useState } from "react";

export function PageLoader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`page-loader ${hidden ? "is-hidden" : ""}`}
      aria-hidden="true"
    />
  );
}
