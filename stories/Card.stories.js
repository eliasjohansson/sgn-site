import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { configure, addDecorator } from "@storybook/react";

import Card from "../components/Card.js";
addDecorator(storyFn => (
  <div style={{ height: "100vh", backgroundColor: "#e5e5e5" }}>{storyFn()}</div>
));
storiesOf("Card", module)
  .add("with cta", () => <Card withCta onClick={action("clicked")} />)
  .add("with link", () => <Card withLink onClick={action("clicked")} />);
