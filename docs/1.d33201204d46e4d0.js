"use strict";(self.webpackChunkfreshcart=self.webpackChunkfreshcart||[]).push([[1],{4001:(Y,p,s)=>{s.r(p),s.d(p,{HomeComponent:()=>w});var r=s(6814),d=s(8129),m=s(756),g=s(1120),t=s(4769);let u=(()=>{class o{transform(e,n){return e.filter(i=>i.title.toLocaleLowerCase().includes(n.toLocaleLowerCase()))}static#t=this.\u0275fac=function(n){return new(n||o)};static#e=this.\u0275pipe=t.Yjl({name:"search",type:o,pure:!0,standalone:!0})}return o})();var l=s(95),h=s(0),f=s(6286),x=s(2425);function _(o,a){1&o&&t._UZ(0,"img",11)}function v(o,a){1&o&&t._UZ(0,"img",12)}function C(o,a){1&o&&t._UZ(0,"img",13)}function Z(o,a){if(1&o&&(t._UZ(0,"img",16),t.TgZ(1,"h3",17),t._uU(2),t.qZA()),2&o){const e=t.oxw().$implicit;t.Q6J("src",e.image,t.LSH)("alt",e.name)("title",e.name),t.xp6(2),t.hij(" ",e.name," ")}}function T(o,a){1&o&&(t.ynx(0),t.YNc(1,Z,3,4,"ng-template",5),t.BQk())}function y(o,a){if(1&o&&(t.TgZ(0,"section",1)(1,"h2",14),t._uU(2,"Popular catgories"),t.qZA(),t.TgZ(3,"owl-carousel-o",4),t.YNc(4,T,2,0,"ng-container",15),t.qZA()()),2&o){const e=t.oxw();t.xp6(3),t.Q6J("options",e.categoryOptions),t.xp6(1),t.Q6J("ngForOf",e.catgories)}}const b=function(o){return["/productdetailes",o]};function O(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"div",26)(1,"div",27)(2,"header",28),t._UZ(3,"img",29),t.TgZ(4,"h3",30),t._uU(5),t.ALo(6,"cuttext"),t.qZA(),t.TgZ(7,"h4",31),t._uU(8),t.qZA(),t.TgZ(9,"div",32)(10,"span"),t._uU(11),t.ALo(12,"currency"),t.qZA(),t.TgZ(13,"span",33),t._UZ(14,"i",34),t._uU(15),t.qZA()()(),t.TgZ(16,"footer",35)(17,"button",36,37),t.NdJ("click",function(){const c=t.CHM(e).$implicit,M=t.MAs(18),S=t.oxw(2);return t.KtG(S.addProduct(c._id,M))}),t._uU(19,"+Add To Cart"),t.qZA()()()()}if(2&o){const e=a.$implicit;t.xp6(2),t.Q6J("routerLink",t.VKq(14,b,e._id)),t.xp6(1),t.Q6J("src",e.imageCover,t.LSH)("title",e.title)("alt",e.title),t.xp6(2),t.Oqu(t.xi3(6,8,e.title,3)),t.xp6(3),t.Oqu(e.category.name),t.xp6(3),t.Oqu(t.xi3(12,11,e.price,"E\u20ac")),t.xp6(4),t.hij(" ",e.ratingsAverage," ")}}function A(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"section",18)(1,"h2",19),t._uU(2,"Popular product"),t.qZA(),t.TgZ(3,"div",20)(4,"input",21),t.NdJ("ngModelChange",function(i){t.CHM(e);const c=t.oxw();return t.KtG(c.term=i)}),t.qZA(),t.TgZ(5,"p",22),t._UZ(6,"i",23),t.qZA()(),t.TgZ(7,"div",24),t.YNc(8,O,20,16,"div",25),t.ALo(9,"slice"),t.ALo(10,"search"),t.qZA()()}if(2&o){const e=t.oxw();t.xp6(4),t.Q6J("ngModel",e.term),t.xp6(4),t.Q6J("ngForOf",t.Dn7(9,2,t.xi3(10,6,e.products,e.term),0,24))}}let w=(()=>{class o{constructor(e,n,i,c){this._ProductService=e,this._CartService=n,this._ToastrService=i,this._Renderer2=c,this.products=[],this.catgories=[],this.term="",this.categoryOptions={loop:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!1,dots:!1,autoplay:!0,autoplayTimeout:6e3,autoplaySpeed:1e3,navSpeed:700,navText:["",""],responsive:{0:{items:2},400:{items:3},740:{items:4},940:{items:6}},nav:!0},this.mainSlideOptions={loop:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!1,dots:!1,autoplay:!0,autoplayTimeout:4e3,autoplaySpeed:1e3,navSpeed:700,navText:["",""],items:1,nav:!0}}ngOnInit(){this._ProductService.getProducts().subscribe({next:e=>{console.log("products",e.data),this.products=e.data}}),this._ProductService.getCategories().subscribe({next:e=>{console.log("categories",e),this.catgories=e.data}})}addProduct(e,n){this._Renderer2.setAttribute(n,"disabled","true"),this._CartService.addCart(e).subscribe({next:i=>{console.log(i),this._ToastrService.success(i.message),this._Renderer2.removeAttribute(n,"disabled"),this._CartService.cartNumber.next(i.numOfCartItems)},error:i=>{this._Renderer2.removeAttribute(n,"disabled")}})}static#t=this.\u0275fac=function(n){return new(n||o)(t.Y36(h.M),t.Y36(f.N),t.Y36(x._W),t.Y36(t.Qsj))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-home"]],standalone:!0,features:[t.jDz],decls:13,vars:3,consts:[[1,"main-section"],[1,"py-3"],[1,"row","g-0"],[1,"col-md-9"],[3,"options"],["carouselSlide",""],[1,"col-md-3"],["height","200","src","./assets/images/slide-1.jpeg","alt","Slide1",1,"w-100"],["height","200","src","./assets/images/slide-2.jpeg","alt","Slide2",1,"w-100"],["class","py-3",4,"ngIf"],["class","py-4",4,"ngIf"],["height","400","src","./assets/images/main-slider-1.jpeg","alt","Slide1"],["height","400","src","./assets/images/main-slider-2.jpeg","alt","Slide2"],["height","400","src","./assets/images/main-slider-3.jpeg","alt","Slide3"],[1,"fw-bold","mx-auto","fs-1","text-center","header","position-relative","d-flex","justify-content-center","align-items-end","mb-4"],[4,"ngFor","ngForOf"],["height","300",3,"src","alt","title"],[1,"h5","text-main"],[1,"py-4"],[1,"fw-bold","mx-auto","fs-1","text-center","header","position-relative","d-flex","justify-content-center","align-items-end"],[1,"position-relative"],["type","text","placeholder","search...",1,"form-control","mb-3","w-50","rounded","shadow","mx-auto","p-2","form-control-sm","my-3",3,"ngModel","ngModelChange"],[1,"position-absolute"],["aria-hidden","true",1,"fa","fa-search"],[1,"row","g-4","mt-3"],["class","col-sm-6 col-md-4 col-lg-3 col-xl-2",4,"ngFor","ngForOf"],[1,"col-sm-6","col-md-4","col-lg-3","col-xl-2"],[1,"prodect","h-100"],["role","button",3,"routerLink"],[1,"w-100",3,"src","title","alt"],[1,"small"],[1,"small","text-main"],[1,"d-flex","align-items-center","justify-content-between"],[1,"text-muted","small","mb-0"],[1,"fas","fa-star","rating-color"],[1,"d-flex","align-items-center","justify-content-center"],[1,"main-btn","text-center","w-100","py-2",3,"click"],["btnAdd",""]],template:function(n,i){1&n&&(t.TgZ(0,"section",0)(1,"section",1)(2,"div",2)(3,"div",3)(4,"owl-carousel-o",4),t.YNc(5,_,1,0,"ng-template",5),t.YNc(6,v,1,0,"ng-template",5),t.YNc(7,C,1,0,"ng-template",5),t.qZA()(),t.TgZ(8,"div",6),t._UZ(9,"img",7)(10,"img",8),t.qZA()()(),t.YNc(11,y,5,2,"section",9),t.YNc(12,A,11,9,"section",10),t.qZA()),2&n&&(t.xp6(4),t.Q6J("options",i.mainSlideOptions),t.xp6(7),t.Q6J("ngIf",i.catgories.length>0),t.xp6(1),t.Q6J("ngIf",i.products.length>0))},dependencies:[r.ez,r.sg,r.O5,r.OU,r.H9,d.r,m.bB,m.Fy,m.Mp,g.rH,u,l.u5,l.Fj,l.JJ,l.On],styles:[".prodect[_ngcontent-%COMP%]{overflow:hidden}.prodect[_ngcontent-%COMP%]   .main-btn[_ngcontent-%COMP%]{transform:translateY(150%);-webkit-transform:translateY(150%);-moz-transform:translateY(150%);-ms-transform:translateY(150%);-o-transform:translateY(150%);transition:.7s;opacity:0;-webkit-transition:.7s;-moz-transition:.7s;-ms-transition:.7s;-o-transition:.7s}.prodect[_ngcontent-%COMP%]:hover   .main-btn[_ngcontent-%COMP%]{transform:translateY(0);opacity:1;-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}.position-absolute[_ngcontent-%COMP%]{top:6px;right:330px}.position-absolute[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#0ed50e}@media (min-width: 1200px){.position-absolute[_ngcontent-%COMP%]{right:330px}}@media (max-width: 1200px){.position-absolute[_ngcontent-%COMP%]{right:230px}}@media (max-width: 992px){.position-absolute[_ngcontent-%COMP%]{right:200px}}@media (max-width: 778px){.position-absolute[_ngcontent-%COMP%]{right:140px}}@media (max-width: 600px){.position-absolute[_ngcontent-%COMP%]{right:100px}}"]})}return o})()}}]);