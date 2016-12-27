import React from 'react';

const Index=React.createClass({
    render(){
        return(
        <div>
              <header>
                  <h3>未来之光科技有限公司</h3>
              </header>
              <div className="shop-item">
                  <ul>
                      <li className="item-class">
                          <a href="#">
                          <i></i>
                          我的课程</a>
                      </li>
                      <li className="item-online">
                      <a href="#">
                      <i></i>
                      面试题库
                      </a>
                      </li>
                      <li className="item-order">
                      <a href="#">
                      <i></i>
                      我的订单
                      </a>
                      </li>
                      <li  className="item-cart">
                      <a href="#">
                      <i></i>
                      购物车
                      </a>
                      </li>
                  </ul>
              </div>
              <main>
                <div className="ui-content">
                    <div className="ui-shop-title">最新资讯</div>
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
              </main>
              </div>
        )
    }
});

export default Index
