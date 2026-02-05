"use client";

import { Button } from "@radix-ui/themes";
import type { PropsWithChildren } from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";

type RouteButtonProps = PropsWithChildren & {
  path: string;
};

export const RouteButton = ({ children, path }: RouteButtonProps) => {
  const pathname = usePathname();

  return (
    <Button
      size={"3"}
      variant={"outline"}
      color={"gray"}
      className={"!shadow-none font-semibold"}
    >
      <Link href={path}>
        <h4
          className={clsx(
            "font-bold",
            pathname === path ? "text-cta-hover" : "text-[#8899AA]",
          )}
        >
          {children}
        </h4>
      </Link>
    </Button>
  );
};
