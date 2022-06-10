import React from 'react';
import './BurgerConstructor.css';

const BurgerConstructor = ({userChoiceArray}) => {
        return (
            <div className="Burger">
                <div className="BreadTop">
                    <div className="Seeds1"></div>
                    <div className="Seeds2"></div>
                </div>
                {userChoiceArray.map((ingred, i) => (
                    <div key={i} className={ingred}></div>
                ))}
                <div className="BreadBottom"></div>
            </div>
    );
};

export default BurgerConstructor;