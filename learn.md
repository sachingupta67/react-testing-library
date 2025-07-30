# React Testing Library (RTL) — Complete Developer + Interview Guide

This guide is structured for:

* 👨‍💼 Daily Development
* 💼 Interview Preparation (Quick Recall)

---

## 📁 File Naming & Placement

**Accepted Conventions:**

* `Component.test.jsx` / `Component.test.tsx`
* `Component.spec.js` / `Component.spec.ts`
* Inside `__tests__` folder

**Best Practice:**
Keep test files next to the component:

```bash
src/
 ├── components/
     ├── Button.tsx
     └── Button.test.tsx  # Short relative imports
```

---

## ✅ Writing Basic Tests

### Test Syntax Example

```tsx
import { render, screen } from "@testing-library/react";
import Hello from "./Hello";

test("should greet with name", () => {
  render(<Hello name="Sachin" />);
  const greeting = screen.getByText(/hello, sachin!/i); // case-insensitive
  expect(greeting).toBeInTheDocument();
});
```

### Grouping Tests with `describe`

```tsx
describe("Greet Component", () => {
  test("renders default greeting", () => {
    render(<Greet />);
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });

  test("renders with a name", () => {
    render(<Greet name="Sachin" />);
    expect(screen.getByText("Hello Sachin")).toBeInTheDocument();
  });
});
```

### `only`, `skip`, `fit`, `xit`

```tsx
test.only("runs only this test", () => { ... });
test.skip("skips this test", () => { ... });
```

---

## ✅ What to Test (Real Scenarios)

* ✅ Component renders without crashing
* ✅ Props render correctly
* ✅ Conditional logic based on props/state
* ✅ User interactions (clicks, input, form submit)
* ✅ API loading states / error boundaries

---

## ❌ What Not to Test

* ❌ Internal implementation details
* ❌ Third-party library components
* ❌ Non-critical utility formatting logic (like formatDate)

---

## 🔢 Code Coverage

**Coverage Types:**

* **Statements:** Lines of code executed
* **Branches:** if/else, ternary execution
* **Functions:** Was the function called?
* **Lines:** Similar to statements

### Example: Vite Config Coverage

```ts
coverage: {
  provider: "v8",
  reporter: ["text", "html"],
  include: ["src/**/*.{ts,tsx}"],
  exclude: [
    "**/*.test.*",
    "node_modules",
    "**/*.d.ts"
  ],
  thresholds: {
    lines: 80,
    functions: 75,
    branches: 70,
  }
}
```

---

## 🔎 Queries (Finding Elements)

### Preferred Order (as per user behavior)

1. `getByRole`
2. `getByLabelText`
3. `getByPlaceholderText`
4. `getByText`
5. `getByDisplayValue`
6. `getByAltText`
7. `getByTitle`
8. `getByTestId` (fallback only)

### Examples:

```tsx
screen.getByRole("button", { name: /submit/i });
screen.getByLabelText("Email");
screen.getByPlaceholderText("Enter password");
screen.getByText(/welcome/i);
screen.getByDisplayValue("Sachin");
screen.getByTestId("custom-div");
```

### Async & Conditional Rendering

```tsx
// findBy - waits until found
const item = await screen.findByText("Data Loaded");

// queryBy - expect not to find
expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
```

---

## ⌚ Text Match Patterns

```tsx
screen.getByText("Hello World")                      // exact match
screen.getByText("hello", { exact: false })          // substring, ignore case
screen.getByText(/world/i)                           // regex, ignore case
screen.getByText((content) => content.includes("Hi")) // custom matcher
```

---

## 👥 User Interactions

### Setup

```tsx
import user from "@testing-library/user-event";
```

### Examples

```tsx
await user.click(button);
await user.type(input, "Sachin");
await user.clear(input);
await user.tab();
```

### `fireEvent` vs `user-event`

* `user-event`: Simulates real user behavior (recommended)
* `fireEvent`: Fires low-level DOM events manually

---

## 👊 Pointer & Keyboard Interactions

```tsx
await user.hover(element);
await user.unhover(element);
await user.keyboard("{Enter}");
```

---

## ⚖️ React Hook Testing

```tsx
import { renderHook, act } from "@testing-library/react";
import useCounter from "./useCounter";

describe("useCounter Hook", () => {
  it("initial count is 0", () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
  });

  it("increments the count", () => {
    const { result } = renderHook(() => useCounter());
    act(() => result.current.increment());
    expect(result.current.count).toBe(1);
  });
});
```

---

## 🧱 Mocking Functions

```tsx
const mockFn = vi.fn();
render(<Button onClick={mockFn} />);
await user.click(screen.getByRole("button"));
expect(mockFn).toHaveBeenCalledTimes(1);
```

---

## 🌐 Mocking API Calls (MSW)

Use MSW to intercept and mock API calls.

```ts
import { rest } from "msw";

export const handlers = [
  rest.get("/api/user", (req, res, ctx) => {
    return res(ctx.json({ name: "Sachin" }));
  }),
];
```

---

## 📄 Static Analysis Tools

Ensure quality without running tests:

* **TypeScript**: Type safety
* **ESLint**: Linting errors
* **Prettier**: Code formatting
* **Husky + lint-staged**: Pre-commit validation

---

## 🎓 Interview Quick Recap

| Concept        | Example or Tip                                    |
| -------------- | ------------------------------------------------- |
| Query Priority | Use `getByRole`, fallback to `getByText` etc      |
| user-event     | Simulates actual behavior (e.g. `type`, `click`)  |
| findBy/queryBy | For async and disappearing elements               |
| Code Coverage  | Shows test depth, use threshold config            |
| Hook Testing   | `renderHook` + `act()` for internal state logic   |
| Mocking API    | MSW intercepts real requests for isolated testing |
| Skip Testing   | Use `skip` for third-party UI like Material UI    |

---

Would you like this exported as a PDF or turned into flashcards for revision?
