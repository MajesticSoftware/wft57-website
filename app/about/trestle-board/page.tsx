"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function TrestleBoard() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/about#trestle-board");
  }, [router]);
  return null;
}
