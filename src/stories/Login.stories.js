import Login from "../pages/Login";

export default {
    title: "Login/Login",
    component: Login,
  };
  
  const Template = (args) => (
    <div style={{ width: "100%" }}>
      <Login {...args} />
    </div>
  );
  
  export const Primary = Template.bind({});