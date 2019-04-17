import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import MembershipForm from "../../../components/Forms/MembershipForm";

storiesOf("Page Specific|Membership/form", module).add(
  "Membership Application",
  () => <MembershipForm />
);
