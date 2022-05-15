import WhiteBishopPng from "../ico/white_bishop.png";
import BlackBishopPng from "../ico/black_bishop.png";

const WhiteBishop = () => {
  return (
    <img src={WhiteBishopPng} style={{ left: "1.4rem", bottom: "0.5rem" }} />
  );
};

const BlackBishop = () => {
  return (
    <img src={BlackBishopPng} style={{ left: "1.4rem", bottom: "0.5rem" }} />
  );
};

export { WhiteBishop, BlackBishop };
