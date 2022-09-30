import Card from "./Card";

export default {
  title: "Card",
  component: Card
};

const Template = (args) => <Card {...args}></Card>;

export const NoShadow = Template.bind({});
NoShadow.args = {
  shadow: "",
  children: "No shadow"
};

export const SmallShadow = Template.bind({});
SmallShadow.args = {
  shadow: "small",
  children: "Small shadow"
};

export const RegularShadow = Template.bind({});
RegularShadow.args = {
  shadow: "regular",
  children: "Regular shadow"
};

export const LargerShadow = Template.bind({});
LargerShadow.args = {
  shadow: "larger",
  children: "Larger shadow"
};
