import React from "react";
import { render } from "enzyme";
import App from "./App";

import { MockedProvider } from "react-apollo/test-utils";

it("renders without crashing", () => {
  render(
    <MockedProvider>
      <App />
    </MockedProvider>
  );
});
