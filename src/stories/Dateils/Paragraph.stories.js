import Paragraph from "../../components/Paragraph";

export default {
  title: "Dateils/paragraph",
  component: Paragraph,
};

const Template = (args) => (
  <div style={{ width: "100%" }}>
    <Paragraph {...args} />
  </div>
);

export const Primary = Template.bind({});
