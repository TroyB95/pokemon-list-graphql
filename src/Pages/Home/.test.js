import React from "react";
import { render } from "enzyme";
import { MockedProvider } from "react-apollo/test-utils";

import Home from "./index";

describe("Home Page", () => {
  it("should render without crashing", () => {
    render(
      <MockedProvider>
        <Home />
      </MockedProvider>
    );
  });
});
