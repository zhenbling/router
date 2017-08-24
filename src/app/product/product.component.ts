import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private productId:number;
  //定义productId来接收id
  private productName:string;
  constructor(private routeInfo:ActivatedRoute) {

  }

  ngOnInit() {


    //this.productId = this.routeInfo.snapshot.queryParams["id"]
  //第一种查询参数，获取参数的值并赋值给productId
  //  this.productId = this.routeInfo.snapshot.params["id"]
    //第二种从url中获取参数
    //snapshot参数快照。当从home组件进入product组件时，product组件被创建，constructor（）被调用，ngOnInit（）方法被调用一次
    //但是从product组件路由到product组件时，由于已经被创建，，不会被再次创建，OnInit里面的值保留第一次被创建的值，解决办法参数订阅
    // this.routeInfo.params.subscribe((params: Params)=>this.productId=params["id"]);
    //参数订阅
    this.routeInfo.data.subscribe((data: {product:Product})=>{
      this.productId=data.product.id;
      this.productName=data.product.name;
    })
  }



}
export class Product{
  constructor(public id:number,public name:string){}

}
