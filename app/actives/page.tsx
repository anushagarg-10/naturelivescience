import type { Metadata } from "next";
import Actives from "@/components/Actives";
import Marquee from "@/components/Marquee";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = {
  title: "The Actives",
  description:
    "The phyto-actives at the heart of the Nature Life Science range — tulsi, turmeric, amla, ashwagandha, neem and garlic, each quantified in every batch.",
};

export default function Page() {
  return (
    <>
      <Actives />
      <Marquee />
      <CTABand />
    </>
  );
}
