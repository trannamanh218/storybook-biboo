import Target from "../../components/Target";

export default {
    title: "Home/target",
    component: Target,
  };
  
  const Template = (args) => (
    <div style={{ width: "24%" }}>
      <Target {...args} />
    </div>
  );
  
  export const Primary = Template.bind({});