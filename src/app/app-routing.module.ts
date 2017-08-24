import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { ProductComponent} from "./product/product.component";
import { Code404Component } from "./code404/code404.component";
import { ProductDescComponent } from "./product-desc/product-desc.component";
import { SellerInfoComponent } from "./seller-info/seller-info.component";
import {ChatComponent} from "./chat/chat.component";
import {LoginGuard} from "./guard/login.guard";
import {UnsavedGuard} from "./guard/unsaved.guard";
import {ProductResolve} from "./guard/product.resolve";
import {SearchComponent} from "./home/search/search.component";

const routes: Routes = [
  {path: '',redirectTo :'/home',pathMatch:'full'},
  //当访问空字符串这个路径时，重定向到/home这个路径
  {path:'home',component : HomeComponent,children:[
    {path:'',component:SearchComponent}
  ]},
  //{path:'product', component: ProductComponent},
  //第一种查询参数
  {path:'product/:id',component: ProductComponent,children:[
    {path:'',component:ProductDescComponent},
    {path:'seller/:id',component:SellerInfoComponent}
  ],
    // canActivate: [LoginGuard],
    // canDeactivate: [UnsavedGuard]
    resolve: {
    product:ProductResolve
    }
  },
  //canActivate可以接收数组，意味着可以加多个路由守卫，当应用进入此路由时，所有守卫会被依次调用，如果一个返回false，就被拒绝
  //children子组件
  //当访问product组件时，显示product组件模板，route-outerlet插座显示productdesc组件的模板
  //当访问sellerinfo组件时，显示product组件的模板，route-outlet插座显示sellerinfo组件的模板
  {path:'chat',component:ChatComponent,outlet:'aux'},
  //第二种在路由路径中传递数据，需要一、修改路由配置中的path属性，使他可以携带参数   二、修改路由链接的参数来传递数据  三、
  {path:'**',component: Code404Component}
];
//路由匹配的原则是先匹配优先，所以最通用的应该放在最后面

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginGuard,UnsavedGuard,ProductResolve]
  //然后有提供器实例化一个loginguard
})
export class AppRoutingModule { }
