/**
 * Created by jason on 2017/7/22.
 */

import {ActivatedRoute, CanDeactivate} from "@angular/router";

import {ProductComponent} from "../product/product.component";
export class UnsavedGuard implements CanDeactivate<ProductComponent>{
  //candeactivate的泛型意思是指定要保护的组件的类型
  canDeactivate(component: ProductComponent){
    return window.confirm("你还没有保存，确定要离开吗");
  }
//返回true，离开当前页，进入下个路由，返回false，留在当前路由


}
