import React from 'react';
import '../App.css';
import Square from './square';

interface IProps {
    squares: string[];
    onClick: (i: number) => void;
}

const Board: React.FC<IProps> = ({ squares, onClick }) => (
    <div className="board">
        {squares.map((square, index) => {
            return (
                <Square key={index} value={square} onClick={() => onClick(index)} />
            );
        })}
    </div>
);

export default Board;