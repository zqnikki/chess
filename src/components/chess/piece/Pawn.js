import WhitePawnPng from "../ico/white_pawn.png";
import BlackPawnPng from "../ico/black_pawn.png";

const WhitePawn = () => {
  return (
    <img src={WhitePawnPng} style={{ left: "1.2rem", bottom: "0.5rem" }} />
  );
};

const BlackPawn = () => {
  return (
    <img src={BlackPawnPng} style={{ left: "1.2rem", bottom: "0.5rem" }} />
  );
};

export { WhitePawn, BlackPawn };
