import Gird, { GIRD_TYPE } from "./Grid";

const Checkerboard = () => {
  return (
    <div>
      <a onClick={void 0}>新一局游戏</a>
      <div>
        <Gird girdType={GIRD_TYPE.CORNER} />
        <Gird girdType={GIRD_TYPE.FIRST_ROW} text="a" />
        <Gird girdType={GIRD_TYPE.FIRST_ROW} text="b" />
        <Gird girdType={GIRD_TYPE.FIRST_ROW} text="c" />
        <Gird girdType={GIRD_TYPE.FIRST_ROW} text="d" />
        <Gird girdType={GIRD_TYPE.FIRST_ROW} text="e" />
        <Gird girdType={GIRD_TYPE.FIRST_ROW} text="f" />
        <Gird girdType={GIRD_TYPE.FIRST_ROW} text="g" />
        <Gird girdType={GIRD_TYPE.FIRST_ROW} text="h" />
        <Gird girdType={GIRD_TYPE.CORNER} />
      </div>
      <div>
        <Gird girdType={GIRD_TYPE.FIRST_COLUMN} text="8" />
        <Gird
          girdType={GIRD_TYPE.CHESS_GIRD.odd}
          x={1}
          y={8}
          chessType="BlackRook"
        />
        <Gird
          girdType={GIRD_TYPE.CHESS_GIRD.even}
          x={2}
          y={8}
          chessType="BlackKnight"
        />
        <Gird
          girdType={GIRD_TYPE.CHESS_GIRD.odd}
          x={3}
          y={8}
          chessType="BlackBishop"
        />
        <Gird
          girdType={GIRD_TYPE.CHESS_GIRD.even}
          x={4}
          y={8}
          chessType="BlackQueen"
        />
        <Gird
          girdType={GIRD_TYPE.CHESS_GIRD.odd}
          x={5}
          y={8}
          chessType="BlackKing"
        />
        <Gird
          girdType={GIRD_TYPE.CHESS_GIRD.even}
          x={6}
          y={8}
          chessType="BlackBishop"
        />
        <Gird
          girdType={GIRD_TYPE.CHESS_GIRD.odd}
          x={7}
          y={8}
          chessType="BlackKnight"
        />
        <Gird
          girdType={GIRD_TYPE.CHESS_GIRD.even}
          x={8}
          y={8}
          chessType="BlackRook"
        />
        <Gird girdType={GIRD_TYPE.FIRST_COLUMN} text="8" />
      </div>
      <div>
        <Gird girdType={GIRD_TYPE.FIRST_COLUMN} text="7" />
        <Gird
          girdType={GIRD_TYPE.CHESS_GIRD.even}
          x={1}
          y={7}
          chessType="BlackPawn"
        />
        <Gird
          girdType={GIRD_TYPE.CHESS_GIRD.odd}
          x={2}
          y={7}
          chessType="BlackPawn"
        />
        <Gird
          girdType={GIRD_TYPE.CHESS_GIRD.even}
          x={3}
          y={7}
          chessType="BlackPawn"
        />
        <Gird
          girdType={GIRD_TYPE.CHESS_GIRD.odd}
          x={4}
          y={7}
          chessType="BlackPawn"
        />
        <Gird
          girdType={GIRD_TYPE.CHESS_GIRD.even}
          x={5}
          y={7}
          chessType="BlackPawn"
        />
        <Gird
          girdType={GIRD_TYPE.CHESS_GIRD.odd}
          x={6}
          y={7}
          chessType="BlackPawn"
        />
        <Gird
          girdType={GIRD_TYPE.CHESS_GIRD.even}
          x={7}
          y={7}
          chessType="BlackPawn"
        />
        <Gird
          girdType={GIRD_TYPE.CHESS_GIRD.odd}
          x={8}
          y={7}
          chessType="BlackPawn"
        />
        <Gird girdType={GIRD_TYPE.FIRST_COLUMN} text="7" />
      </div>
      <div>
        <Gird girdType={GIRD_TYPE.FIRST_COLUMN} text="6" />
        <Gird girdType={GIRD_TYPE.CHESS_GIRD.odd} x={1} y={6} />
        <Gird girdType={GIRD_TYPE.CHESS_GIRD.even} x={2} y={6} />
        <Gird girdType={GIRD_TYPE.CHESS_GIRD.odd} x={3} y={6} />
        <Gird girdType={GIRD_TYPE.CHESS_GIRD.even} x={4} y={6} />
        <Gird girdType={GIRD_TYPE.CHESS_GIRD.odd} x={5} y={6} />
        <Gird girdType={GIRD_TYPE.CHESS_GIRD.even} x={6} y={6} />
        <Gird girdType={GIRD_TYPE.CHESS_GIRD.odd} x={7} y={6} />
        <Gird girdType={GIRD_TYPE.CHESS_GIRD.even} x={8} y={6} />
        <Gird girdType={GIRD_TYPE.FIRST_COLUMN} text="6" />
      </div>
      <div>
        <Gird girdType={GIRD_TYPE.FIRST_COLUMN} text="5" />
        <Gird girdType={GIRD_TYPE.CHESS_GIRD.even} x={1} y={5} />
        <Gird girdType={GIRD_TYPE.CHESS_GIRD.odd} x={2} y={5} />
        <Gird girdType={GIRD_TYPE.CHESS_GIRD.even} x={3} y={5} />
        <Gird girdType={GIRD_TYPE.CHESS_GIRD.odd} x={4} y={5} />
        <Gird girdType={GIRD_TYPE.CHESS_GIRD.even} x={5} y={5} />
        <Gird girdType={GIRD_TYPE.CHESS_GIRD.odd} x={6} y={5} />
        <Gird girdType={GIRD_TYPE.CHESS_GIRD.even} x={7} y={5} />
        <Gird girdType={GIRD_TYPE.CHESS_GIRD.odd} x={8} y={5} />
        <Gird girdType={GIRD_TYPE.FIRST_COLUMN} text="5" />
      </div>
      <div>
        <Gird girdType={GIRD_TYPE.FIRST_COLUMN} text="4" />
        <Gird girdType={GIRD_TYPE.CHESS_GIRD.odd} x={1} y={4} />
        <Gird girdType={GIRD_TYPE.CHESS_GIRD.even} x={2} y={4} />
        <Gird girdType={GIRD_TYPE.CHESS_GIRD.odd} x={3} y={4} />
        <Gird girdType={GIRD_TYPE.CHESS_GIRD.even} x={4} y={4} />
        <Gird girdType={GIRD_TYPE.CHESS_GIRD.odd} x={5} y={4} />
        <Gird girdType={GIRD_TYPE.CHESS_GIRD.even} x={6} y={4} />
        <Gird girdType={GIRD_TYPE.CHESS_GIRD.odd} x={7} y={4} />
        <Gird girdType={GIRD_TYPE.CHESS_GIRD.even} x={8} y={4} />
        <Gird girdType={GIRD_TYPE.FIRST_COLUMN} text="4" />
      </div>
      <div>
        <Gird girdType={GIRD_TYPE.FIRST_COLUMN} text="3" />
        <Gird girdType={GIRD_TYPE.CHESS_GIRD.even} x={1} y={3} />
        <Gird girdType={GIRD_TYPE.CHESS_GIRD.odd} x={2} y={3} />
        <Gird girdType={GIRD_TYPE.CHESS_GIRD.even} x={3} y={3} />
        <Gird girdType={GIRD_TYPE.CHESS_GIRD.odd} x={4} y={3} />
        <Gird girdType={GIRD_TYPE.CHESS_GIRD.even} x={5} y={3} />
        <Gird girdType={GIRD_TYPE.CHESS_GIRD.odd} x={1} y={3} />
        <Gird girdType={GIRD_TYPE.CHESS_GIRD.even} x={7} y={3} />
        <Gird girdType={GIRD_TYPE.CHESS_GIRD.odd} x={8} y={3} />
        <Gird girdType={GIRD_TYPE.FIRST_COLUMN} text="3" />
      </div>
      <div>
        <Gird girdType={GIRD_TYPE.FIRST_COLUMN} text="2" />
        <Gird
          girdType={GIRD_TYPE.CHESS_GIRD.odd}
          x={1}
          y={2}
          chessType="WhitePawn"
        />
        <Gird
          girdType={GIRD_TYPE.CHESS_GIRD.even}
          x={2}
          y={2}
          chessType="WhitePawn"
        />
        <Gird
          girdType={GIRD_TYPE.CHESS_GIRD.odd}
          x={3}
          y={2}
          chessType="WhitePawn"
        />
        <Gird
          girdType={GIRD_TYPE.CHESS_GIRD.even}
          x={4}
          y={2}
          chessType="WhitePawn"
        />
        <Gird
          girdType={GIRD_TYPE.CHESS_GIRD.odd}
          x={5}
          y={2}
          chessType="WhitePawn"
        />
        <Gird
          girdType={GIRD_TYPE.CHESS_GIRD.even}
          x={6}
          y={2}
          chessType="WhitePawn"
        />
        <Gird
          girdType={GIRD_TYPE.CHESS_GIRD.odd}
          x={7}
          y={2}
          chessType="WhitePawn"
        />
        <Gird
          girdType={GIRD_TYPE.CHESS_GIRD.even}
          x={8}
          y={2}
          chessType="WhitePawn"
        />
        <Gird girdType={GIRD_TYPE.FIRST_COLUMN} text="2" />
      </div>
      <div>
        <Gird girdType={GIRD_TYPE.FIRST_COLUMN} text="1" />
        <Gird
          girdType={GIRD_TYPE.CHESS_GIRD.even}
          x={1}
          y={1}
          chessType="WhiteRook"
        />
        <Gird
          girdType={GIRD_TYPE.CHESS_GIRD.odd}
          x={2}
          y={1}
          chessType="WhiteKnight"
        />
        <Gird
          girdType={GIRD_TYPE.CHESS_GIRD.even}
          x={3}
          y={1}
          chessType="WhiteBishop"
        />
        <Gird
          girdType={GIRD_TYPE.CHESS_GIRD.odd}
          x={4}
          y={1}
          chessType="WhiteQueen"
        />
        <Gird
          girdType={GIRD_TYPE.CHESS_GIRD.even}
          x={5}
          y={1}
          chessType="WhiteKing"
        />
        <Gird
          girdType={GIRD_TYPE.CHESS_GIRD.odd}
          x={6}
          y={1}
          chessType="WhiteBishop"
        />
        <Gird
          girdType={GIRD_TYPE.CHESS_GIRD.even}
          x={7}
          y={1}
          chessType="WhiteKnight"
        />
        <Gird
          girdType={GIRD_TYPE.CHESS_GIRD.odd}
          x={8}
          y={1}
          chessType="WhiteRook"
        />
        <Gird girdType={GIRD_TYPE.FIRST_COLUMN} text="1" />
      </div>
      <div>
        <Gird girdType={GIRD_TYPE.CORNER} />
        <Gird girdType={GIRD_TYPE.FIRST_ROW} text="a" />
        <Gird girdType={GIRD_TYPE.FIRST_ROW} text="b" />
        <Gird girdType={GIRD_TYPE.FIRST_ROW} text="c" />
        <Gird girdType={GIRD_TYPE.FIRST_ROW} text="d" />
        <Gird girdType={GIRD_TYPE.FIRST_ROW} text="e" />
        <Gird girdType={GIRD_TYPE.FIRST_ROW} text="f" />
        <Gird girdType={GIRD_TYPE.FIRST_ROW} text="g" />
        <Gird girdType={GIRD_TYPE.FIRST_ROW} text="h" />
        <Gird girdType={GIRD_TYPE.CORNER} />
      </div>
    </div>
  );
};

export default Checkerboard;
