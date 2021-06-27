import React from 'react';
import '../App.css';

interface IProps {
    onClick: () => void;
    value: string | null;
}

const Square: React.FC<IProps> = ({ value, onClick }) => {
    const style = value ? `squares ${value}` : `squares`;

    return (
        <button className={style} onClick={onClick}>
            {value}
        </button>
    );
};

export default Square;