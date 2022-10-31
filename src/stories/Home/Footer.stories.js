import Footer from "../../components/Footer";

export default {
    title: "Home/Footer",
    component: Footer,
  };
  
  const Template = (args) => (
    <div style={{ background: "#4a4de3" }}>
      <Footer {...args} />
    </div>
  );
  
  export const Primary = Template.bind({});
  