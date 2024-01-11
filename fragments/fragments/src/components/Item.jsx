//with destructuring

const Item = ({ bestcricketplayers }) => {
  return <li className="list-group-item">{bestcricketplayers}</li>;
};

export default Item;

// without destructuring
// const Item = (props) => {
//   return <li className="list-group-item">{props.bestcricketplayers}</li>; //  ya destructuring krdo
// };

// export default Item;
