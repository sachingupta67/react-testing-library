import { render, screen } from "../test-utils";
import MuiMode from "./mui-mode";

describe("MUI Mode Test", () => {
  it("render successfully", () => {
    render(<MuiMode />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("dark mode");
  });
});
