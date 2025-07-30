import { render,screen } from "@testing-library/react";
import Users from ".";

describe("Users Component Test", () => {
  test("Render successfully", () => {
    render(<Users />);
    const headingElement = screen.getByText("Users");
    expect(headingElement).toBeInTheDocument()
  });

  test("render the list of users",async()=>{
    render(<Users/>);
    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(2)
  })
});
