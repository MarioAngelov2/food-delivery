import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Menu from "../../components/Menu";

describe("Menu", () => {
  it("should render the correct number of filters", () => {
    render(<Menu />);

    const filterItems = screen.getAllByRole("img");
    expect(filterItems).toHaveLength(11);
  });

  it("should render images with correct src", () => {
    render(<Menu />);

    const images = screen.getAllByRole("img");
    images.forEach((image) => {
      expect(image).toHaveAttribute("src", expect.stringContaining("webp"))
    })
  })

  it("should display checkmark icon on hover", () => {
    render(<Menu />);

    const firstFilter = screen.getAllByRole("img")[0].closest("div");

    const checkmarkIcon = screen.getAllByTestId("checkmark-icon")[0];

    expect(checkmarkIcon).toHaveClass("hidden");

    firstFilter?.dispatchEvent(new MouseEvent("mouseover", { bubbles: true }));

    expect(checkmarkIcon).toBeVisible();
  });
});
