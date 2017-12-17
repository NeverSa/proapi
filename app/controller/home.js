
'use strict';
const sign={
  AccessKeyId:"aefdc4ee-704d39cb-953c661b-91248",
  SignatureMethod:"HmacSHA256",
  SignatureVersion:2,
  Timestamp:"2017-05-11T16:22:06",
  baseUrl:"https://api.huobi.pro"
}
const prames={
  "order-id":"1234567890"
}

const Controller = require('egg').Controller;
class HomeController extends Controller {
  async index() {
    const ctx = this.ctx;
    const Option={
      headers: {
        'content-type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36',
      },  
    }
    let usrstr=this.ctx.request.method+"\n"+sign.baseUrl+"\n"+this.ctx.req.url+"\n"
    // console.log(this.ctx.req)
    console.log(encodeURI(usrstr))
    let result = await ctx.curl('https://api.huobi.pro/v1/common/currencys',Option);
    let json=new Buffer(result.data).toString()
     ctx.body =json;
  }
}

module.exports = HomeController;
