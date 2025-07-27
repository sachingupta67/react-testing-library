import { render, screen } from "@testing-library/react";
import Application from "../application";

describe("Application Component", () => {
  it("Renders correctly", () => {
    render(<Application />);

    const pageHeading = screen.getByRole("heading", {
      name: /Job Application Form/i,
    });
    expect(pageHeading).toBeInTheDocument();

    const section1Element = screen.getByRole("heading", { name: /Section 1/i });
    expect(section1Element).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", { name: "Name" }); // label is Name of input element
    expect(nameElement).toBeInTheDocument();

    const nameElement2 = screen.getByLabelText("Name", { selector: "input" });
    expect(nameElement2).toBeInTheDocument();

    const nameElement3 = screen.getByPlaceholderText("full name");
    expect(nameElement3).toBeInTheDocument()

    const nameElement4 = screen.getByDisplayValue("Sachin");
    expect(nameElement4).toBeInTheDocument()

    const paragraphElement = screen.getByText("All fields are mandatory");
    expect(paragraphElement).toBeInTheDocument()

    const imageElement = screen.getByAltText("test-image");
    expect(imageElement).toBeInTheDocument()

    const bioElement = screen.getByRole("textbox", { name: "Bio" });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const termElement2 = screen.getByLabelText(
      "I agree to the terms and conditions"
    );
    expect(termElement2).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();
  });
});
