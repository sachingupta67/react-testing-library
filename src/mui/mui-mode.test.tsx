import { render, screen } from "@testing-library/react";
import MuiMode from "./mui-mode";
import Provider from "../providers/app-providers";

describe("MUI Mode Test", () => {
  it("render successfully", () => {
    render(<MuiMode />, { wrapper: Provider });
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("dark mode");
  });
});
