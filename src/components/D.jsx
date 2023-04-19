import axios from "axios";
import { useState } from "react";

const D = () => {
  const [result, setResult] = useState();

  const get = async () => {
    try {
      const response = await axios.get(`https://green-bush-5824.fly.dev`);

      if (response.status !== 200) {
        alert("에러발생");
        return;
      }

      console.log(response);
      setResult(response.data.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <button className="btn-style" onClick={get}>
        요청
      </button>
      <div className="mt-24">{result ? result : "요청실패!"}</div>
    </div>
  );
};

export default D;
