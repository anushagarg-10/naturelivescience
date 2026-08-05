import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Speak with the Nature Life Science technical team - product advice, dosing guidance and distribution enquiries.",
  alternates: { canonical: "/contact" },
};

export default function Page() {
  return <Contact />;
}
