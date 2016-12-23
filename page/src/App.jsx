import React from 'react';
import {Router,Route,hashHistory, Link} from 'react-router';

const Home = () => <div>home<Links /></div>;
const About = () => <div>about<Links /></div>;

const Links = () =>
<footer className="ui-footer">
  <nav>
    <Link to='/'>home</Link>
    <Link to='/about'>about</Link>
  </nav>
</footer>

class App extends React.Component{
    render(){
        return(
            <Router history={hashHistory}>
                <Route path="/" component={Home} />
                <Route path="/about" component={About} />
            </Router>
        )
    }
}

export default App;
