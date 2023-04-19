const Card = ({ color }) => {
  return (
    <div>
      <div className={`w-16 h-16 my-32 mx-6 ${color}`}>{color}</div>
    </div>
  );
};

export default Card;
