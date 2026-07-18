"use client";

import { usePathname } from "next/navigation";

// Re-mounts children on route change so the fade/rise transition replays.
export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div key={pathname} className="page-in">
      {children}
    </div>
  );
}
