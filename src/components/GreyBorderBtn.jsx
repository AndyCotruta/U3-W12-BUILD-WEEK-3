const GreyBorderBtn = (props) => {
  return (
    <button className="GR-Btn d-flex align-items-center">
      {props.icon}
      <div className="ml-1">{props.content}</div>
    </button>
  );
};

export default GreyBorderBtn;
