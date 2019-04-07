import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { configure, addDecorator } from "@storybook/react";

import Button from "../Components/Button.js";

addDecorator(storyFn => (
  <div style={{ height: "100vh", backgroundColor: "#e5e5e5" }}>{storyFn()}</div>
));
storiesOf("Button", module).add("CTA", () => (
  <div>
    <Button onClick={action("clicked")} />
    <Button primary onClick={action("clicked")} />
    <Button outlined onClick={action("clicked")} />
    <Button primary small onClick={action("clicked")} />
  </div>
));
