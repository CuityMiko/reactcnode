import React from 'react';

const Header=React.createClass({
    render(){
        return(
            <header>
                <h3>{this.props.headerTitle}</h3>
            </header>
        );
    }
});

export default Header;
