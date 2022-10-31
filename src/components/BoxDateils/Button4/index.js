import "./button4.scss"
const Button4 = ({text}) => {
    return (
        <button className="listen-for-free">{text}</button>
    )
}
export default Button4
Button4.defaultProps = {
    text: "NGHE AUDIO MIỄN PHÍ"
}