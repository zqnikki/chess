import WhitePawnPng from "../ico/white_pawn.png";
import BlackPawnPng from "../ico/black_pawn.png";
import { Img } from 'react-image'

const WhitePawn = () => <Img src={WhitePawnPng} style={{ left: "1.2rem", bottom: "0.5rem" }} />

const BlackPawn = () => <Img src={BlackPawnPng} style={{ left: "1.2rem", bottom: "0.5rem" }} />

export { WhitePawn, BlackPawn };
