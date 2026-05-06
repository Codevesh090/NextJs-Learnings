import type { ReactNode } from "react";
import Link from "next/link";
import {Metadata} from 'next';


export const metadata:Metadata = {
  title: "Dashboard Area",  // overrides Layer 1 title
  keywords: ["dashboard"]   // overrides Layer 1 keywords
  // description and authors → inherited from Layer 1
}



export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      
      {/* Sidebar */}
      <aside
        style={{
          width: "220px",
          background: "#111",
          color: "#fff",
          padding: "20px",
        }}
      >
        <h2>Dashboard</h2>
        <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Link href="/dashboard">Home</Link>
          <Link href="/dashboard/analytics">Analytics</Link>
          <Link href="/dashboard/settings">Settings</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main
        style={{
          flex: 1,
          padding: "20px",
          background: "#f5f5f5",
        }}
      >
        {children}
      </main>
    </div>
  );
}