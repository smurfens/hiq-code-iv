import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "../app/category/[id]/page";
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
vi.mock("@tanstack/react-query", () => {
  const actual = vi.importActual("@tanstack/react-query");
  return {
    ...actual,
    useQuery: vi.fn(() => ({})),
  };
});

const id = "javascript";

test("App Router: Works with Server Components", () => {
  render(<Page params={{ id }} />);
  expect(screen.getByRole("heading", { level: 1, name: id })).toBeDefined();
});
