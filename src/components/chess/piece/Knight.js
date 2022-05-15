import WhiteKnightPng from "../ico/white_knight.png";
import BlackKnightPng from "../ico/black_knight.png";

const WhiteKnight = () => {
  return (
    <img src={WhiteKnightPng} style={{ left: "0.7rem", bottom: "0.5rem" }} />
  );
};

const BlackKnight = () => {
  return (
    <img src={BlackKnightPng} style={{ left: "0.7rem", bottom: "0.5rem" }} />
  );
};

export { WhiteKnight, BlackKnight };
