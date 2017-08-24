/**
 * Created by jason on 2017/7/22.
 */
import {CanActivate} from "@angular/router";

export class LoginGuard implements CanActivate {

  canActivate(){
    let loggedIn: boolean = Math.random() < 0.5;
    if(!loggedIn) {
      console.log("用户未登录");
    }
    return loggedIn;
  }
}
//根据有没有小于0.5；来判断用户有没有登录
//路由守卫写好之后要修改路由配置，把它加到产品信息的路由上
