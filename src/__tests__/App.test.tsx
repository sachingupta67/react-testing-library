import { render, screen } from "@testing-library/react";
import App from "../App";

describe("Render App Successfully", () => {
  it("Get text in p tag", () => {
    render(<App />);
    const textElement = screen.getByText(
      /Test App/i
    );
    expect(textElement).toBeInTheDocument();
  });
});
