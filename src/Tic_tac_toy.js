import './tic_tac_style.css'
import Field from './Field';
import { useEffect, useState } from 'react';
function Tic_tac_toy() {
    const [pyalerX, setPlayerX] = useState(true);
    const [winner, setWinner] = useState(undefined);
    const [boardData, setBoardData] = useState([
        '', '', '',
        '', '', '',
        '', '', '',
    ]);

    function updateBoard(index) {
        let list = [...boardData];
        list[index] = pyalerX ? "X" : "O";
        setPlayerX(!pyalerX);
        setBoardData(list);
        // checkGame();
    }
    useEffect(() => checkGame(), [boardData]);

    function match(i1, i2, i3) {
        return boardData[i1] == boardData[i2] && boardData[i1] == boardData[i3];
    }

    function checkGame() {
        const k = boardData[0];
        const k2 = boardData[4];
        const k3 = boardData[8];
        let w = '';
        if (match(0, 1, 2) || match(0, 3, 6) || match(0, 4, 8)) {
            w = k;
        } else if (match(3, 4, 5) || match(2, 4, 7)) {
            w = k2;
        } else if (match(6, 7, 8) || match(2, 5, 8)) {
            w = k3;
        }
        if (w !== '') {
            setWinner(w);
        }
    }

    return (
        <div className='page' >
            <div className='board' >
                {boardData.map((data, index) =>
                    <Field key={index} data={data} onClicked={() => updateBoard(index)} />
                )}
            </div>
            <div>
                player {pyalerX ? "X" : "O"}
            </div>
            {winner && <div style={{
                position: "absolute",
                zIndex: "2",
                backgroundColor: "#005555dd",
                borderRadius: "10px",
                color: "white",
                minHeight:"35vh",
                minWidth:"35vh",
                display:"flex",
                flexDirection:"column",
                alignItems:"center",
                justifyContent:"center",
                border:"solid 1px black",
                boxShadow:"5px 5px 30px black"
            }} >
                <div>
                    Winner {winner}
                </div>
                <div>
                    <button onClick={() => {
                        setWinner(undefined); setBoardData([
                            '', '', '',
                            '', '', '',
                            '', '', '',
                        ])
                    }} >Play Again</button>
                </div>
            </div>}
        </div>
    )
}
export default Tic_tac_toy;