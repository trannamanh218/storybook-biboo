import BtnFooter from "../../components/Question/BtnFooter";

export default {
  title: "Question/BtnFooter",
  component: BtnFooter,
};

const Template = (args) => (
  <div style={{ width: "100%" }}>
    <BtnFooter {...args} />
  </div>
);

export const Primary = Template.bind({});
