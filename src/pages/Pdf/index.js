
import { Link } from "react-router-dom";
import OptionPdf from "../../components/OptionsPdf";
import ReadBook from "../../components/ReadBook";
import "./pdf.scss"

const Pdf = () => {
  return (
    <div className="pdf">
      <div className="row">
        <div className="col-12">
          <div className="navigation-bar-pdf">
            <div className="right">
              <Link to="/dateils" className="come-back">
                <img src="img/Back Arrow.png" alt="" />
              </Link>
              <div className="title">
                The Swallow A Novel Can they do that tomorrow night?
              </div>
            </div>
            <div className="left">
              <div className="icon-left">
                <img src="img/Playhead2.png" alt="" />
              </div>
              <Link to="/player" className="text-left">Nghe-Audio</Link>
            </div>
          </div>
        </div>
        <div className="col-12">
         <ReadBook/>
        </div>
        <div className="col-12">
          <OptionPdf/>
        </div>
      </div>
    </div>
  );
};
export default Pdf;
