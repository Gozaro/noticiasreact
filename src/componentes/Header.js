import React from 'react';


const Header = (props) => {
    return (
        <nav>
            <div className="nav-wrapper yellow darken-2">
                <span className="brand-logo center">{props.titulo}</span>
            </div>
        </nav>
    );
};

export default Header;