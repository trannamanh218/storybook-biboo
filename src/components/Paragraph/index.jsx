import Button2 from "../Button2";
import "./paragraph.scss"

const Paragraph = () => {
  return (
    <div className="paragraph paragraph-one">
      <div className="title">
        Đoạn 01: Lời mở đầu - Cách cuộc sống vận hành và những lời cam kết với
        cuộc đời của chính mình
      </div>
      <div className="option-paragraph">
        <button to="/pdf" className="read-a-book">
          ĐỌC EBOOOK
        </button>
        <Button2 />
      </div>
    </div>
  );
};
export default Paragraph
