import { render, screen } from "@testing-library/react";
import P from "@/app/components/core/P";

test("renders paragraph with default text", () => {
    render(<P>Hello World</P>);
    const paragraph = screen.getByText("Hello World");
    expect(paragraph).toBeInTheDocument();
    expect(paragraph.tagName).toBe("P");
});

test("applies large text size", () => {
    render(<P size="lg">Large Text</P>);
    const paragraph = screen.getByText("Large Text");
    expect(paragraph).toHaveClass("text-lg");
});