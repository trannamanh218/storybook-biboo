import "./button3.scss"
const Button3 = ({text}) => {
  return (
    <button className="button3">
      <span>{text}</span>
    </button>
  );
};
export default Button3
Button3.defaultProps = {
    text: "Câu hỏi"
}