var h = UI.registerHelper, no = false, ja = true, on="addEventListener",
    pd = "preventDefault",M=Math,C=M.cos,S=M.sin,π=M.PI,R=M.sqrt,AC=M.acos,
    deg = π/180, AS=M.asin, Σ=Session, F=M.floor
h("sx",function(){return Σ.get("s").x}); // rotating
h("sy",function(){return Σ.get("s").y});
h("lin",function(x,a,b,c,d){return b+(x-a)*(d-b)/(c-a)})
function s(){Σ.set("s",{x:scrollX/innerWidth,
                              y:scrollY/innerHeight})}s();
addEventListener("scroll",s)

var drag, dragged; // mouse dragging
document[on]("mousedown", function(e){drag=e;dragged=no})
document[on]("mousemove", function(e){if(drag){
 window.scrollTo(scrollX-e.clientX+drag.clientX, scrollY-e.clientY+drag.clientY)
 drag = e; dragged = ja; e[pd]()}})
document[on]("mouseup", function(e){drag=drag&&dragged&&e[pd]()})

h("cface",function(){
    var s=Σ.get("s");
    var b = AS(S(this.lng*deg-s.x*2*π)), 
    c=AS(S(this.lat*deg-(π/2-s.y*π))),
    cx=C(b)*C(c), sx=R(1-cx*cx)
    return (-2.1*AC((C(c)-C(b)*cx)/S(b)*sx))/deg;
})

setTimeout(function(){document.location="#news1";Σ.set("t",9*60-7);
    setInterval(function() {
        Σ.set("t", Σ.get("t")-1)
    },1000)
},5000)
h("time", function() {var t=Σ.get("t"); return t && F(t/60)+":"+t%60})