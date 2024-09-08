import { it, expect, describe, vi, afterEach } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import router from "../../router";

const mockNavigate = vi.fn();

vi.mock("react-router-dom", async (importOriginal) => {
  const actual: typeof import("react-router-dom") = await importOriginal();
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

afterEach(() => {
  cleanup();
});

const memoryRouter = createMemoryRouter(router.routes, {
  initialEntries: ["/"],
});

const epectedLinks = [
  { text: "Home", url: "/" },
  { text: "Menu", url: "/menu" },
  { text: "Contact Us", url: "/contact" },
];

describe("Navbar", () => {
  it("should render the correct number of links", async () => {
    render(<RouterProvider router={router} />);

    const links = await screen.findAllByTestId(/desktop-nav-link-/);
    expect(links).toHaveLength(3);
  });

  it("should render all navigation links with correct text and URL", async () => {
    render(<RouterProvider router={router} />);

    const links = await screen.findAllByTestId(/desktop-nav-link-/);

    links.forEach((link, index) => {
      const { text, url } = epectedLinks[index];
      expect(link).toHaveTextContent(text);
      expect(link.closest("a")).toHaveAttribute("href", url);
    });
  });

  it("should apply active link styles", () => {
    render(<RouterProvider router={memoryRouter} />);

    const homeLink = screen.getByText("Home");
    expect(homeLink).toHaveClass("text-[#FF823F]");
  });

  it("should navigate to home page when clicking on the logo", () => {
    render(<RouterProvider router={memoryRouter} />);

    const logo = screen.getByRole("heading", { level: 1, name: /Foodie/i });
    fireEvent.click(logo);

    expect(mockNavigate).toHaveBeenCalledWith("/");
  });

  it("should open and close the mobile menu", async () => {
    render(<RouterProvider router={memoryRouter} />);

    const menuTrigger = screen.getByTestId("mobile-menu");
    fireEvent.click(menuTrigger);

    const mobileLinks = await screen.findAllByTestId(/mobile-nav-link-/);

    mobileLinks.forEach((link, index) => {
      const { text, url } = epectedLinks[index];
      expect(link).toHaveTextContent(text);
      expect(link.closest("a")).toHaveAttribute("href", url);
    });
  });
});
