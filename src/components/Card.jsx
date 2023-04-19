const Card = ({ color }) => {
  return (
    <div>
      <div className={`${color} w-16 h-16 my-32 mx-6`}></div>
    </div>
  );
};

export default Card;
