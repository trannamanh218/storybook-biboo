import Button4 from "../../components/BoxDateils/Button4";


export default {
  title: "Dateils/button4",
  component: Button4,
};

const Template = (args) => (
  <div style={{ width: "100%" }}>
    <Button4 {...args} />
  </div>
);
export const Primary = Template.bind({});
Primary.args = {
  text: "NGHE AUDIO MIỄN PHÍ",
};