import type { Metadata } from "next";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About",
  description:
    "Nature Life Science — a company by A.V.C. Nutrition. Herbal and nutritional poultry supplements formulated with modern feed science, made to ISO 9001:2015 and GMP standards.",
};

export default function Page() {
  return <About />;
}
