import { Button, Text } from "@radix-ui/themes";
import type { PropsWithChildren } from "react";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

type RouteButtonProps = PropsWithChildren & {
  path: string;
};

export const RouteButton = ({ children, path }: RouteButtonProps) => {
  const location = useLocation();

  return (
    <Button
      size={"3"}
      variant={"outline"}
      color={"gray"}
      className={"!shadow-none font-semibold"}
    >
      <Link to={path}>
        <h4
          className={clsx(
            "font-bold",
            location.pathname === path ? "text-cta-hover" : "text-[#8899AA]",
          )}
        >
          {children}
        </h4>
      </Link>
    </Button>
  );
};
