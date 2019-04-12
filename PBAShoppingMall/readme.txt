首页：index.html   index.css 
注册：reg.html   reg.css
登录：login.html   login.css
商品列表：goodslist.html   goodslist.css
详情页：detailspage.html   detailspage.css
购物车：shopCar.html   shopCar.css
scss文件夹：三个scss文件：实现的是登录，注册，商品详情页的css样式
json文件夹：star.json是页面上十条商品数据，点击商品跳转到相应详情页加载相应数据，
            star1.json是二维数组，首页导航鼠标滑过对应的li显示对应数据。
libs文件夹：加载的外部js文件
            iquery.rotation1.0.0.js：轮播图插件
module文件夹：相应功能的封装：
              detailpageshow.js：商品详情页的功能封装
              godetail.js：详情页跳转功能
              shopCar.js：购物车功能
              ss.js：导航的数据渲染
              star-data.js：商品数据的加载
js文件夹：功能的模块化封装

使用：点击注册跳转到注册界面，注册完成跳转到登录界面，在搜索框输入关键字可实现关键字搜索(我只做了首页的)，
            鼠标滑过导航栏，可以看到隐藏的二级导航栏，点击二级导航跳转到商品列表页面，点击列表中任意商品跳转到商品详情页，
            点击加入购物车可以将商品加入购物车，点击购物车跳转到购物车界面，购物车界面可以看到对应的商品数量和价格，
             点击全部选中，可以选择您购物车内的全部商品，    
            点击购物车列表右上角的继续购物跳转到首页，点击首页的商品跳转到相应详情页，后面加入购物车步骤同上。
            注册，登录，购物车都在页面右上角