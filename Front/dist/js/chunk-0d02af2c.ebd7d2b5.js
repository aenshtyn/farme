(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0d02af2c"],{"0cfd":function(e,t,n){},4481:function(e,t,n){"use strict";var c=n("d4ec"),o=n("bee2"),r=n("bc3a"),a=n.n(r);a.a.defaults.headers.common={"X-Requested-With":"XMLHttpRequest","X-CSRF-TOKEN":window.csrf_token};var u="http://localhost:4000/api/",i=function(){function e(){Object(c["a"])(this,e)}return Object(o["a"])(e,[{key:"getAll",value:function(){return a.a.get(u+"cows")}},{key:"get",value:function(e){return a.a.get(u+"cows/".concat(e))}},{key:"create",value:function(e){return a.a.post(u+"cows",e)}},{key:"update",value:function(e,t){return a.a.put(u+"cows/".concat(e),t)}},{key:"delete",value:function(e){return a.a.delete(u+"cows/".concat(e))}},{key:"deleteAll",value:function(){return a.a.delete(u+"cows")}},{key:"findByTitle",value:function(e){return a.a.get(u+"cows?title=".concat(e))}}]),e}();t["a"]=new i},"9f52":function(e,t,n){"use strict";n.r(t);n("b0c0");var c=n("7a23"),o={class:"submit-form"},r={key:0},a={class:"form-group"},u=Object(c["g"])("label",{for:"name"},"Name",-1),i={class:"form-group"},l=Object(c["g"])("label",{for:"breed"},"Breed",-1),s={class:"form-group"},d=Object(c["g"])("label",{for:"age"},"Date of Birth",-1),b={class:"form-group"},f=Object(c["g"])("label",{for:"owner"},"owner",-1),w={key:1},m=Object(c["g"])("h4",null,"You submitted successfully!",-1);function g(e,t,n,g,p,O){return Object(c["x"])(),Object(c["f"])("div",o,[e.submitted?(Object(c["x"])(),Object(c["f"])("div",w,[m,Object(c["g"])("button",{class:"btn btn-success",onClick:t[5]||(t[5]=function(){return O.newCow&&O.newCow.apply(O,arguments)})},"Add")])):(Object(c["x"])(),Object(c["f"])("div",r,[Object(c["g"])("div",a,[u,Object(c["P"])(Object(c["g"])("input",{type:"text",class:"form-control",id:"name",required:"","onUpdate:modelValue":t[0]||(t[0]=function(e){return p.cow.name=e}),name:"name"},null,512),[[c["J"],p.cow.name]])]),Object(c["g"])("div",i,[l,Object(c["P"])(Object(c["g"])("input",{class:"form-control",id:"breed",required:"","onUpdate:modelValue":t[1]||(t[1]=function(e){return p.cow.breed=e}),name:"breed"},null,512),[[c["J"],p.cow.breed]])]),Object(c["g"])("div",s,[d,Object(c["P"])(Object(c["g"])("input",{type:"date",class:"form-control",id:"age",required:"","onUpdate:modelValue":t[2]||(t[2]=function(e){return p.cow.dob=e}),name:"age"},null,512),[[c["J"],p.cow.dob]]),Object(c["g"])("div",b,[f,Object(c["P"])(Object(c["g"])("input",{class:"form-control",id:"owner",required:"","onUpdate:modelValue":t[3]||(t[3]=function(e){return p.cow.owner=e}),name:"owner"},null,512),[[c["J"],p.cow.owner]])])]),Object(c["g"])("button",{onClick:t[4]||(t[4]=function(){return O.saveCow&&O.saveCow.apply(O,arguments)}),class:"btn btn-success"},"Submit")]))])}var p=n("4481"),O={name:"add-cow",data:function(){return{cow:{id:null,name:"",breed:"",dob:"",owner:""}}},methods:{saveCow:function(){var e=this,t={name:this.cow.name,breed:this.cow.breed,dob:this.cow.dob,owner:this.cow.owner};p["a"].create(t).then((function(t){e.cow.id=t.data.id,console.log(t.data)})).catch((function(e){console.log(e)}))},newCow:function(){this.cow={}}}},j=(n("a4c4"),n("6b0d")),v=n.n(j);const h=v()(O,[["render",g]]);t["default"]=h},a4c4:function(e,t,n){"use strict";n("0cfd")},b0c0:function(e,t,n){var c=n("83ab"),o=n("5e77").EXISTS,r=n("e330"),a=n("9bf2").f,u=Function.prototype,i=r(u.toString),l=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,s=r(l.exec),d="name";c&&!o&&a(u,d,{configurable:!0,get:function(){try{return s(l,i(this))[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=chunk-0d02af2c.ebd7d2b5.js.map