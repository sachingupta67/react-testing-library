import { render, screen } from "@testing-library/react";
import App from "../App";

describe("Render App Successfully", () => {
  it("Get text in p tag", () => {
    render(<App />);
    const textElement = screen.getByText(
      /Click on the Vite and React logos to learn more/i
    );
    expect(textElement).toBeInTheDocument();
  });
});
