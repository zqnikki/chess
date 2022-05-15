import { WhiteKing, BlackKing } from "./piece/King";
import { WhiteQueen, BlackQueen } from "./piece/Queen";
import { WhiteBishop, BlackBishop } from "./piece/Bishop";
import { WhiteKnight, BlackKnight } from "./piece/Knight";
import { WhiteRook, BlackRook } from "./piece/Rook";
import { WhitePawn, BlackPawn } from "./piece/Pawn";

const GIRD_TYPE = {
	CORNER: { className: "grid" },
	FIRST_ROW: { className: "grid first-row" },
	FIRST_COLUMN: { className: "grid first-column" },
	CHESS_GIRD: {
		odd: { className: "chessGird odd" },
		even: { className: "chessGird even" },
	},
};

const Grid = ({ girdType, text, x, y, chessType }) => {
	let chess;
	switch (chessType) {
		case "WhiteKing":
			chess = <WhiteKing />;
			break;
		case "BlackKing":
			chess = <BlackKing />;
			break;
		case "WhiteQueen":
			chess = <WhiteQueen />;
			break;
		case "BlackQueen":
			chess = <BlackQueen />;
			break;
		case "WhiteBishop":
			chess = <WhiteBishop />;
			break;
		case "BlackBishop":
			chess = <BlackBishop />;
			break;
		case "WhiteKnight":
			chess = <WhiteKnight />;
			break;
		case "BlackKnight":
			chess = <BlackKnight />;
			break;
		case "WhiteRook":
			chess = <WhiteRook />;
			break;
		case "BlackRook":
			chess = <BlackRook />;
			break;
		case "WhitePawn":
			chess = <WhitePawn />;
			break;
		case "BlackPawn":
			chess = <BlackPawn />;
	}

	const position = {
		x: x,
		y: y,
	};

	const positionStr =
		girdType === GIRD_TYPE.CHESS_GIRD.even ||
			girdType === GIRD_TYPE.CHESS_GIRD.odd
			? String.fromCharCode(64 + position.x) + position.y
			: "";

	const girdText = text || "";
	return (
		<div className={girdType.className}>
			{girdText}
			{chess}
			<span>{positionStr}</span>
		</div>
	);
};

export default Grid;
export { GIRD_TYPE };
