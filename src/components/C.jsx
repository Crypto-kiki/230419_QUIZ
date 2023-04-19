import Card from "./Card";
import boxColorData from "../boxColorData.json";

const C = () => {
  return (
    <div className="flex flex-row justify-center items-center">
      {boxColorData.map((v, i) => {
        return <Card key={i} color={v.color} />;
      })}
    </div>
  );
};

export default C;
