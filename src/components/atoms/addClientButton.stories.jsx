import AddClientButton from "./addClientButton";

export default {
  title: "Components/AddClientButton",
  component: AddClientButton,
  argTypes: {
    toggleModal: { action: "clicked" },
  },
};

const Template = (args) => {
  return <AddClientButton {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  toggleModal: () => alert("Modal toggled!"),
};
