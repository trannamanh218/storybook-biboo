import ItemCart from "../../components/ItemCart";

export default {
  title: "PageCart/itemcart",
  component: ItemCart,
};

const Template = (args) => (
  <div style={{ width: "80%" }}>
    <ItemCart {...args} />
  </div>
);

export const Primary = Template.bind({});
