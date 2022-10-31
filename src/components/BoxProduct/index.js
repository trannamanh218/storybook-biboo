import "./boxProduct.scss";
const BoxProduct = () => {
  const listProduct = [
    {
      img: "img/Rectangle 510.png",
      title: "Can they do that tomorrow?",
      author: "Amada Natsukif",
    },
    {
      img: "img/Rectangle 505.png",
      title: "Đàn ông sao hỏa đàn bà sao",
      author: "Amada Natsukif",
    },
    {
      img: "img/Rectangle 511.png",
      title: "Follow me to ground",
      author: "Amada Natsukif",
    },
    {
      img: "img/Rectangle 612.png",
      title: "Can they do that tomorrow?",
      author: "Amada Natsukif",
    },
  ];
  return (
    <>
      <div className="box-product">
        <div className="title-box-product">
          <p>Gợi ý cho bạn</p>
        </div>
        <div className="box-product dp-flex sp-between">
          {listProduct.map((item, index) => {
            return (
              <div className="items-box-product" key={index}>
                <div className="img-items-box-product">
                  <img src={item.img} alt="" />
                </div>
                <div className="add-to-cart">
                  <img src="img/Cart.png" alt="" />
                  <button type="button">Thêm vào giỏ hàng</button>
                </div>
                <div className="information-items-box-product">
                  <div className="title-book">{item.title}</div>
                  <div className="author-book">{item.author}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default BoxProduct;
