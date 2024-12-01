import { useState } from "react";
import ClientTabs from "./clientTabs";

export default {
  title: "Components/ClientTabs",
  component: ClientTabs,
  argTypes: {
    tabValue: { control: "number" },
    handleTabChange: { action: "changed" },
  },
};

const Template = (args) => {
  const [tabValue, setTabValue] = useState(args.tabValue || 0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    args.handleTabChange && args.handleTabChange(event, newValue);
  };

  return (
    <ClientTabs
      {...args}
      tabValue={tabValue}
      handleTabChange={handleTabChange}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  tabValue: 0, // Default value of the tab
  handleTabChange: (event, newValue) =>
    console.log(`Tab changed to ${newValue}`),
};
