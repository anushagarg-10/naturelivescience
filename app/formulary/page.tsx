import type { Metadata } from "next";
import Formulary from "@/components/Formulary";

export const metadata: Metadata = {
  title: "The Formulary",
  description:
    "The complete Nature Life Science catalogue — search or filter by need, then open any entry for its full composition, indications, dosage and pack sizes.",
  alternates: { canonical: "/formulary" },
};

export default function Page() {
  return <Formulary />;
}
