import styles from "./ItemStyles.module.css";

//with destructuring

const Item = ({ bestcricketplayers, voted, handleVoteButton }) => {
  return (
    <>
      <li className={`list-group-item ${voted && "active"}`}>
        {bestcricketplayers}{" "}
        <button className={styles.button} onClick={handleVoteButton}>
          Vote
        </button>
      </li>
    </>
  );
};

export default Item;

// without destructuring
// const Item = (props) => {
//   return <li className="list-group-item">{props.bestcricketplayers}</li>; //  ya destructuring krdo, fayda ye hai destructuring ka ki ek saath multiple props bhi add kr skte
// };

// export default Item;
