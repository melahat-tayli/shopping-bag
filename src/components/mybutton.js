import { useState } from "react";
import { Card } from "./card";
import { MyBag } from "./myBag";

export const CardWithButton = ({ name, amount, url }) => {
  const [showCard, setShowCard] = useState(true);
  const onClick = () => setShowCard(false);

  return (
    <div className="delete-button-card">
      {showCard ? <Card url={url} name={name} amount={amount} /> : null}
      <input
        className="delete-button"
        type="submit"
        value="delete"
        onClick={onClick}
      />
    </div>
  );
};

export const CardsWithButtons = ({ name, amount, url }) => {
  let bag = MyBag();
  let folderUrl = "./images";
  let fileUrls = [
    "/tomato.jpeg",
    "/banana.jpeg",
    "/eggplant.jpeg",
    "/carrot.jpeg",
    "/cucumber.jpeg",
  ];
  let element_indexes = Array.from(Array(fileUrls.length).keys());
  return (
    <>
      {element_indexes.map((element_index) => {
        return (
          <CardWithButton
            url={folderUrl + fileUrls[element_index]}
            name={bag[element_index].item}
            amount={bag[element_index].amount}
          />
        );
      })}
    </>
  );
};
