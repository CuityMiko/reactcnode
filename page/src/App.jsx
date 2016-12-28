import React from 'react';
import {Router,Route,hashHistory, Link} from 'react-router';
import {createHistory,useBasename} from 'history';


import Index from './component/home/index.jsx';
import About from './component/about/index.jsx';
import My from './component/my/index.jsx';
import Shop from './component/shop/index.jsx';

require('./style/comm.css');
/**const history = useBasename(createHistory)({
  basename: '/reactcnode'
});**/
{/**  {this.props.children}   非常重要**/}
{/** 思考：首页也有其他分路由，怎么配**/ }



class App extends React.Component{
    render(){
        return(
            <Router history={hashHistory}>
                <Route path="/" component={Index} />
                <Route path="/about" component={About} />
                <Route path="/shop" component={Shop} />
                <Route path="/user" component={My} />
            </Router>
        )
    }
}

export default App;
