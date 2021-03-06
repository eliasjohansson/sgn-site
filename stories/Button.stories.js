import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { configure, addDecorator } from "@storybook/react";

import Button from "../components/Button.js";

storiesOf("Shared | Button", module)
  .addDecorator(storyFn => (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#D2E7F8"
      }}
    >
      {storyFn()}
    </div>
  ))
  .add("CTA", () => (
    <div
      style={{
        display: "grid",
        gridGap: "1rem"
      }}
    >
      <Button onClick={action("clicked")} />
      <Button primary onClick={action("clicked")} />
      <Button outlined onClick={action("clicked")} />
      <Button primary small onClick={action("clicked")} />
    </div>
  ));
