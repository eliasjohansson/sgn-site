import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import Collab from "../../../components/SingleCollaboration";

storiesOf("Page Specific|Collab/single", module).add("single", () => (
  <Collab />
));
