import type { Metadata } from "next";
import Quality from "@/components/Quality";
import Philosophy from "@/components/Philosophy";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Quality & Provenance",
  description:
    "Manufactured under ISO 9001:2001 and GMP-certified processes, with technical support from A.V.C. Nutrition, Dehradun.",
  alternates: { canonical: "/quality" },
};

export default function Page() {
  return (
    <>
      <Quality />
      <Philosophy />
      <CTABand />
    </>
  );
}
