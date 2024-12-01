import RiskSwitch from "./switch";

export default {
  title: "Components/RiskSwitch",
  component: RiskSwitch,
  argTypes: {
    label: { control: "text" },
  },
};

const Template = (args) => <RiskSwitch {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "High Risk",
};
