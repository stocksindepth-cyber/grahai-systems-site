"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FolderOpen } from "lucide-react";

export default function MyJobs() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    try {
      setJobs(JSON.parse(localStorage.getItem("gs_hire_jobs") || "[]"));
    } catch {}
  }, []);
  if (!jobs.length) return null;
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="flex items-center gap-2 font-display text-sm font-bold text-slate-900"><FolderOpen size={15} className="text-teal-600" /> Your jobs on this device</h2>
      <ul className="mt-3 space-y-2">
        {jobs.slice(0, 8).map((j) => (
          <li key={j.id}>
            <Link href={`/hire/jobs/${j.id}?k=${encodeURIComponent(j.k)}`} className="block truncate text-xs font-semibold text-teal-700 hover:text-teal-800">
              {j.title || "Untitled job"}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
