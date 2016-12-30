import React from 'react';

const Header=React.createClass({
    render(){
        return(
            <header>
                <h3>{this.props.headerTitle}</h3>
                <span className="ui-header-right"  dangerouslySetInnerHTML={{__html:this.props.headerR}}></span>
            </header>
        );
    }
});

export default Header;
