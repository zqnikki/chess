import WhiteQueenPng from "../ico/white_queen.png";
import BlackQueenPng from "../ico/black_queen.png";
import { Img } from 'react-image'

const WhiteQueen = () => <Img src={WhiteQueenPng} style={{ left: "1.3rem", bottom: "0.5rem" }} />

const BlackQueen = () => <Img src={BlackQueenPng} style={{ left: "1.3rem", bottom: "0.5rem" }} />

export { WhiteQueen, BlackQueen };
