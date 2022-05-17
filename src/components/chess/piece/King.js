import WhiteKingPng from "../ico/white_king.png";
import BlackKingPng from "../ico/black_king.png";
import { Img } from 'react-image'

const WhiteKing = () => <Img src={WhiteKingPng} style={{ left: "1.4rem", bottom: "0.5rem" }} />

const BlackKing = () => <Img src={BlackKingPng} style={{ left: "1.4rem", bottom: "0.5rem" }} />

export { WhiteKing, BlackKing };
