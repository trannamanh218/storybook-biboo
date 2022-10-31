
import { Dropdown } from "react-bootstrap-storybook";
import "./footerradio.scss";

const FooterRadio = () => {
  return (
    <div className="footer">
      <div className="left-footer">
        <div className="ebook">
          <div className="icon-ebook">
            <img src="img/Read Book2.png" alt="" />
          </div>
          <div className="text-ebook">Ebook</div>
        </div>
        <div className="speed">
          <div className="icon-speed">
            <Dropdown className="dropup-center dropup">
              <Dropdown.Toggle
                className="dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span>1x</span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <li>
                  <p className="title">Tốc độ nghe</p>
                </li>
                <li>
                  <button className="dropdown-item" href="#">
                    0.75
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" href="#">
                    1x
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" href="#">
                    1.25x
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" href="#">
                    1.5x
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" href="#">
                    1.75x
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" href="#">
                    2x
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" href="#">
                    3x
                  </button>
                </li>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="text-speed">Tốc độ</div>
        </div>
      </div>
      <div className="center-footer">
        <div className="replay-left">
          <img src="img/ic_replay_30.png" alt="" />
        </div>
        <div className="skip-left">
          <img src="img/ic_skip_previous.png" alt="" />
        </div>
        <div className="center-play">
          <img src="img/Play.png" alt="" />
        </div>
        <div className="skip-right">
          <img src="img/ic_skip_next.png" alt="" />
        </div>
        <div className="replay-right">
          <img src="img/ic_forward_30.png" alt="" />
        </div>
      </div>
      <div className="right-footer">
        <div className="timer">
          <div className="icon-timer">
            <Dropdown className="dropup-center dropup">
              <Dropdown.Toggle
                className="dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src="img/timer-flash-line.png" alt="" />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <li>
                  <p className="title">Hẹn giờ tắt</p>
                </li>
                <li>
                  <button className="dropdown-item" href="#">
                    Hết phần
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" href="#">
                    Hết chương
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" href="#">
                    120 Phút
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" href="#">
                    60 Phút
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" href="#">
                    45 Phút
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" href="#">
                    30 Phút
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" href="#">
                    15 Phút
                  </button>
                </li>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="text-timer">Hẹn giờ</div>
        </div>
        <div className="table-of-contents">
          <div className="icon-table-of-contents">
            <img src="img/Playlist.png" alt="" />
          </div>
          <div className="text-table-of-contents">Mục lục</div>
        </div>
      </div>
    </div>
  );
};
export default FooterRadio;
