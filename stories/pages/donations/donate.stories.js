import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import Donate from "../../../components/Donate";

storiesOf("Page Specific|Donation", module).add("Donations", () => <Donate />);
