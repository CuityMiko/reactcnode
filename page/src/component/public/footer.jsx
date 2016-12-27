import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router'

const footer=React.createClass({
    render:function(){
      return(
      <footer className="ui-footer">
        <nav>
          <Link to='/'>home</Link>
          <Link to='/about'>about</Link>
        </nav>
      </footer>
      );
    }
});



export default footer;
