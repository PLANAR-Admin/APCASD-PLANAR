import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Breadcrumb({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1.5 text-xs text-muted">
      {items.map((item, i) => (
        <span key={item.label} className="flex items-center gap-1.5">
          {i > 0 && <ChevronRight className="h-3 w-3" />}
          {item.href ? (
            <Link href={item.href} className="cursor-hover hover:text-crimson">
              {item.label}
            </Link>
          ) : (
            <span className="font-medium text-foreground">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
