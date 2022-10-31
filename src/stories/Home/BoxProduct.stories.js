import BoxProduct from "../../components/BoxProduct";


export default {
    title: "Home/BoxProduct",
    component: BoxProduct,
  };
  
  const Template = (args) => (
    <div style={{ width: "60%" }}>
      <BoxProduct {...args} />
    </div>
  );
  
  export const Primary = Template.bind({});
  