import React from 'react';
import {Router,Route,hashHistory, Link} from 'react-router';
import {createHistory,useBasename} from 'history';

import Index from './component/home/index.jsx';

require('./style/comm.css');
/**const history = useBasename(createHistory)({
  basename: '/reactcnode'
});**/
{/**  {this.props.children}   非常重要**/}
{/** 思考：首页也有其他分路由，怎么配**/ }
const About = () => <div>
<header>
    <h3>未来之光科技有限公司</h3>
</header>
<main>
    <div className="content">
      <div className="ui-article-title">
          <span>关于我们</span>
      </div>
      <div className="ui-article-content">
      <p>未来之光成为国内最大最具影响力的 《免费培训机构》，致力于《 培训事业》的研究。未来之光由一批热爱 教育事业的工程师发起，目前已经吸引了互联网各个公司热爱教育的爱心人士组成，我们非常欢迎更多对热爱教育事业，有爱心的朋友。</p>
      <p>交流群：<a href="https://jq.qq.com/?_wv=1027&k=42y4Kav">424734136</a>—<a href="https://jq.qq.com/?_wv=1027&k=42y4Kav">点击加入》</a></p>
      </div>
    </div>
</main>
<Links />
</div>;
const shop = () => <div>
<header>
    <h3>未来之光科技有限公司</h3>
</header>
<main>
  <div className="ui-content">
      <div className="ui-shop-title">热门视频</div>
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
<Links />
</div>;
const user = () =>
<div>
<header>
    <h3>未来之光科技有限公司</h3>
</header>
  <div className="list-cts">
  <div className="user-list-item">
    <ul>
      <li>
          <a href="#">关注(20)</a>
      </li>
      <li>
          <a href="#">收藏(20)</a>
      </li>
      <li>
          <a href="#">粉丝(20)</a>
      </li>
    </ul>
  </div>
    <div className="content">
      <a href="#">
        <div className="ui-nav-list">
            <div className="list-left">
              <i className="list-icon-file"></i>
            </div>
            <div className="list-midle">
              <p>我的订单</p>
            </div>
            <div className="list-right">
              <i className="right-icon-arrow"></i>
            </div>
        </div>
      </a>
      <a href="#">
        <div className="ui-nav-list">
            <div className="list-left">
              <i className="list-icon-cart"></i>
            </div>
            <div className="list-midle">
              <p>购物车</p>
            </div>
            <div className="list-right">
              <i className="right-icon-arrow"></i>
            </div>
        </div>
      </a>
      <a href="#">
        <div className="ui-nav-list">
            <div className="list-left">
              <i className="list-icon-local"></i>
            </div>
            <div className="list-midle">
              <p>收货地址</p>
            </div>
            <div className="list-right">
              <i className="right-icon-arrow"></i>
            </div>
        </div>
      </a>
      <a href="#">
        <div className="ui-nav-list">
            <div className="list-left">
              <i className="list-icon-mycs"></i>
            </div>
            <div className="list-midle">
              <p>我的课程</p>
            </div>
            <div className="list-right">
              <i className="right-icon-arrow"></i>
            </div>
        </div>
      </a>
      <a href="#">
        <div className="ui-nav-list">
            <div className="list-left">
              <i className="list-icon-star"></i>
            </div>
            <div className="list-midle">
              <p>会员俱乐部</p>
            </div>
            <div className="list-right">
              <i className="right-icon-arrow"></i>
            </div>
        </div>
      </a>
      <a href="#">
        <div className="ui-nav-list">
            <div className="list-left">
              <i className="list-icon-set"></i>
            </div>
            <div className="list-midle">
              <p>设置</p>
            </div>
            <div className="list-right">
              <i className="right-icon-arrow"></i>
            </div>
        </div>
      </a>
      <a href="#">
        <div className="ui-nav-list">
            <div className="list-left">
              <i className="list-icon-money"></i>
            </div>
            <div className="list-midle">
              <p>余额</p>
            </div>
            <div className="list-right">
              <i className="right-icon-arrow"></i>
            </div>
        </div>
      </a>
    </div>
  </div>
<Links />
</div>;
const Links = () =>
<footer className="ui-footer">
  <nav>
    <Link className="ft-home" activeClassName="active" to='/'>home</Link>
    <Link  className="ft-about" activeClassName="active" to='/about'>about</Link>
    <Link className="ft-shop" activeClassName="active" to='/shop'>shop</Link>
    <Link  className="ft-user" activeClassName="active" to='/user'>user</Link>
  </nav>
</footer>

class App extends React.Component{
    render(){
        return(
            <Router history={hashHistory}>
                <Route path="/" component={Index} />
                <Route path="/about" component={About} />
                <Route path="/shop" component={shop} />
                <Route path="/user" component={user} />
            </Router>
        )
    }
}

export default App;
