import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import News from "../../../components/NewsComponent";

storiesOf("Page Specific|news", module).add("news", () => <News />);
