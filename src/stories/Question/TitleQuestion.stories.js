import TitleQuestion from "../../components/Question/TitleQuestion";


export default {
  title: "Question/TitleQuestion",
  component: TitleQuestion,
};

const Template = (args) => (
  <div style={{ width: "100%" }}>
    <TitleQuestion {...args} />
  </div>
);

export const Primary = Template.bind({});
