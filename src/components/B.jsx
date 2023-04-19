import { useState } from "react";

const B = () => {
  const [count, setCount] = useState(0);

  const increasement = () => {
    setCount(count + 1);
  };

  const decreasement = () => {
    setCount(count - 1);
  };

  return (
    <div className="flex justify-center items-center text-3xl">
      <button
        onClick={decreasement}
        className="btn-style border-4 border-blue-400 font-bold text-blue-400 w-16"
      >
        -
      </button>
      <span className="mx-4 text-main font-bold">{count}</span>
      <button
        onClick={increasement}
        className="btn-style border-4 font-bold w-16"
      >
        +
      </button>
    </div>
  );
};

export default B;
