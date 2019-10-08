export default function calculateWinner(data) {
  const squares = data.flat(2);
  const traduction = {
    0:[0,0],
    1:[0,1],
    2:[0,2],
    3:[1,0],
    4:[1,1],
    5:[1,2],
    6:[2,0],
    7:[2,1],
    8:[2,2]
  }
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] !== "" && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {win:squares[a],coordinates:[traduction[a],traduction[b],traduction[c]]};
    }
  }
  return {win:null,coordinates:null};
}
