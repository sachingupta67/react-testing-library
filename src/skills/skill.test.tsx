import { render, screen } from "@testing-library/react";
import { Skills } from "./skills";

describe("Skill Component Test", () => {
  const skills = ["HTML", "CSS", "JS","JAVA"];
  it("render correctly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  it("render list of skills", () => {
    render(<Skills skills={skills} />);
    const listItemElements = screen.getAllByRole('listitem');
    expect(listItemElements).toHaveLength(skills.length)
  });
});
