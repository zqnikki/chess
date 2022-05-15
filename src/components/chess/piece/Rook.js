import WhiteRookPng from "../ico/white_rook.png";
import BlackRookPng from "../ico/black_rook.png";

const WhiteRook = () => {
  return <img src={WhiteRookPng} style={{ left: "1rem", bottom: "0.5rem" }} />;
};

const BlackRook = () => {
  return <img src={BlackRookPng} style={{ left: "1rem", bottom: "0.5rem" }} />;
};

export { WhiteRook, BlackRook };
