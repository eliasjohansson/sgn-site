import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import Footer from "../components/Footer";

storiesOf("Shared | Footer", module)
  .add("default", () => <Footer />)
  .add("mobile", () => <Footer />, {
    viewport: { defaultViewport: "iphonex" }
  });
