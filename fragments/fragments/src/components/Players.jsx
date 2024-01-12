import Item from "./item";

const Players = ({ bestcricketplayers }) => {
  return (
    <ul className="list-group">
      {bestcricketplayers.map((items) => (
        <Item
          key={items}
          bestcricketplayers={items}
          handleVoteButton={() => console.log(`${items} voted`)}
        ></Item>

        // key
      ))}
    </ul>
  );
};

export default Players;
