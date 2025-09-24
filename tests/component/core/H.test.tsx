import { render, screen } from '@testing-library/react';
import H from "@/app/components/core/H";

test("renders an h1 heading", () => {
    render(<H as="h1">Hello World</H>);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Hello World");
});