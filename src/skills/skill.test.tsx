import { render, screen } from "@testing-library/react";
import { Skills } from "./skills";

describe("Skill Component Test", () => {
  const skills = ["HTML", "CSS", "JS", "JAVA"];
  it("render correctly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  it("render list of skills", () => {
    render(<Skills skills={skills} />);
    const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements).toHaveLength(skills.length);
  });

  it("render login button", () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeInTheDocument();
  });

  it("Start Learning button is not rendered", () => {
    render(<Skills skills={skills} />);
    const startLearningButton = screen.queryByRole("button", {
      name: "Start Learning",
    });
    expect(startLearningButton).not.toBeInTheDocument();
  });

  it("start learning button is eventually displayed", async() => {
    render(<Skills skills={skills} />)
    //  const view=  render(<Skills skills={skills} />);
    //  logRoles(view.container)
    // screen.debug()
    const startLearningButton =await screen.findByRole("button", {
      name: "Start Learning",
    },{
      timeout:1005
    });

    // screen.debug()
    // logRoles(view.container)
    expect(startLearningButton).toBeInTheDocument();
  });
});
