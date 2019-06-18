import React from "react";
import { shallow } from "enzyme";

import Loading from "./index";

describe("Loading Component", () => {
  it("should render loading text and a pikachu image", () => {
    const component = shallow(<Loading />);

    expect(component).toMatchSnapshot();
  });
});
