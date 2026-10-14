"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

export default function CurrentYear() {
  const year = useSyncExternalStore(
    subscribe,
    () => new Date().getFullYear(), // in the browser
    () => 2026, // on the server
  );
  return <>{year}</>;
}