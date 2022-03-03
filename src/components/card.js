import { MyBag } from "./myBag";

export const Card = (props) => {
  //const text = "Hello World";
  //const imgUrl = "./images/banana.jpeg";
  return (
    <div>
      <div>
        <img
          alt="shopping-list-item"
          src={props.url} //images are in public directory but this is the way it works
          style={{ height: "80px" }}
        />
      </div>
      <div>
        <p>
          {props.name} <span>{props.amount}</span>
        </p>
      </div>
    </div>
  );
};

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
  let indexes = Array.from(Array(fileUrls.length).keys());
  return (
    <div>
      {indexes.map((index) => {
        return (
          <Card
            url={folderUrl + fileUrls[index]}
            name={bag[index].item}
            amount={bag[index].amount}
          />
        );
      })}
    </div>
  );
};
