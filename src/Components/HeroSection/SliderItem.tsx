const SliderItem = ({ button, heading = "", bgUrl }) => {
  return (
    <div>
      <h1>{heading}</h1>
      <img src={bgUrl} alt="" />
    </div>
  );
};

export default SliderItem;
