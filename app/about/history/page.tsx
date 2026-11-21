import { redirect } from "next/navigation";

export default function RedirectHistory() {
  redirect("/about#history");
}
