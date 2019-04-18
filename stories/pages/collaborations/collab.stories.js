import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import Collab from "../../../components/Collaborations";

storiesOf("Page Specific|Collab/form", module).add("Collab cards", () => (
  <Collab />
));
