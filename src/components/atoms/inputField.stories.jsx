import { useState } from "react";
import InputField from "./inputField";

export default {
  title: "Components/InputField", // The section in Storybook where this component will appear
  component: InputField,
  argTypes: {
    onChange: { action: "changed" }, // Track the onChange action
  },
};

const Template = (args) => {
  const [value, setValue] = useState(args.value || "");

  const handleChange = (event) => {
    setValue(event.target.value);
    args.onChange && args.onChange(event); // Trigger the action for onChange
  };

  return <InputField {...args} value={value} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  label: "Enter your name",
  placeholder: "John Doe",
  value: "", // Initial value for the input field
};
