import { ReactNode } from "react";
import clsx from "clsx";

type ParagraphProps = {
    size?: "sm" | "base" | "lg";
    children: ReactNode;
    className?: string;
};

export default function P(
    {
        size = "base",
        children,
        className,
    }: ParagraphProps) {
    return (
        <p
            className={clsx(
                "text-gray-700 leading-relaxed",
                {
                    sm: "text-sm",
                    base: "text-base",
                    lg: "text-lg",
                }[size],
                className
            )}
        >
            {children}
        </p>
    );
}
