var h = UI.registerHelper;
h("sx",function(){return Session.get("s").x});
h("sy",function(){return Session.get("s").y});
h("lin",function(x,a,b,c,d){return b+(x-a)*(d-b)/(c-a)})
function s(){Session.set("s",{x:scrollX/innerWidth, y:scrollY/innerHeight})}s();
addEventListener("scroll",s)