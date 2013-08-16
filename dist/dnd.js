define("arale/dnd/1.0.0/dnd",["$"],function(a,b,c){function d(a,b){if(!g(a,b))throw new Error("arguments error");this.elem=h(a),this.options={},h.extend(this.options,n,b),this.proxy="origin"===this.options.proxy?this.elem.clone():h(this.options.proxy),this.proxy.css("position","absolute"),this.proxy.css("margin","0"),this.proxy.css("cursor",this.options.dragCursor),this.elem.data("draggable",this)}function e(a){var b=h(a.target);switch(a.type){case"mousedown":1===a.which&&"object"==typeof b.data("draggable")&&(i=!0,o=b.data("draggable"),o.proxy.css("left",o.elem.offset().left),o.proxy.css("top",o.elem.offset().top),o.proxy.css("visibility","hidden"),o.proxy.appendTo("body"),l=a.pageX-o.elem.offset().left,m=a.pageY-o.elem.offset().top,a.preventDefault());break;case"mousemove":if(i)return i=!1,j=o.proxy,o.options.visible||o.elem.css("visibility","hidden"),o.proxy.css("visibility","visible"),o.elem.trigger("dragstart",o.options.dataTransfer),void 0;if(j){var c=null;if(null!==o.options.containment)var c=h(o.options.containment);"y"!==o.options.axis&&(null===c||f(c,a.pageX-l,j.offset().top,j.outerWidth(),j.outerHeight())?j.css("left",a.pageX-l):a.pageX-l<=c.offset().left?j.css("left",c.offset().left):j.css("left",c.offset().left+c.innerWidth()-j.outerWidth())),"x"!==o.options.axis&&(null===c||f(c,j.offset().left,a.pageY-m,j.outerWidth(),j.outerHeight())?j.css("top",a.pageY-m):a.pageY-m<=c.offset().top?j.css("top",c.offset().top):j.css("top",c.offset().top+c.innerHeight()-j.outerHeight())),o.elem.trigger("drag"),null!==o.options.drop&&(null===k?h.each(h(o.options.drop),function(a,b){return f(b,j.offset().left+l,j.offset().top+m)?(k=h(b),j.css("cursor",o.options.dropCursor),k.trigger("dragenter",j),void 0):void 0}):f(k,j.offset().left+l,j.offset().top+m)?k.trigger("dragover",j):(j.css("cursor",o.options.dragCursor),k.trigger("dragleave",j),k=null))}break;case"mouseup":if(j){var d=0,e=0;k&&(f(k,j)||(j.css("left",k.offset().left+(k.innerWidth()-j.outerWidth())/2),j.css("top",k.offset().top+(k.innerHeight()-j.outerHeight())/2)),k.trigger("drop",o.options.dataTransfer)),o.options.revert?(d="-="+(j.offset().left-o.elem.offset().left)+"px",e="-="+(j.offset().top-o.elem.offset().top)+"px",j.animate({left:d,top:e},o.options.revertDuration,function(){o.elem.css("visibility","visible"),j.remove(),j=null})):(d=j.offset().left-o.elem.offset().left,e=j.offset().top-o.elem.offset().top,"relative"===o.elem.css("position")?(o.elem.css("left",(isNaN(parseInt(o.elem.css("left")))?0:parseInt(o.elem.css("left")))+d),o.elem.css("top",(isNaN(parseInt(o.elem.css("top")))?0:parseInt(o.elem.css("top")))+e)):(o.elem.css("position","relative"),o.elem.css("left",d),o.elem.css("top",e)),o.elem.css("visibility","visible"),j.remove(),j=null),o.elem.css("cursor","default"),o.elem.trigger("dragend",k),k=null}else i&&(o.elem.css("visibility","visible"),o.proxy.remove(),i=!1)}}function f(a,b,c,d,e){var f=0,g=0,i=0,j=0;return 2==arguments.length?h(a).offset().left<=h(b).offset().left&&h(a).offset().left+h(a).innerWidth()>=h(b).offset().left+h(b).outerWidth()&&h(a).offset().top<=h(b).offset().top&&h(a).offset().top+h(a).innerHeight()>=h(b).offset().top+h(b).outerHeight():3==arguments.length?(f=b,g=c,h(a).offset().left<=f&&h(a).offset().left+h(a).innerWidth()>=f&&h(a).offset().top<=g&&h(a).offset().top+h(a).innerHeight()>=g):5==arguments.length?(f=b,g=c,i=d,j=e,h(a).offset().left<=f&&h(a).offset().left+h(a).innerWidth()>=f+i&&h(a).offset().top<=g&&h(a).offset().top+h(a).innerHeight()>=g+j):void 0}function g(){return!0}var d,h=a("$"),i=!1,j=null,k=null,l=0,m=0,n={containment:null,axis:!1,visible:!1,proxy:"origin",drop:null,revert:!1,revertDuration:500,disabled:!1,dragCursor:"move",dropCursor:"copy",dataTransfer:null},o={};d.prototype.open=function(){h(document).on("mousedown",e),h(document).on("mousemove",e),h(document).on("mouseup",e)},d.prototype.close=function(){h(document).off("mousedown",e),h(document).off("mousemove",e),h(document).off("mouseup",e)},d.prototype.open(),c.exports=d});