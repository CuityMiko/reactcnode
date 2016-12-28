import React from 'react';


const IndexList=React.createClass({
      render(){
          return(
              <div>
                  <div className="ui-content">
                      <div className="ui-shop-title">{this.props.listTitle}</div>
                      <div className="ui-shop-list">
                          <dl className="ui-shop-dl">
                              <dt>
                                  <img src="./img/shop.png" alt="" />
                              </dt>
                              <dd>
                                  <h5>2016年下半年湖南准考证打印</h5>
                                  <p>2016年下半年湖南准考证打印时间10月31日至11月5日。</p>
                              </dd>
                          </dl>
                          <dl className="ui-shop-dl">
                              <dt>
                                  <img src="./img/shop.png" alt="" />
                              </dt>
                              <dd>
                                  <h5>2016年下半年湖南准考证打印</h5>
                                  <p>2016年下半年湖南准考证打印时间10月31日至11月5日。</p>
                              </dd>
                          </dl>
                      </div>
                  </div>
              </div>
          )
      }
});


export default IndexList
