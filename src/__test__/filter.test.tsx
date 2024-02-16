import { assert, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Component from "../components/filter";
import { vi } from "vitest";

vi.mock("next/navigation", () => {
  const actual = vi.importActual("next/navigation");
  return {
    ...actual,
    useRouter: vi.fn(() => ({
      push: vi.fn(),
    })),
    useSearchParams: vi.fn(() => ({
      get: vi.fn(),
    })),
    usePathname: vi.fn(),
  };
});

test("Filter buttons - Javascript", () => {
  render(<Component selectedId="javascript" />);
  expect(screen.getByRole("button", { name: "Javascript" })).toBeDefined();
  const buttonElement = screen.getByText("Javascript");

  assert.ok(
    buttonElement.classList.contains("bg-sky-200"),
    'Javascript filter button has class "bg-sky-200"'
  );

  const buttonElementJava = screen.getByRole("button", { name: "Java" });

  assert.ok(
    !buttonElementJava.classList.contains("bg-sky-200"),
    'Javascript filter button hasnt class "bg-sky-200"'
  );
});
