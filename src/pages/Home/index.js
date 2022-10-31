import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./home.scss";
import { Link } from "react-router-dom";
import BtnSearch from "../../components/BtnSearch";
import BrbRecentlyWatched from "../../components/BrbRecentlyWatched";
import CaroseoBrbItems from "../../components/CaroseoBrbItems";
import BoxProduct from "../../components/BoxProduct";
import "../../css/index.scss"
const Home = () => {
  return (
    <div className="brb-items-left">
      <Tabs
        defaultActiveKey="home"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="Home">
          <div className="tab-home">
            <BtnSearch />
            <BrbRecentlyWatched />
            <BoxProduct/>
            <BoxProduct/>
            <CaroseoBrbItems/>
            <div className="list-a-lot-brb-items-right">
              <div className="title-listen-a-lot">
                <p>Nghe Nhiều Nhất</p>
              </div>
              <div className="books-listen-a-lot dp-flex">
                <div className="right-books-listen-a-lott">
                  <Link to="#">
                    <img src="img/Rectangle 613.png" alt="" />
                  </Link>
                  <div className="numerical-order-book">
                    <img src="img/Badge Tags.png" alt="" />
                  </div>
                </div>
                <div className="left-books-listen-a-lott">
                  <div className="book-topic">
                    <Link to="#">
                      <p>Kinh tế và tài chính</p>
                    </Link>
                  </div>
                  <div className="title-book-topic">
                    <Link to="#">
                      <p>Đàn ông sao hỏa đàn bà sao</p>
                    </Link>
                  </div>
                  <div className="author-book">
                    <p>Amada Natsuki</p>
                  </div>
                  <div className="evaluate-book dp-flex">
                    <img src="img/alert-circle-fill.png" alt="" />
                    <img src="img/alert-circle-fill.png" alt="" />
                    <img src="img/alert-circle-fill.png" alt="" />
                    <img src="img/alert-circle-fill.png" alt="" />
                    <img src="img/alert-circle-fill.png" alt="" />
                    <p>(122)</p>
                  </div>
                  <button className="button-see-more">
                    <span>Xem sách</span>
                  </button>
                </div>
              </div>
              <div className="books-listen-a-lot dp-flex">
                <div className="right-books-listen-a-lott">
                  <Link to="#">
                    <img src="img/Rectangle 614.png" alt="" />
                  </Link>
                  <div className="numerical-order-book">
                    <img src="img/Badge Tags.png" alt="" />
                  </div>
                </div>
                <div className="left-books-listen-a-lott">
                  <div className="book-topic">
                    <Link to="#">
                      <p>Kinh tế và tài chính</p>
                    </Link>
                  </div>
                  <div className="title-book-topic">
                    <Link to="#">
                      <p>The Way of the Nameless</p>
                    </Link>
                  </div>
                  <div className="author-book">
                    <p>Amada Natsuki</p>
                  </div>
                  <div className="evaluate-book dp-flex">
                    <img src="img/alert-circle-fill.png" alt="" />
                    <img src="img/alert-circle-fill.png" alt="" />
                    <img src="img/alert-circle-fill.png" alt="" />
                    <img src="img/alert-circle-fill.png" alt="" />
                    <img src="img/alert-circle-fill.png" alt="" />
                    <p>(122)</p>
                  </div>
                  <button className="button-see-more">
                    <span>Xem sách</span>
                  </button>
                </div>
              </div>
              <div className="books-listen-a-lot dp-flex">
                <div className="right-books-listen-a-lott">
                  <Link to="#">
                    <img src="img/Rectangle 615.png" alt="" />
                  </Link>
                  <div className="numerical-order-book">
                    <img src="img/Badge Tags.png" alt="" />
                  </div>
                </div>
                <div className="left-books-listen-a-lott">
                  <div className="book-topic">
                    <Link to="#">
                      <p>Kinh tế và tài chính</p>
                    </Link>
                  </div>
                  <div className="title-book-topic">
                    <Link to="#">
                      <p>Clap when you landing</p>
                    </Link>
                  </div>
                  <div className="author-book">
                    <p>Amada Natsuki</p>
                  </div>
                  <div className="evaluate-book dp-flex">
                    <img src="img/alert-circle-fill.png" alt="" />
                    <img src="img/alert-circle-fill.png" alt="" />
                    <img src="img/alert-circle-fill.png" alt="" />
                    <img src="img/alert-circle-fill.png" alt="" />
                    <img src="img/alert-circle-fill.png" alt="" />
                    <p>(122)</p>
                  </div>
                  <button className="button-see-more">
                    <span>Xem sách</span>
                  </button>
                </div>
              </div>
            </div>
            <BoxProduct/>
          </div>
        </Tab>
        <Tab eventKey="library" title="Thư viện">
          <h1>Thư viện</h1>
        </Tab>
        <Tab eventKey="gift" title="Quà tặng">
          <h1>quà tặng</h1>
        </Tab>
      </Tabs>
    </div>
  );
};
export default Home;
