import { useState } from "react";
import TypeRadioGroup from "./typeRadioGroup";
import { Box } from "@mui/material";

export default {
  title: "Components/TypeRadioGroup",
  component: TypeRadioGroup,
};

const Template = (args) => {
  const [clientType, setClientType] = useState("");
  return (
    <Box sx={{ width: "300px" }}>
      <TypeRadioGroup
        {...args}
        clientType={clientType}
        setClientType={setClientType}
      />
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "Client type",
};
