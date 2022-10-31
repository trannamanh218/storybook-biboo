import OptionPdf from "../../components/OptionsPdf";


export default {
  title: "Pdf/OptionPdf",
  component: OptionPdf,
};

const Template = (args) => (
  <div style={{ width: "80%" }}>
    <OptionPdf {...args} />
  </div>
);

export const Primary = Template.bind({});
