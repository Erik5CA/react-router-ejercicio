import { Link } from "react-router-dom";

function Home() {
  const lista = [
    "atanagildo",
    "ataulfo",
    "ervigio",
    "leovigildo",
    "recesvinto",
    "sisebuto",
  ];
  return (
    <div className="reyes">
      {lista.map((item, index) => {
        return (
          <div key={index}>
            <Link to={`/reyes/${item}`}>
              <img
                src={`https://www.html6.es/img/rey_${item}.png`}
                alt={item}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
