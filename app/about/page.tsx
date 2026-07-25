import type { Metadata } from "next";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About",
  description:
    "Nature Life Science — a company by A.V.C. Nutrition. Herbal and nutritional poultry supplements formulated with modern feed science, made to ISO 9001:2001 and GMP standards.",
  alternates: { canonical: "/about" },
};

export default function Page() {
  return <About />;
}
