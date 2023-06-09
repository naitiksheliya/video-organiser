import React from "react";
import Card from "./Card";

function Cards({ cards }) {
  return (
    <>
      {/* <div className=""> */}
        {cards.map((card) => {
          return <Card key={card.link} title={card.title} link={card.link} />;
        })}
      {/* </div> */}
    </>
  );
}

export default Cards;