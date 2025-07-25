import { render, screen } from "@testing-library/react";
import { Hello } from "./index";

test("Hello component", () => {
  render(<Hello name="Sachin" />); // Virtual DOM of Hello Component
  const element= screen.getByText(/Hello, sachin!/i)// Screen has Object which has query to Virtual DOM , we used can insensitive regex
  expect(element).toBeInTheDocument(); 
});
