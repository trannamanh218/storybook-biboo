import Menu from "../../components/Menu";

export default {
    title: "Home/Menu",
    component: Menu,
  };
  
  const Template = (args) => (
    <div style={{ width: "16%", background: "#4a4de3"}}>
      <Menu {...args} />
    </div>
  );
  
  export const Primary = Template.bind({});
  