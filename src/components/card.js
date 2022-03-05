import { MyBag } from "./myBag";

/*Card component will return an image of shopping list item, name and amount. It takes url, name and amount as parameters*/
export const Card = ({ name, amount, url }) => {
  return (
    <div className="card">
      <div className="card-image-section">
        <img
          alt="shopping-list-item"
          src={url} //images are in public directory but this is the way it works
          style={{ height: "80px" }}
        />
      </div>
      <div>
        <p className="card-product-name">
          {name} : <span>{amount} pounds </span>
        </p>
      </div>
    </div>
  );
};

/*Cards component will return many card components as long as their url, name, and amount will be given. 
  Below, name and amount of the items are taken from MyBag component.*/
export const Cards = () => {
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
          <Card
            url={folderUrl + fileUrls[element_index]}
            name={bag[element_index].item}
            amount={bag[element_index].amount}
          />
        );
      })}
    </>
  );
};
