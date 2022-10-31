import ReadBook from "../../components/ReadBook";

export default {
    title: "Pdf/ReadBook",
    component: ReadBook,
  };
  
  const Template = (args) => (
    <div style={{ width: "100%" }}>
      <ReadBook {...args} />
    </div>
  );
  
  export const Primary = Template.bind({});