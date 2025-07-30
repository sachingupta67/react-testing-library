import { render, screen } from "@testing-library/react";
import CounterTwo from ".";
import { vi } from "vitest";
import user from "@testing-library/user-event";
describe("Counter Two test", () => {
  it("render successfully", () => {
    render(<CounterTwo count={0} />);
    const headingElement = screen.getByText("Counter Two");
    expect(headingElement).toBeInTheDocument();
  });

  it("handlers are called", async () => {
    user.setup();
    const incrementHandler = vi.fn();
    const decrementHandler = vi.fn();
    render(
      <CounterTwo
        count={0}
        handleDecrement={decrementHandler}
        handleIncrement={incrementHandler}
      />
    );

    const incrementButtonElement = screen.getByRole("button", {
      name: "Increment",
    });
    const decrementButtonElement = screen.getByRole("button", {
      name: "Decrement",
    });

    await user.click(incrementButtonElement);
    await user.click(decrementButtonElement);
    expect(incrementHandler).toHaveBeenCalledTimes(1);
    expect(decrementHandler).toHaveBeenCalledTimes(1);
  });
});
