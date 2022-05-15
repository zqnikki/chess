import WhiteQueenPng from "../ico/white_queen.png";
import BlackQueenPng from "../ico/black_queen.png";

const WhiteQueen = () => {
  return (
    <img src={WhiteQueenPng} style={{ left: "1.3rem", bottom: "0.5rem" }} />
  );
};

const BlackQueen = () => {
  return (
    <img src={BlackQueenPng} style={{ left: "1.3rem", bottom: "0.5rem" }} />
  );
};

export { WhiteQueen, BlackQueen };
