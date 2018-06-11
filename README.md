## Folder Structure

After creation, your project should look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg



    1、npm install
2、npm start



/*
* 项目主要是为了理清react-redux流程，项目目录结构比较乱，但是不影响效果
*
*/
代码讲解：

  create-react-app构建项目
  index.js是项目入口，示例中主要使用Hello组件
  创建store，然后用provider包裹在最外层，然后传入store，这样在Hello中可以使用相应的内容
  创建store的过程，使用configureStore来生成store
  createStore方法是从redux中import的，第一个参数：reducer(reducer: 传入原始state+action生成最终state的方法),第二个：initialState,第三个参数是浏览器开发工具
  第一个参数的reducer可以是多个reducer通过combinneReducers生成
  Hello组件中正常用法是export default Hello，但是redux中是要export default connect方法
  connect方法中两个参数：mapStateToProps(state)   mapDispatchToProps(dispatch)
  mapStateToProps参数是通过state.userinfo获取生成store时传入的相应reducer，并且可以赋值到当前组件的props中
  mapDispatchToProps中dispatchdispatch参数是从父组件传入的store中获取
  mapDispatchToProps通过bindActionCreators来吧dispatch注入到相应的action方法，使得可以达到dispatch(action)效果
  在当前组件中显示A+B+C三种组件，其中A+B两个组件用来展示相关信息，C组件会触发相关信息变化
  A+B组件中传入的参数都是通过mapStateToProps来映射进来，C组件中参数是通过mapDispatchToProps映射进来
  三个组件展示的信息是通过componentDidMount方法在组件加载时调用action方法，然后触发相对应的reducer中的type进行相应的处理返回处理后的state，然后A、B组件中相应的信息就会展示在相应的位置
  C组件中显示触发login方法，达到更新数据的效果，function方法中，会存在this不指向当前组件的情况，这时，就要在调用处绑定this或者使用箭头函数代替普通function来声明

