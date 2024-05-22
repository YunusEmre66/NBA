import { useState } from "react";
import CardStyle from "../Components/Card.module.css";

const Card = ({ data }) => {
  const { name, img, statistics } = data;
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <div className="col col-md-6 col-lg-4 col-xl-3">
        <div className={CardStyle.card} onClick={() => setToggle(!toggle)}>
          {toggle ? (
            <div>
              <img id="imageCard" src={img} width={275} height={300} alt="" />
              <h3>{name}</h3>
            </div>
          ) : (
            <div className={CardStyle.static}>
              {statistics.map((itm) => {
                return <h3>{itm}</h3>;
              })}
            </div>
          )}
        </div> 
      </div>
    </>
  );
};

export default Card;
