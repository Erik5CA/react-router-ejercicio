import { useParams } from "react-router-dom";

export function Modelo() {
  const { rey } = useParams();
  const reyCap =
    rey.substring(0, 1).toUpperCase() + rey.substring(1).toLowerCase();
  return (
    <div>
      <img src={`https://www.html6.es/img/rey_${rey}.png`} alt="" />
      <h1>{reyCap}</h1>
    </div>
  );
}
