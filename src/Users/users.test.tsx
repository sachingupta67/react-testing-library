import { render, screen } from "@testing-library/react";
import Users from ".";
import { server } from "../mocks/server";
import { http, HttpResponse } from "msw";

describe("Users Component Test", () => {
  test("Render successfully", () => {
    render(<Users />);
    const headingElement = screen.getByText("Users");
    expect(headingElement).toBeInTheDocument();
  });

  test("render the list of users", async () => {
    render(<Users />);
    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(2);
  });

  test("renders error", async () => {
    // Override the default handler to return an error
    server.use(
      http.get("http://localhost:3000/api/users", () => {
        return new HttpResponse(null, { status: 500 });
      })
    );
    render(<Users />);
    const errorElement = await screen.findByText("Something went wrong");
    expect(errorElement).toBeInTheDocument();
  });
});
