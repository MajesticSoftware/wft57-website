"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AboutToday() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/about#today");
  }, [router]);
  return null;
}
