import Button3 from "../../components/Question/Button/Button3";

export default {
  title: "Question/Button3",
  component: Button3,
};

const Template = (args) => (
  <div style={{ width: "100%" }}>
    <Button3 {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
    text: "Câu hỏi",
};
