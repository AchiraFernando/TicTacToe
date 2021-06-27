import { useState } from 'react';
import '../App.css';
import { calculateWinner } from '../helpers/helper-functions';
import Board from './board';

const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState<number>(0);
    const [xIsNext, setXisNext] = useState<boolean>(true);
    const winner = calculateWinner(history[stepNumber])
    const xo = xIsNext ? "X" : "O";

    const handleOnClick = (i: number) => {
        const historyPoint = history.slice(0, stepNumber + 1);
        const current = historyPoint[stepNumber];
        const squares = [...current];

        if (winner || squares[i]) return;
        squares[i] = xo;

        setHistory([...historyPoint, squares]);
        setStepNumber(historyPoint.length);
        setXisNext(!xIsNext);
    }

    return (
        <>
            <Board squares={history[stepNumber]} onClick={handleOnClick} />
            <h3>{winner ? `Congrats! Winner is: ${winner}` : `Next Player: ${xo}`}</h3>
        </>
    )
};

export default Game;