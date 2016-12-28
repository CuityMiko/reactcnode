import React from 'react';

import Footer from '../public/footer.jsx';
import Header from '../public/Header.jsx';
import IndexList from '../indexList.jsx';

const Shop=React.createClass({
      getInitialState:function(){
            return {
                headerTitle:'视频列表',
                listTitle:'热门视频'
            }
      },
      render(){
          return(
          <div>
          <Header headerTitle={this.state.headerTitle} />
          <main>
              <IndexList listTitle={this.state.listTitle} />
          </main>
          <Footer />
          </div>
          )
      }
});


export default Shop;
