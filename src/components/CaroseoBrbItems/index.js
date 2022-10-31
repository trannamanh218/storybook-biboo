import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./CaroseoBrbItems.scss"
const CaroseoBrbItems = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 1.4,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="caroseo-brb-items">
      <Slider {...settings}>
        <div>
          <div to="#">
            <img
              src="https://salt.tikicdn.com/ts/lp/10/ca/b1/ec36af1edef3b456d7d4b25296850a05.png"
              alt=""
            />
          </div>
        </div>
        <div>
          <div to="#">
            <img
              src="https://photo2.tinhte.vn/data/attachment-files/2021/02/5368382_lichsansalemoituan.jpg"
              alt=""
            />
          </div>
        </div>
        <div>
          <div to="#">
            <img
              src="https://salt.tikicdn.com/ts/lp/10/ca/b1/ec36af1edef3b456d7d4b25296850a05.png"
              alt=""
            />
          </div>
        </div>
        <div>
          <div to="#">
            <img
              src="https://photo2.tinhte.vn/data/attachment-files/2021/02/5368382_lichsansalemoituan.jpg"
              alt=""
            />
          </div>
        </div>
        <div>
          <div to="#">
            <img
              src="https://salt.tikicdn.com/ts/lp/10/ca/b1/ec36af1edef3b456d7d4b25296850a05.png"
              alt=""
            />
          </div>
        </div>
        <div>
          <div to="#">
            <img
              src="https://photo2.tinhte.vn/data/attachment-files/2021/02/5368382_lichsansalemoituan.jpg"
              alt=""
            />
          </div>
        </div>
        <div>
          <div to="#">
            <img
              src="https://salt.tikicdn.com/ts/lp/10/ca/b1/ec36af1edef3b456d7d4b25296850a05.png"
              alt=""
            />
          </div>
        </div>
      </Slider>
    </div>
  );
};
export default CaroseoBrbItems;
