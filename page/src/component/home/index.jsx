import React from 'react';

import Footer from '../public/footer.jsx';
import Header from '../public/Header.jsx';
import IndexList from '../indexList.jsx';

const Index=React.createClass({
getInitialState:function(){
      return {
          headerTitle:'未来之光，专注教育事业《免费培训》',
          listTitle:'最新资讯'
      }
},
    render(){
        return(
        <div>
              <Header headerTitle={this.state.headerTitle} />
              <div className="shop-item">
                  <ul>
                      <li className="item-class">
                          <a href="#"><i></i>我的课程</a>
                      </li>
                      <li className="item-online">
                          <a href="#"><i></i>面试题库</a>
                      </li>
                      <li className="item-order">
                          <a href="#"><i></i>我的订单</a>
                      </li>
                      <li  className="item-cart">
                          <a href="#"><i></i>购物车</a>
                      </li>
                  </ul>
              </div>
              <main>
                <IndexList  listTitle={this.state.listTitle} />
              </main>
              <Footer />
              </div>
        )
    }
});

export default Index
