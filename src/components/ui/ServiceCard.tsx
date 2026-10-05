import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";
import type { Service } from "@/lib/types";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/${service.category}/${service.slug}`}
      className="cursor-hover group relative flex aspect-[4/3] flex-col justify-end overflow-hidden rounded-2xl text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <Image
        src={`/images/services/${service.slug}.jpg`}
        alt=""
        fill
        sizes="(min-width: 1024px) 33vw, 50vw"
        className="object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/5 transition-all duration-300 group-hover:from-black/75" />
      <div className="relative z-10 p-3.5 sm:p-5 lg:p-6">
        <div className="mb-1.5 flex items-center justify-between gap-2 sm:mb-2 sm:gap-3">
          <h3 className="text-sm font-semibold leading-tight sm:text-base lg:text-lg transition-transform duration-300 group-hover:translate-x-1">{service.title}</h3>
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/15 transition-all duration-300 group-hover:bg-crimson group-hover:scale-110 sm:h-7 sm:w-7 lg:h-8 lg:w-8">
            <Plus className="h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:rotate-90" />
          </span>
        </div>
        <p className="hidden text-xs font-normal text-white/80 sm:block sm:text-sm transition-opacity duration-300 group-hover:text-white/95">{service.cardDescription}</p>
      </div>
    </Link>
  );
}
