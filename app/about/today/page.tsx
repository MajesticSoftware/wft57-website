import { redirect } from "next/navigation";

export default function RedirectToday() {
  redirect("/about#today");
}
