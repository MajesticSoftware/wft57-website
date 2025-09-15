"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PrinceHallHistory() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/about#prince-hall");
  }, [router]);
  return null;
}
