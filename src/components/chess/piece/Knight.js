import WhiteKnightPng from "../ico/white_knight.png";
import BlackKnightPng from "../ico/black_knight.png";
import { Img } from 'react-image'

const WhiteKnight = () => <Img src={WhiteKnightPng} style={{ left: "0.7rem", bottom: "0.5rem" }} />

const BlackKnight = () => <Img src={BlackKnightPng} style={{ left: "0.7rem", bottom: "0.5rem" }} />

export { WhiteKnight, BlackKnight };
