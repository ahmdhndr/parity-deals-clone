import React from "react";

import Navbar from "./_components/navbar";

export default function MarketingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="selection:bg-[hsl(355,78%,56%,25%)]">
      <Navbar />
      {children}
    </div>
  );
}
