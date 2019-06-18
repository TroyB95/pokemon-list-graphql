import React from "react";
import { shallow } from "enzyme";

import CardComponent from "./index";

describe("CardComponent", () => {
  it("should render an image, name and number", () => {
    const component = shallow(<CardComponent cardImg="" cardName="Test Name" cardNumber="001" />);

    expect(component).toMatchSnapshot();
  });
});
