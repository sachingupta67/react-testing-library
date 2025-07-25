import { render, screen } from "@testing-library/react";
import Greet from "./index";

describe("Greet Test:::::::", () => {
  test("render successfully", () => {
    render(<Greet />);
    const element = screen.getByText("Hello");
    expect(element).toBeInTheDocument();
  });

  
  test("render with name", () => {
    render(<Greet name="sachin" />);
    const element = screen.getByText("Hello sachin");
    expect(element).toBeInTheDocument();
  });
});
