// 定义初始状态
const state = {
  pageIndex: 0,
  pageArray: [
    {headerTitle: "此处留白", routename: "home"},
    {headerTitle: "片刻留白", routename: "daily"},
    {headerTitle: "回音留白", routename: "vocality"},
    {headerTitle: "字符留白", routename: "essay"},
    {headerTitle: "半步留白", routename: "travels"}
  ],
  isSlideBarShow: false,
  isDetailHeader: false,
  detailHeaderNickName:'',
  avatar:'http://p1.wmpic.me/article/2017/03/06/1488780213_usvFXYIl.jpg',
  nickname:'李留白',
  isfollow: false ,   //mockx下临时模拟的数据，正常情况下没有该字段
  followcount:101   //mockx下临时模拟的数据，正常情况下没有该字段
}

export default state
