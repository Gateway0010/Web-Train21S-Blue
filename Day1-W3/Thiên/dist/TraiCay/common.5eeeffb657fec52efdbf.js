(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"24Xu":function(t,i,e){"use strict";e.d(i,"a",(function(){return r}));class s{constructor(t,i){this.item=t,this.quanlity=i}get TotalPrice(){return this.item.price*this.quanlity}}var n=e("fXoL");let r=(()=>{class t{constructor(){this.items=[]}add(t){for(let i=0;i<this.items.length;i++)if(this.items[i].item.id==t.id)return void this.items[i].quanlity++;this.items.push(new s(t,1))}remove(t){for(let i=0;i<this.items.length;i++)if(this.items[i].item.id==t.id)return 0==this.items[i].quanlity?void(this.items=this.items.slice(i,0)):void this.items[i].quanlity--}clear(){this.items.length=this.items.length-1}clearAll(){this.items.length=0}get grandTotal(){let t=0;for(let i of this.items)t+=i.TotalPrice;return t}get cartitems(){return this.items}getQuantityByItem(t){let i=this.items.find(i=>i.item.id==t.id);return null==i?0:i.quanlity}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=n.Ab({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);