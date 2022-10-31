import Button2 from "../../components/Button2";

export default {
  title: "Dateils/button2",
  component: Button2,
};

const Template = (args) => (
  <div style={{ width: "65%" }}>
    <Button2 {...args} />
  </div>
);

export const Primary = Template.bind({});