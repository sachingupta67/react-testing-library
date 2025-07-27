# React Testing Library

# FileName Conventions
- hello.test.jsx , hello.test.js , hello.test.tsx
- hello.spec.jsx , hello.spec.js, hello.spec.tsx
- inside folder __tests__ with .js , or .jsx suffix

[Recommended] - Always put your test code next to the main code to relative imports are shorter


# Aleternative to write test cases

```

test("Hello component", () => {
  render(<Hello name="Sachin" />); // Virtual DOM of Hello Component
  const element= screen.getByText(/Hello, sachin!/i)// Screen has Object which has query to Virtual DOM , we used can insensitive regex
  expect(element).toBeInTheDocument(); 
});


```

```
// Describe with grouping

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


```

```
// Skip & Only


describe("Greet Test:::::::", () => {
  test.only("render successfully", () => {
    // will run this only
    render(<Greet />);
    const element = screen.getByText("Hello");
    expect(element).toBeInTheDocument();
  });

  
  test.skip("render with name", () => {
    // it will skip this
    render(<Greet name="sachin" />);
    const element = screen.getByText("Hello sachin");
    expect(element).toBeInTheDocument();
  });
});

```

- Alternative
  - test ==> it

```
describe("Greet Test:::::::", () => {
  it("render successfully", () => {
    render(<Greet />);
    const element = screen.getByText("Hello");
    expect(element).toBeInTheDocument();
  });

  
  it("render with name", () => {
    render(<Greet name="sachin" />);
    const element = screen.getByText("Hello sachin");
    expect(element).toBeInTheDocument();
  });
});
```

```
describe("Greet Test:::::::", () => {
  xit("render successfully", () => {
    // work as skip
    render(<Greet />);
    const element = screen.getByText("Hello");
    expect(element).toBeInTheDocument();
  });

  
  fit("render with name", () => {
    // work as only
    render(<Greet name="sachin" />);
    const element = screen.getByText("Hello sachin");
    expect(element).toBeInTheDocument();
  });
});


```

# Code coverage
 - a metric that help you to understand how much of your software code is tested
 - statement coverage
   - how many of the statements in the code have been executed
  
 - branches coverage
   - how many of the branches of the control structures (if statements of instance ) has been executed

 - function coverage
   - how many of the function defined hasbeen called and finally

 - Line coverage
   - how many lines of source of code hasbeen tested 


# include & Exclude  & Threshold from collect coveraage from config

```
 test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    css: true,
    coverage: {
      provider: "v8", // or 'c8'
      reporter: ["text", "html"],
      include: ["src/**/*.{ts,tsx,js,jsx}"], // ✅ Include specific files
      exclude: [
        "node_modules/",
        "dist/",
        "**/*.d.ts", // ✅ Type declaration files
        "**/*.type.ts", // ✅ Custom type files
        "**/*.interface.ts", // ✅ Interface definition files
        "**/__tests__/**", // Optional: exclude test folders
        "**/*.test.*", // Optional: exclude test files
        "**/*.spec.*", // Optional: exclude spec files
        "src/main.tsx"
      ],
      thresholds: {
        lines: 80,
        statements: 80,
        branches: 70,
        functions: 75,
      },
    },
  },

```

# What to test 
 - Test component renders
 - Test component renders with props
   - component render right html based on props
 - Test component renders in different states
   ex: in navbar login button is render only when loggedout , not if the user logged in
 - Test component reacts to events
   ex: buttons and forms allow user interactions
 

# What not to test
 - implementation details
 - third party code  
   ex: material ui using , we dont need to test those component which we are consuming
 - code is not importent from user point of view
   ex: a utitity function that we written for date to show in User friendly format , we dont have to test the function, we can directly test the date in the expected format
 -   

# RTL Queries
 In General, 
 - Every test we write generally involves the following steps
  1. Render the component
    - use the render method from RTL
  2. Find an element rendered by the component  
  3. Asset against the element found in step.2 which will pass or fail the test
    - for assertion we use expect passing in a value and combine it with a matcher function from jest or jest-dom

Queries
 - that are methods that Provided By RTL to find the element on the page
 - To find the single element on the page we have
   - getBy..
   - queryBy..
   - findBy..
 - To find multiple elements on the page we have 
   - getAllBy..
   - queryAllBy..
   - findAllBy..

Note .. that suffix is be form a query, it could be 
        one of Role, LabelText, PlaceHolderText, Text, DisplayValue, AltText, Title and finally TestId

# getBy.. Query
  - class of query return the matching node for a query,
  - throw descriptive error if no elements or if more than one match is found
  - Suffix can be ,  one of Role, LabelText, PlaceholderText, Text, DisplayValue , AltText, Title , TestId

  # getByRole  (It should be on Top Priority if not work then move to another)
    - queries for element with the given role
    - Role refers to the ARIA role which provides semantic meaning to content to ensure people using assistive tech are 
      able  to use them
    - by default , many semantic elements in HTML have a role
      ex: button ==> button role
          anchor ==> link role
          h1 to h6 ==> heading role
          checkboxes => checkbox role
          radio => radio role
          ...
    - if working with element which has no default role , or if you want to specify different role , role attribute can be used 
      ex: 
      an anchor element as a button in the navbar , we can add role ="button"
    - How to get the role of element
     - https://www.w3.org/TR/html-aria/#docconformance
  

  Example
  - in Component if we have input , and textarea both have same role ="textbox"
  - then getByRole with fail as we have multiple element with same role
  - we can use name in getByRole
     getByRole("role",{
      name:"level of form element or text content of a button or value of the aria-label attribute"
     })
  

  # getLabelByText
  - will search for the label that matches the given text, then find the element associated with that label
   eg: label for input
  - How to avoid with same label
    - use selector 
    ``` 
    const nameElement2 = screen.getByLabelText("Name", { selector: "input" });

    ```
 # getByPlaceholderText
  - will search for all elements with a placeholder attribute and find one that matches the given text

 # getByText
  - it will search for all element that have the text node with the textContent matching the given text
  - typically ,
    used to find div , p , span elements
  
 # getByDisplayValue
  - it returns the input , textarea, or select element that has the matching display

 # getByAltText
  - it will return the element  that has the given alt text
  - it only supports element which accept alt attribute like eg: img, input, area or custom html elements

# getByTitle
 - return the element which has title attributes

# getByTestId
 - return the element that has the matching data-testId attributes

Note
- when to use which queries
  - priority order of queries
    - Your test should resemble how users interact with your code (component, page etc) as much as possible
    - recomemded order
      1. getByRole 
      2. getByLabelText - forms fields with label tag,and selector
      3. getByPlaceholderText
      4. getByText - outside form text content | non interacted element
      5. getByDisplayValue
      6. getByAltText - it varies with browser and technology to support - not directly access by screen     
                    readers
      7. getByTitle - it varies with browser and technology to support - not directly access by screen     
                    readers
      8. getByTestId
