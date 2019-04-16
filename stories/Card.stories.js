import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { configure, addDecorator } from "@storybook/react";

import Card from "../components/Card.js";
import Button from "../components/Button.js";
// addDecorator(storyFn => (
//   <div style={{ height: "100vh", backgroundColor: "#e5e5e5" }}>{storyFn()}</div>
// ));
storiesOf("Shared | Card", module)
  .add("with cta", () => (
    <Card withCta>
      <Button primary onClick={action("clicked")} />
    </Card>
  ))
  .add("with link", () => <Card withLink onClick={action("clicked")} />);
