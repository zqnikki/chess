import WhiteBishopPng from "../ico/white_bishop.png";
import BlackBishopPng from "../ico/black_bishop.png";
import { Img } from 'react-image'

const WhiteBishop = () => <Img src={WhiteBishopPng} style={{ left: "1.4rem", bottom: "0.5rem" }} />

const BlackBishop = () => <Img src={BlackBishopPng} style={{ left: "1.4rem", bottom: "0.5rem" }} />

export { WhiteBishop, BlackBishop };
