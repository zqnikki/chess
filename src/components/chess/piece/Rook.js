import WhiteRookPng from "../ico/white_rook.png";
import BlackRookPng from "../ico/black_rook.png";
import { Img } from 'react-image'

const WhiteRook = () => <Img src={WhiteRookPng} style={{ left: "1rem", bottom: "0.5rem" }} />

const BlackRook = () => <Img src={BlackRookPng} style={{ left: "1rem", bottom: "0.5rem" }} />

export { WhiteRook, BlackRook };
