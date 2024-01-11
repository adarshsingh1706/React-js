import Item from "./item";

const Players = (props) => {
  return (
    <ul className="list-group">
      {props.bestcricketplayers.map((items) => (
        <Item key={items} bestcricketplayers={items}></Item>

        // key
      ))}
    </ul>
  );
};

export default Players;
