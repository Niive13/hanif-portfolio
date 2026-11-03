// components/ui/Button.tsx
import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "lime";
  external?: boolean;
  className?: string;
};

export function Button({ href, children, variant = "solid", external, className }: Props) {
  const styles = cn(
    "inline-flex items-center gap-2 rounded-xl border-2 border-ink px-6 py-3",
    "font-medium text-sm transition-all duration-200",
    "hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal",
    variant === "solid" && "bg-violet text-white",
    variant === "outline" && "bg-paper text-ink",
    variant === "lime" && "bg-lime text-ink",
    className
  );
  if (external) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={styles}>{children}</a>;
  }
  return <Link href={href} className={styles}>{children}</Link>;
}