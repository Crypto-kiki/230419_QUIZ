// import Card from "./Card";
// import boxColorData from "../boxColorData.json";

// const C = () => {
//   return (
//     <div className="flex flex-row justify-center items-center">
//       {boxColorData.map((v, i) => {
//         return <Card key={i} color={v.color} />;
//       })}
//     </div>
//   );
// };

// export default C;

import Card from "./Card";

const colors = [
  "bg-red-400",
  "bg-orange-400",
  "bg-yellow-400",
  "bg-green-400",
  "bg-blue-400",
  "bg-purple-400",
  "bg-main",
];

const C = () => {
  return (
    <div className="flex">
      {colors.map((v, i) => {
        return <Card key={i} color={v} />;
      })}
    </div>
  );
};

export default C;
