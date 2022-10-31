import "./boxhotproduct.scss"
const BoxHotProduct = () => {
  const listproduct = [
    {
      img: "img/Rectangle 614.png",
      title: " Đàn ông sao hỏa đàn bà sao",
      author: "Amada Natsuki",
    },
    {
      img: "img/Rectangle 613.png",
      title: " Đàn ông sao hỏa đàn bà sao",
      author: "Amada Natsuki",
    },
    {
      img: "img/Rectangle 615.png",
      title: " Đàn ông sao hỏa đàn bà sao",
      author: "Amada Natsuki",
    },
  ];
  return (
    <>
      {listproduct.map((item, index) => {
        return (
          <div className="books-listen-a-lot dp-flex" key={index}>
            <div className="right-books-listen-a-lott">
              <a to="#">
                <img src={item.img} alt="" />
              </a>
              <div className="numerical-order-book">
                <img src="img/Badge Tags.png" alt="" />
              </div>
            </div>
            <div className="left-books-listen-a-lott">
              <div className="book-topic">
                <a to="#">
                  <p>Kinh tế và tài chính</p>
                </a>
              </div>
              <div className="title-book-topic">
                <a to="#">
                  <p>{item.title}</p>
                </a>
              </div>
              <div className="author-book">
                <p>{item.author}</p>
              </div>
              <div className="evaluate-book dp-flex">
                <img src="img/alert-circle-fill.png" alt="" />
                <img src="img/alert-circle-fill.png" alt="" />
                <img src="img/alert-circle-fill.png" alt="" />
                <img src="img/alert-circle-fill.png" alt="" />
                <img src="img/alert-circle-fill.png" alt="" />
                <p>(122)</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default BoxHotProduct;
