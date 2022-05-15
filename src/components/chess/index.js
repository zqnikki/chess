import React from "react";
import "./index.css";
import whiteBishop from "./ico/white_bishop.png";
import whiteKing from "./ico/white_king.png";
import whiteKnight from "./ico/white_knight.png";
import whitePawn from "./ico/white_pawn.png";
import whiteQueen from "./ico/white_queen.png";
import whiteRook from "./ico/white_rook.png";

export default class Chess extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [100],
      initialLayout: [
        // 白色战车 * 2
        { chess: whiteRook, x: 1, y: 1 },
        { chess: whiteRook, x: 1, y: 8 },
        // 白色士兵 * 8
        { chess: whitePawn, x: 2, y: 1 },
        { chess: whitePawn, x: 2, y: 3 },
        { chess: whitePawn, x: 2, y: 2 },
        { chess: whitePawn, x: 2, y: 4 },
        { chess: whitePawn, x: 2, y: 5 },
        { chess: whitePawn, x: 2, y: 6 },
        { chess: whitePawn, x: 2, y: 7 },
        { chess: whitePawn, x: 2, y: 8 },
      ],
    };
  }

  render() {
    // 棋盘总格子数
    for (var i = 0; i < 100; i++) {
      // 首行尾行和首列尾列
      if (i < 10 || i % 10 === 0 || i % 10 === 9 || i > 90) {
        const backgroundColor = "#312e2b";
        if (i < 10) {
          const text = i > 0 && i < 9 ? String.fromCharCode(64 + i) : "";
          this.state.board[i] = (
            <td style={{ "background-color": backgroundColor, height: "2em" }}>
              {text}
            </td>
          );
        } else if (i % 10 === 0 || i % 10 === 9) {
          const text = i % 10 === 0 && i < 90 ? (90 - i) / 10 : "";
          this.state.board[i] = (
            <td style={{ "background-color": backgroundColor, width: "2em" }}>
              {text}
            </td>
          );
        } else
          this.state.board[i] = (
            <td
              style={{ "background-color": backgroundColor, height: "2em" }}
            ></td>
          );
      }
      // 奇数格子
      else if ((i % 20 > 10 && i % 2 === 1) || (i % 20 <= 10 && i % 2 === 0)) {
        const x = 9 - Math.floor(i / 10);
        const y = i % 10;
        this.state.board[i] = (
          <td
            x={x}
            y={y}
            style={{
              "background-color": "#eeeed2",
              width: "5em",
              height: "5em",
              color: "black",
            }}
          >
            <img src={whiteBishop} />
          </td>
        );
      }
      // 偶数个字
      else {
        const x = 9 - Math.floor(i / 10);
        const y = i % 10;
        this.state.board[i] = (
          <td
            x={x}
            y={y}
            style={{
              "background-color": "#769656",
              width: "5em",
              height: "5em",
              color: "black",
            }}
          ></td>
        );
      }
    }

    return (
      <div>
        <a onClick={void 0}>新一局游戏</a>
        <table>
          <tr>{this.state.board.slice(0, 10)}</tr>
          <tr>{this.state.board.slice(10, 20)}</tr>
          <tr>{this.state.board.slice(20, 30)}</tr>
          <tr>{this.state.board.slice(30, 40)}</tr>
          <tr>{this.state.board.slice(40, 50)}</tr>
          <tr>{this.state.board.slice(50, 60)}</tr>
          <tr>{this.state.board.slice(60, 70)}</tr>
          <tr>{this.state.board.slice(70, 80)}</tr>
          <tr>{this.state.board.slice(80, 90)}</tr>
          <tr>{this.state.board.slice(90, 100)}</tr>
        </table>
      </div>
    );
  }
}
