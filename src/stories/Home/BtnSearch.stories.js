import BtnSearch from "../../components/BtnSearch";

export default {
  title: "Home/BtnSearch",
  component: BtnSearch,
};

const Template = (args) => (
  <div style={{ width: "50%" }}>
    <BtnSearch {...args} />
  </div>
);

export const Primary = Template.bind({});
