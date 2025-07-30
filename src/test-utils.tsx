import React from "react";
import { render, type RenderOptions } from "@testing-library/react";
import Provider from "./providers/app-providers";

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: Provider, ...options });

// re-export everything
// eslint-disable-next-line react-refresh/only-export-components
export * from "@testing-library/react";

// override render method
export { customRender as render };
