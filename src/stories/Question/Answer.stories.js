import Answer from "../../components/Question/Answer";

export default {
  title: "Question/Answer",
  component: Answer,
};

const Template = (args) => (
  <div style={{ width: "100%" }}>
    <Answer {...args} />
  </div>
);

export const Primary = Template.bind({});
