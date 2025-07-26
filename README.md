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