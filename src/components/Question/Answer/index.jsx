import "./answer.scss"
const Answer = () => {
  return (
    <ul class="answer-choice">
      <li class="bđ-bottom">
        <p class="text-answer-choice">A. kinh tế</p>
        <div class="icon-answer-choice"></div>
      </li>
      <li class="bđ-bottom">
        <p class="text-answer-choice">B. Tài năng</p>
        <div class="icon-answer-choice">
          <img src="img/checkmark-circle-fill.png" alt="" />
        </div>
      </li>
      <li class="bđ-bottom">
        <p class="text-answer-choice">
          C. Hoạt động trong các hoạt động thiết yếu của công ty, nhân sự là bộ
          máy hiệu quả nhất hiện nay.
        </p>
        <div class="icon-answer-choice"></div>
      </li>
      <li>
        <p class="text-answer-choice">
          D. Nhân sự dẫn đầu trong các hoạt động thiết yếu của công ty, nhân sự
          là bộ máy hiệu quả.
        </p>
        <div class="icon-answer-choice"></div>
      </li>
    </ul>
  );
};
export default Answer