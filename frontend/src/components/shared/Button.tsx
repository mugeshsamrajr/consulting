import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
href: string;
children: ReactNode;
className?: string;
}

export default function Button({
href,
children,
className = "",
}: ButtonProps) {
return (
<Link
href={href}
className={`inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 ${className}`}
>
{children} </Link>
);
}
