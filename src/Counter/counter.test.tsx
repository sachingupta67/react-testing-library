import { render, screen } from "@testing-library/react";
import Counter from "./counter";
import user from "@testing-library/user-event";

describe("Counter Component Test", () => {
  it("Render Component successfully", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();
    const incrementButtonElement = screen.getByRole("button", {
      name: "Increment",
    });
    expect(incrementButtonElement).toBeInTheDocument();
  });

  it("render count of 0", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
  });

  it("render count of 1 after click the increment  button", async () => {
    user.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    await user.click(incrementButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  });

  it("render count of 2 after the increment button twice",async()=>{
    user.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    await user.dblClick(incrementButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("2")

  })
});
