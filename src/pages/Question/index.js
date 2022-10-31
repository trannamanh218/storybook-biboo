import { Link } from "react-router-dom";
import Answer from "../../components/Question/Answer";
import BtnFooter from "../../components/Question/BtnFooter";
import TitleQuestion from "../../components/Question/TitleQuestion";
import  "./question.scss"
const Question = () => {
  return (
    <div className="question-page">
      <div className="container">
        <Link to="/dateils" className="icon-com-back">
          <img src="img/Back Arrow.png" alt="" />
        </Link>
        <div className="main-question">
          <div className="list-question">
            <ul>
              <li>
                <button>
                  <span>Câu 01</span>
                </button>
              </li>
              <li>
                <button>
                  <span>Câu 02</span>
                </button>
              </li>
              <li>
                <button>
                  <span>Câu 03</span>
                </button>
              </li>
              <li>
                <button>
                  <span>Câu 04</span>
                </button>
              </li>
              <li>
                <button>
                  <span>Câu 05</span>
                </button>
              </li>
              <li>
                <button>
                  <span>Câu 06</span>
                </button>
              </li>
            </ul>
          </div>
         <TitleQuestion/>
          <Answer/>
        </div>
        <BtnFooter/>
      </div>
    </div>
  )
};
export default Question;
