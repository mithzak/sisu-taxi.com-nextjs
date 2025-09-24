import { ReactNode } from "react";
import clsx from "clsx";

type HeadingProps = {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    children: ReactNode;
    className?: string;
};

export default function H(
    {
        as = "h2",
        children,
        className,
    }: HeadingProps) {
    const Tag = as;

    return (
        <Tag
            className={clsx(
                "font-bold text-gray-900",
                {
                    h1: "text-4xl",
                    h2: "text-3xl",
                    h3: "text-2xl",
                    h4: "text-xl",
                    h5: "text-lg",
                    h6: "text-base",
                }[as],
                className
            )}
        >
            {children}
        </Tag>
    );
}