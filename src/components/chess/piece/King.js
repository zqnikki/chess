import WhiteKingPng from "../ico/white_king.png";
import BlackKingPng from "../ico/black_king.png";

const WhiteKing = () => {
  return (
    <img src={WhiteKingPng} style={{ left: "1.4rem", bottom: "0.5rem" }} />
  );
};

const BlackKing = () => {
  return (
    <img src={BlackKingPng} style={{ left: "1.4rem", bottom: "0.5rem" }} />
  );
};

export { WhiteKing, BlackKing };
