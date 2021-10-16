(this["webpackJsonpburger-app"]=this["webpackJsonpburger-app"]||[]).push([[0],[,function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"n",(function(){return a})),n.d(t,"p",(function(){return o})),n.d(t,"f",(function(){return i})),n.d(t,"k",(function(){return c})),n.d(t,"l",(function(){return u})),n.d(t,"j",(function(){return l})),n.d(t,"m",(function(){return s})),n.d(t,"h",(function(){return d})),n.d(t,"i",(function(){return p})),n.d(t,"g",(function(){return f})),n.d(t,"d",(function(){return h})),n.d(t,"e",(function(){return m})),n.d(t,"b",(function(){return g})),n.d(t,"c",(function(){return b})),n.d(t,"o",(function(){return v}));var r="ADD_INGREDIENT",a="REMOVE_INGREDIENT",o="SET_INGREDIENTS",i="FETCH_INGREDIENTS_FAILED",c="PURCHASE_BURGER_START",u="PURCHASE_BURGER_SUCCESS",l="PURCHASE_BURGER_FAIL",s="PURCHASE_INIT",d="FETCH_ORDERS_START",p="FETCH_ORDERS_SUCCESS",f="FETCH_ORDERS_FAIL",h="AUTH_START",m="AUTH_SUCCESS",g="AUTH_FAIL",b="AUTH_LOGOUT",v="SET_AUTH_REDIRECT_PATH"},,function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var r=n(18);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var o=function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(n,!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{},t)},i=function(e,t){var n=!0;if(!t)return!0;if(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),t.isEmail){n=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&n}if(t.isNumeric){n=/^\d+$/.test(e)&&n}return n}},,,,,,,,function(e,t,n){"use strict";t.a=function(e){return e.children}},,,,,function(e,t,n){"use strict";var r=n(1),a=n(22),o=function(e){return{type:r.a,ingredientName:e}},i=function(e){return{type:r.n,ingredientName:e}},c=function(){return function(e){a.a.get("https://react-my-burger-2c7eb.firebaseio.com/ingredients.json").then((function(t){var n;e((n=t.data,{type:r.p,ingredients:n}))})).catch((function(t){e({type:r.f})}))}},u=n(18);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(n,!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d=function(e,t){return function(n){n({type:r.k}),a.a.post("/orders.json?auth="+t,e).then((function(t){console.log(t.data),n(function(e,t){return{type:r.l,orderId:e,orderData:t}}(t.data.name,e))})).catch((function(e){n(function(e){return{type:r.j,error:e}}(e))}))}},p=function(){return{type:r.m}},f=function(e,t){return function(n){n({type:r.h});var o="?auth="+e+'&orderBy="userId"&equalTo="'+t+'"';a.a.get("/orders.json"+o).then((function(e){var t,a=[];for(var o in e.data)a.push(s({},e.data[o],{id:o}));n((t=a,{type:r.i,orders:t}))})).catch((function(e){var t;n((t=e,{type:r.g,error:t}))}))}},h=n(32),m=n.n(h),g=void 0,b=function(e,t){return{type:r.e,idToken:e,userId:t}},v=function(){return localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),localStorage.removeItem("userId"),{type:r.c}},O=function(e){return function(t){setTimeout((function(){t(g.logout())}),1e3*e)}},E=function(e,t,n){return function(a){a({type:r.d});var o={email:e,password:t,returnSecureToken:!0},i="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyACmBSN1k_Uhyn_789r5gmM0xd0dL2VdGE";n||(i="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyACmBSN1k_Uhyn_789r5gmM0xd0dL2VdGE"),m.a.post(i,o).then((function(e){console.log(e);var t=new Date((new Date).getTime()+1e3*e.data.expiresIn);localStorage.setItem("token",e.data.idToken),localStorage.setItem("expirationDate",t),localStorage.setItem("userId",e.data.localId),a(b(e.data.idToken,e.data.localId)),a(O(e.data.expiresIn))})).catch((function(e){var t;console.log(e),a((t=e.response.data.error,{type:r.e,error:t}))}))}},_=function(e){return{type:r.o,path:e}},y=function(){return function(e){var t=localStorage.getItem("token");if(t){var n=new Date(localStorage.getItem("expirationDate"));if(n<=new Date)e(v());else{var r=localStorage.getItem("userId");e(b(t,r)),e(O((n.getTime()-(new Date).getTime())/1e3))}}else e(v())}};n.d(t,"a",(function(){return o})),n.d(t,"i",(function(){return i})),n.d(t,"e",(function(){return c})),n.d(t,"g",(function(){return d})),n.d(t,"h",(function(){return p})),n.d(t,"d",(function(){return f})),n.d(t,"b",(function(){return E})),n.d(t,"f",(function(){return v})),n.d(t,"j",(function(){return _})),n.d(t,"c",(function(){return y}))},,,,function(e,t,n){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__2US69",BreadTop:"BurgerIngredient_BreadTop__3Y4-R",Seeds1:"BurgerIngredient_Seeds1__J6vUJ",Seeds2:"BurgerIngredient_Seeds2__2Ylex",Meat:"BurgerIngredient_Meat__3flwI",Cheese:"BurgerIngredient_Cheese__3rOTJ",Salad:"BurgerIngredient_Salad__KLnhy",Bacon:"BurgerIngredient_Bacon__1KK6n"}},,function(e,t,n){"use strict";var r=n(32),a=n.n(r).a.create({baseURL:"https://react-my-burger-2c7eb.firebaseio.com/"});t.a=a},,,function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__3kXLK",Open:"SideDrawer_Open__1tCv1",Close:"SideDrawer_Close__9j7x-",Logo:"SideDrawer_Logo__3voUv"}},,function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__O8649",Label:"BuildControl_Label__TQkTk",Less:"BuildControl_Less__3Ttg8",More:"BuildControl_More__1MY7B"}},,,function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(63),i=n.n(o);t.a=function(e){return e.show?a.a.createElement("div",{className:i.a.Backdrop,onClick:e.clicked}):null}},function(e,t,n){"use strict";var r=n(4),a=n(5),o=n(7),i=n(6),c=n(8),u=n(0),l=n.n(u),s=n(65),d=n.n(s),p=n(11),f=n(30),h=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(a.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"componentWillUpdate",value:function(){console.log("[Modal] WillUpdate")}},{key:"render",value:function(){return l.a.createElement(p.a,null,l.a.createElement(f.a,{show:this.props.show,clicked:this.props.modalClosed}),l.a.createElement("div",{className:d.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),t}(u.Component);t.a=h},,function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__ApScI",Logo:"Toolbar_Logo__3Lk47",DesktopOnly:"Toolbar_DesktopOnly__LuPaL"}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(41),i=n.n(o);t.a=function(e){return a.a.createElement("button",{disabled:e.disabled,className:[i.a.Button,i.a[e.btnType]].join(" "),onClick:e.clicked},e.children)}},,,function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__2SpXc",active:"NavigationItem_active__2v2td"}},,,function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__1YmbS",OrderButton:"BuildControls_OrderButton___M-Du",enable:"BuildControls_enable__9xLsD"}},function(e,t,n){e.exports={Button:"Button_Button__3gFiX",Success:"Button_Success__2Rka1",Danger:"Button_Danger__2ogZq"}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(66),i=n.n(o);t.a=function(){return a.a.createElement("div",{className:i.a.Loader},"Loading...")}},function(e,t,n){"use strict";var r=n(4),a=n(5),o=n(7),i=n(6),c=n(8),u=n(0),l=n.n(u),s=n(31),d=n(11);t.a=function(e,t){return function(n){function u(){var e,t;Object(r.a)(this,u);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(i.a)(u)).call.apply(e,[this].concat(a)))).state={error:null},t.errorConfirmedHandler=function(){t.setState({error:null})},t}return Object(c.a)(u,n),Object(a.a)(u,[{key:"componentWillMount",value:function(){var e=this;this.reqInterceptor=t.interceptors.request.use((function(t){return e.setState({error:null}),t})),this.resInterceptor=t.interceptors.response.use((function(e){return e}),(function(t){e.setState({error:t})}))}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement(s.a,{show:this.state.error,modalClosed:this.errorConfirmedHandler},this.state.error?this.state.error.message:null),l.a.createElement(e,this.props))}}]),u}(u.Component)}},,,,,,,,,,,function(e,t,n){"use strict";var r=n(67),a=n(0),o=n.n(a),i=n(64),c=n.n(i),u=n(4),l=n(5),s=n(7),d=n(6),p=n(8),f=n(20),h=n.n(f),m=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=o.a.createElement("div",{className:h.a.BreadBottom});break;case"bread-top":e=o.a.createElement("div",{className:h.a.BreadTop},o.a.createElement("div",{className:h.a.Seeds1}),o.a.createElement("div",{className:h.a.Seeds2}));break;case"meat":e=o.a.createElement("div",{className:h.a.Meat});break;case"cheese":e=o.a.createElement("div",{className:h.a.Cheese});break;case"bacon":e=o.a.createElement("div",{className:h.a.Bacon});break;case"salad":e=o.a.createElement("div",{className:h.a.Salad});break;default:e=null}return e}}]),t}(a.Component);t.a=function(e){console.log(e);var t=Object.keys(e.ingredients).map((function(t){return Object(r.a)(Array(e.ingredients[t])).map((function(e,n){return o.a.createElement(m,{key:t+n,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=o.a.createElement("p",null,"Please start adding ingredients!")),o.a.createElement("div",{className:c.a.Burger},o.a.createElement(m,{type:"bread-top"}),t,o.a.createElement(m,{type:"bread-bottom"}))}},,,function(e,t,n){e.exports={Content:"Layout_Content__3H3X8"}},function(e,t,n){e.exports=n.p+"static/media/burger-logo.b8503d26.png"},function(e,t,n){e.exports={Logo:"Logo_Logo__1N0xH"}},function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__1fnFX"}},,function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__m405X"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__3j6VK"}},function(e,t,n){e.exports={Burger:"Burger_Burger__10T8F"}},function(e,t,n){e.exports={Modal:"Modal_Modal__1-5dN"}},function(e,t,n){e.exports={Loader:"Spinner_Loader__1twK-",load2:"Spinner_load2__2gkgc"}},,function(e,t,n){e.exports=n(96)},,,,,,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(28),i=n.n(o),c=n(24),u=n(15),l=n(23),s=n(56),d=(n(77),n(4)),p=n(5),f=n(7),h=n(6),m=n(8),g=n(21),b=function(e){return function(t){function n(){var e,t;Object(d.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(f.a)(this,(e=Object(h.a)(n)).call.apply(e,[this].concat(a)))).state={component:null},t}return Object(m.a)(n,t),Object(p.a)(n,[{key:"componentDidMount",value:function(){var t=this;e().then((function(e){t.setState({component:e.default})}))}},{key:"render",value:function(){var e=this.state.component;return e?a.a.createElement(e,this.props):null}}]),n}(r.Component)},v=n(11),O=n(57),E=n.n(O),_=n(33),y=n.n(_),j=n(58),k=n.n(j),w=n(59),S=n.n(w),C=function(e){return a.a.createElement("div",{className:S.a.Logo,style:{height:e.height}},a.a.createElement("img",{src:k.a,alt:"MyBurger"}))},I=n(60),D=n.n(I),N=n(37),B=n.n(N),T=function(e){return a.a.createElement("li",{className:B.a.NavigationItem},a.a.createElement(c.b,{to:e.link,exact:e.exact,activeClassName:B.a.active},e.children))},A=function(e){return a.a.createElement("ul",{className:D.a.NavigationItems},a.a.createElement(T,{link:"/",exact:!0},"Burger Builder"),e.isAuthenticated?a.a.createElement(T,{link:"/orders"},"Orders"):null,e.isAuthenticated?a.a.createElement(T,{link:"/logout"},"Logout"):a.a.createElement(T,{link:"/auth"},"Authenticate"))},P=n(62),L=n.n(P),R=function(e){return a.a.createElement("div",{className:L.a.DrawerToggle,onClick:e.clicked},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null))},x=function(e){return a.a.createElement("header",{className:y.a.Toolbar},a.a.createElement(R,{clicked:e.drawerToggleClicked}),a.a.createElement("div",{className:y.a.Logo},a.a.createElement(C,null)),a.a.createElement("nav",{className:y.a.DesktopOnly},a.a.createElement(A,{isAuthenticated:e.isAuth})))},U=n(25),H=n.n(U),M=n(30),F=function(e){var t=[H.a.SideDrawer,H.a.Close];return e.open&&(t=[H.a.SideDrawer,H.a.Open]),a.a.createElement(v.a,null,a.a.createElement(M.a,{show:e.open,clicked:e.closed}),a.a.createElement("div",{className:t.join(" "),onClick:e.closed},a.a.createElement("div",{className:H.a.Logo},a.a.createElement(C,null)),a.a.createElement("nav",null,a.a.createElement(A,{isAuthenticated:e.isAuth}))))},W=function(e){function t(){var e,n;Object(d.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(f.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).state={showSideDrawer:!1},n.sideDrawerClosedHandler=function(){n.setState({showSideDrawer:!1})},n.sideDrawerToggleHandler=function(){n.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},n}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return a.a.createElement(v.a,null,a.a.createElement(x,{isAuth:this.props.isAuthenticated,drawerToggleClicked:this.sideDrawerToggleHandler}),a.a.createElement(F,{isAuth:this.props.isAuthenticated,open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),a.a.createElement("main",{className:E.a.Content},this.props.children))}}]),t}(r.Component),z=Object(u.b)((function(e){return{isAuthenticated:null!==e.auth.token}}))(W),G=n(18),q=n(54),Y=n(40),K=n.n(Y),X=n(27),J=n.n(X),V=function(e){return a.a.createElement("div",{className:J.a.BuildControl},a.a.createElement("div",{className:J.a.Label},e.label),a.a.createElement("button",{className:J.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),a.a.createElement("button",{className:J.a.More,onClick:e.added},"More"))},$=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],Q=function(e){return a.a.createElement("div",{className:K.a.BuildControls},a.a.createElement("p",null,"Current Price: ",a.a.createElement("strong",null,e.price.toFixed(2))),$.map((function(t){return a.a.createElement(V,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})})),a.a.createElement("button",{className:K.a.OrderButton,disabled:!e.purchasable,onClick:e.ordered},e.isAuth?"ORDER NOW":"SIGN UP TO ORDER"))},Z=n(31),ee=n(34),te=function(e){function t(){return Object(d.a)(this,t),Object(f.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"componentWillUpdate",value:function(){console.log("[OrderSummary] WillUpdate")}},{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map((function(t){return a.a.createElement("li",{key:t},a.a.createElement("span",{style:{textTransform:"capitalize"}},t),": ",e.props.ingredients[t])}));return a.a.createElement(v.a,null,a.a.createElement("h3",null,"Your Order"),a.a.createElement("p",null,"A delicious burger with the following ingredients:"),a.a.createElement("ul",null,t),a.a.createElement("p",null,a.a.createElement("strong",null,"Total Price: ",this.props.price.toFixed(2))),a.a.createElement("p",null,"Continue to Checkout?"),a.a.createElement(ee.a,{btnType:"Danger",clicked:this.props.purchaseCancelled},"CANCEL"),a.a.createElement(ee.a,{btnType:"Success",clicked:this.props.purchaseContinued},"CONTINUE"))}}]),t}(r.Component),ne=n(42),re=n(43),ae=n(16),oe=n(22);function ie(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var ce=function(e){function t(){var e,n;Object(d.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(f.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).state={purchasing:!1},n.purchaseHandler=function(){n.props.isAuthenticated?n.setState({purchasing:!0}):(n.props.onSetAuthRedirectPath("/checkout"),n.props.history.push("/auth"))},n.purchaseCancelHandler=function(){n.setState({purchasing:!1})},n.purchaseContinueHandler=function(){n.props.onInitPurchase(),n.props.history.push("/checkout")},n}return Object(m.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){console.log(this.props),this.props.onInitIngredients()}},{key:"updatePurchaseState",value:function(e){return Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0)>0}},{key:"render",value:function(){var e=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ie(n,!0).forEach((function(t){Object(G.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ie(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},this.props.ings);for(var t in e)e[t]=e[t]<=0;var n=null,r=this.props.error?a.a.createElement("p",null,"Ingredients can't be loaded!"):a.a.createElement(ne.a,null);return this.props.ings&&(r=a.a.createElement(v.a,null,a.a.createElement(q.a,{ingredients:this.props.ings}),a.a.createElement(Q,{ingredientAdded:this.props.onIngredientAdded,ingredientRemoved:this.props.onIngredientRemoved,disabled:e,purchasable:this.updatePurchaseState(this.props.ings),isAuth:this.props.isAuthenticated,ordered:this.purchaseHandler,price:this.props.price})),n=a.a.createElement(te,{ingredients:this.props.ings,price:this.props.price,purchaseCancelled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinueHandler})),a.a.createElement(v.a,null,a.a.createElement(Z.a,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},n),r)}}]),t}(r.Component),ue=Object(u.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,error:e.burgerBuilder.error,isAuthenticated:null!==e.auth.token}}),(function(e){return{onIngredientAdded:function(t){return e(ae.a(t))},onIngredientRemoved:function(t){return e(ae.i(t))},onInitIngredients:function(){return e(ae.e())},onInitPurchase:function(){return e(ae.h())},onSetAuthRedirectPath:function(t){return e(ae.j(t))}}}))(Object(re.a)(ce,oe.a)),le=function(e){function t(){return Object(d.a)(this,t),Object(f.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.onLogout(this.props.history)}},{key:"render",value:function(){return a.a.createElement(g.a,{to:"/"})}}]),t}(r.Component),se=Object(u.b)(null,(function(e){return{onLogout:function(){return e(ae.f())}}}))(le),de=b((function(){return n.e(3).then(n.bind(null,104))})),pe=b((function(){return n.e(5).then(n.bind(null,105))})),fe=b((function(){return n.e(4).then(n.bind(null,103))})),he=function(e){function t(){return Object(d.a)(this,t),Object(f.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignup()}},{key:"render",value:function(){var e=a.a.createElement(g.d,null,a.a.createElement(g.b,{path:"/auth",component:fe}),a.a.createElement(g.b,{path:"/",exact:!0,component:ue}),a.a.createElement(g.a,{to:"/"}));return this.props.isAuthenticated&&(e=a.a.createElement(g.d,null,a.a.createElement(g.b,{path:"/checkout",component:de}),a.a.createElement(g.b,{path:"/orders",component:pe}),a.a.createElement(g.b,{path:"/logout",component:se}),a.a.createElement(g.b,{path:"/auth",component:fe}),a.a.createElement(g.b,{path:"/",exact:!0,component:ue}),a.a.createElement(g.a,{to:"/"}))),a.a.createElement("div",null,a.a.createElement(z,null,e))}}]),t}(r.Component),me=Object(g.g)(Object(u.b)((function(e){return{isAuthenticated:null!==e.auth.token}}),(function(e){return{onTryAutoSignup:function(){return e(ae.c())}}}))(he)),ge=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function be(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var ve=n(1),Oe=n(3),Ee={ingredients:null,totalPrice:4,error:!1,building:!1},_e={salad:.5,cheese:.4,meat:1.3,bacon:.7},ye=function(e,t){var n=Object(G.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1),r={ingredients:Object(Oe.b)(e.ingredients,n),totalPrice:e.totalPrice+_e[t.ingredientName],building:!0};return Object(Oe.b)(e,r)},je=function(e,t){var n=Object(G.a)({},t.ingredientName,e.ingredients[t.ingredientName]-1),r={ingredients:Object(Oe.b)(e.ingredients,n),totalPrice:e.totalPrice-_e[t.ingredientName],building:!0};return Object(Oe.b)(e,r)},ke=function(e,t){return Object(Oe.b)(e,{ingredients:{salad:t.ingredients.salad,bacon:t.ingredients.bacon,cheese:t.ingredients.cheese,meat:t.ingredients.meat},totalPrice:4,error:!1,building:!1})},we=function(e,t){return Object(Oe.b)(e,{error:!0})},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ve.a:return ye(e,t);case ve.n:return je(e,t);case ve.p:return ke(e,t);case ve.f:return we(e);default:return e}},Ce={orders:[],loading:!1,purchased:!1},Ie=function(e,t){return Object(Oe.b)(e,{purchased:!1})},De=function(e,t){return Object(Oe.b)(e,{loading:!1})},Ne=function(e,t){var n=Object(Oe.b)(t.orderData,{id:t.orderId});return Object(Oe.b)(e,{loading:!1,purchased:!0,orders:e.orders.concat(n)})},Be=function(e,t){return Object(Oe.b)(e,{loading:!1})},Te=function(e,t){return Object(Oe.b)(e,{loading:!0})},Ae=function(e,t){return Object(Oe.b)(e,{orders:t.orders,loading:!1})},Pe=function(e,t){return Object(Oe.b)(e,{loading:!1})},Le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ve.m:return Ie(e);case ve.k:return De(e);case ve.l:return Ne(e,t);case ve.j:return Be(e);case ve.h:return Te(e);case ve.i:return Ae(e,t);case ve.g:return Pe(e);default:return e}},Re={token:null,userId:null,error:null,loading:!1,authRedirectPath:"/"},xe=function(e,t){return Object(Oe.b)(e,{error:null,loading:!0})},Ue=function(e,t){return Object(Oe.b)(e,{token:t.idToken,userId:t.userId,error:null,loading:!1})},He=function(e,t){return Object(Oe.b)(e,{token:null,userId:null})},Me=function(e,t){return Object(Oe.b)(e,{error:t.error,loading:!1})},Fe=function(e,t){return Object(Oe.b)(e,{authRedirectPath:t.path})},We=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ve.d:return xe(e);case ve.e:return Ue(e,t);case ve.b:return Me(e,t);case ve.c:return He(e);case ve.o:return Fe(e,t);default:return e}},ze=l.d,Ge=Object(l.c)({burgerBuilder:Se,order:Le,auth:We}),qe=Object(l.e)(Ge,ze(Object(l.a)(s.a))),Ye=a.a.createElement(u.a,{store:qe},a.a.createElement(c.a,null,a.a.createElement(me,null)));i.a.render(Ye,document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");ge?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):be(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):be(e)}))}}()}],[[68,1,2]]]);
//# sourceMappingURL=main.5cf7a7d6.chunk.js.map