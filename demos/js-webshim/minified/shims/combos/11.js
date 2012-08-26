jQuery.webshims.register("dom-extend",function(a,h,j,q,o){var r=h.modules,p=/\s*,\s*/,v={},w={},s={},y={},t={},x=a.fn.val,b=function(f,d,k,b,c){return c?x.call(a(f)):x.call(a(f),k)};a.fn.val=function(f){var d=this[0];arguments.length&&null==f&&(f="");if(!arguments.length)return!d||1!==d.nodeType?x.call(this):a.prop(d,"value",f,"val",!0);if(a.isArray(f))return x.apply(this,arguments);var k=a.isFunction(f);return this.each(function(b){d=this;1===d.nodeType&&(k?(b=f.call(d,b,a.prop(d,"value",o,"val",
!0)),null==b&&(b=""),a.prop(d,"value",b,"val")):a.prop(d,"value",f,"val"))})};var c="_webshimsLib"+Math.round(1E3*Math.random()),e=function(f,d,b){f=f.jquery?f[0]:f;if(!f)return b||{};var l=a.data(f,c);b!==o&&(l||(l=a.data(f,c,{})),d&&(l[d]=b));return d?l&&l[d]:l};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(f){a.fn[f.name]=function(){return this.map(function(){var a=e(this,
"shadowData");return a&&a[f.prop]||this})}});["removeAttr","prop","attr"].forEach(function(f){v[f]=a[f];a[f]=function(d,k,l,c,e){var g="val"==c,n=!g?v[f]:b;if(!d||!w[k]||1!==d.nodeType||!g&&c&&"attr"==f&&a.attrFn[k])return n(d,k,l,c,e);var u=(d.nodeName||"").toLowerCase(),m=s[u],h="attr"==f&&(!1===l||null===l)?"removeAttr":f,i,r,p;m||(m=s["*"]);m&&(m=m[k]);m&&(i=m[h]);if(i){if("value"==k)r=i.isVal,i.isVal=g;if("removeAttr"===h)return i.value.call(d);if(l===o)return i.get?i.get.call(d):i.value;i.set&&
("attr"==f&&!0===l&&(l=k),p=i.set.call(d,l));if("value"==k)i.isVal=r}else p=n(d,k,l,c,e);if((l!==o||"removeAttr"===h)&&t[u]&&t[u][k]){var j;j="removeAttr"==h?!1:"prop"==h?!!l:!0;t[u][k].forEach(function(a){if(!a.only||(a.only="prop"==f)||"attr"==a.only&&"prop"!=f)a.call(d,l,j,g?"val":h,f)})}return p};y[f]=function(d,k,l){s[d]||(s[d]={});s[d][k]||(s[d][k]={});var c=s[d][k][f],e=function(a,d,c){return d&&d[a]?d[a]:c&&c[a]?c[a]:"prop"==f&&"value"==k?function(a){return l.isVal?b(this,k,a,!1,0===arguments.length):
v[f](this,k,a)}:"prop"==f&&"value"==a&&l.value.apply?function(a){var d=v[f](this,k);d&&d.apply&&(d=d.apply(this,arguments));return d}:function(a){return v[f](this,k,a)}};s[d][k][f]=l;if(l.value===o){if(!l.set)l.set=l.writeable?e("set",l,c):h.cfg.useStrict&&"prop"==k?function(){throw k+" is readonly on "+d;}:a.noop;if(!l.get)l.get=e("get",l,c)}["value","get","set"].forEach(function(a){l[a]&&(l["_sup"+a]=e(a,c))})}});var g=!a.browser.msie||8<parseInt(a.browser.version,10),n=function(){var a=h.getPrototypeOf(q.createElement("foobar")),
d=Object.prototype.hasOwnProperty;return function(b,c,z){var A=q.createElement(b),n=h.getPrototypeOf(A);if(g&&n&&a!==n&&(!A[c]||!d.call(A,c))){var i=A[c];z._supvalue=function(){return i&&i.apply?i.apply(this,arguments):i};n[c]=z.value}else z._supvalue=function(){var a=e(this,"propValue");return a&&a[c]&&a[c].apply?a[c].apply(this,arguments):a&&a[c]},m.extendValue(b,c,z.value);z.value._supvalue=z._supvalue}}(),m=function(){var f={};h.addReady(function(d,b){var c={},k=function(f){c[f]||(c[f]=a(d.getElementsByTagName(f)),
b[0]&&a.nodeName(b[0],f)&&(c[f]=c[f].add(b)))};a.each(f,function(a,f){k(a);!f||!f.forEach?h.warn("Error: with "+a+"-property. methods: "+f):f.forEach(function(f){c[a].each(f)})});c=null});var d,b=a([]),c=function(b,c){f[b]?f[b].push(c):f[b]=[c];a.isDOMReady&&(d||a(q.getElementsByTagName(b))).each(c)};return{createTmpCache:function(f){a.isDOMReady&&(d=d||a(q.getElementsByTagName(f)));return d||b},flushTmpCache:function(){d=null},content:function(f,d){c(f,function(){var f=a.attr(this,d);null!=f&&a.attr(this,
d,f)})},createElement:function(a,f){c(a,f)},extendValue:function(f,d,b){c(f,function(){a(this).each(function(){e(this,"propValue",{})[d]=this[d];this[d]=b})})}}}(),i=function(a,d){if(a.defaultValue===o)a.defaultValue="";if(!a.removeAttr)a.removeAttr={value:function(){a[d||"prop"].set.call(this,a.defaultValue);a.removeAttr._supvalue.call(this)}};if(!a.attr)a.attr={}};a.extend(h,{getID:function(){var f=(new Date).getTime();return function(d){var d=a(d),b=d.attr("id");b||(f++,b="ID-"+f,d.attr("id",b));
return b}}(),extendUNDEFProp:function(f,d){a.each(d,function(a,d){a in f||(f[a]=d)})},createPropDefault:i,data:e,moveToFirstEvent:function(){var f=a._data?"_data":"data";return function(d,b,c){if((d=(a[f](d,"events")||{})[b])&&1<d.length)b=d.pop(),c||(c="bind"),"bind"==c&&d.delegateCount?d.splice(d.delegateCount,0,b):d.unshift(b)}}(),addShadowDom:function(){var f,d,b;a(j).bind("emchange resize",function(c){clearTimeout(f);f=setTimeout(function(){if("resize"==c.type){var f=a(j).width(),e=a(j).width();
if(e==d&&f==b)return;d=e;b=f}a.event.trigger("updateshadowdom")},20)});a.event.customEvent.updateshadowdom=!0;return function(f,d,b){b=b||{};f.jquery&&(f=f[0]);d.jquery&&(d=d[0]);var k=a.data(f,c)||a.data(f,c,{}),g=a.data(d,c)||a.data(d,c,{}),u={};if(b.shadowFocusElement){if(b.shadowFocusElement){if(b.shadowFocusElement.jquery)b.shadowFocusElement=b.shadowFocusElement[0];u=a.data(b.shadowFocusElement,c)||a.data(b.shadowFocusElement,c,u)}}else b.shadowFocusElement=d;k.hasShadow=d;u.nativeElement=g.nativeElement=
f;u.shadowData=g.shadowData=k.shadowData={nativeElement:f,shadowElement:d,shadowFocusElement:b.shadowFocusElement};b.shadowChilds&&b.shadowChilds.each(function(){e(this,"shadowData",g.shadowData)});if(b.data)u.shadowData.data=g.shadowData.data=k.shadowData.data=b.data;b=null}}(),propTypes:{standard:function(a){i(a);if(!a.prop)a.prop={set:function(b){a.attr.set.call(this,""+b)},get:function(){return a.attr.get.call(this)||a.defaultValue}}},"boolean":function(a){i(a);if(!a.prop)a.prop={set:function(b){b?
a.attr.set.call(this,""):a.removeAttr.value.call(this)},get:function(){return null!=a.attr.get.call(this)}}},src:function(){var b=q.createElement("a");b.style.display="none";return function(d,c){i(d);if(!d.prop)d.prop={set:function(a){d.attr.set.call(this,a)},get:function(){var d=this.getAttribute(c),e;if(null==d)return"";b.setAttribute("href",d+"");if(!a.support.hrefNormalized){try{a(b).insertAfterTo(this),e=b.getAttribute("href",4)}catch(g){e=b.getAttribute("href",4)}a(b).detach()}return e||b.href}}}}(),
enumarated:function(a){i(a);if(!a.prop)a.prop={set:function(b){a.attr.set.call(this,b)},get:function(){var b=(a.attr.get.call(this)||"").toLowerCase();if(!b||-1==a.limitedTo.indexOf(b))b=a.defaultValue;return b}}}},reflectProperties:function(b,d){"string"==typeof d&&(d=d.split(p));d.forEach(function(d){h.defineNodeNamesProperty(b,d,{prop:{set:function(b){a.attr(this,d,b)},get:function(){return a.attr(this,d)||""}}})})},defineNodeNameProperty:function(b,d,c){w[d]=!0;if(c.reflect)h.propTypes[c.propType||
"standard"](c,d);["prop","attr","removeAttr"].forEach(function(e){var g=c[e];g&&(g="prop"===e?a.extend({writeable:!0},g):a.extend({},g,{writeable:!0}),y[e](b,d,g),"*"!=b&&h.cfg.extendNative&&"prop"==e&&g.value&&a.isFunction(g.value)&&n(b,d,g),c[e]=g)});c.initAttr&&m.content(b,d);return c},defineNodeNameProperties:function(a,b,c,e){for(var g in b)!e&&b[g].initAttr&&m.createTmpCache(a),c&&(b[g][c]?h.log("override: "+a+"["+g+"] for "+c):(b[g][c]={},["value","set","get"].forEach(function(a){a in b[g]&&
(b[g][c][a]=b[g][a],delete b[g][a])}))),b[g]=h.defineNodeNameProperty(a,g,b[g]);e||m.flushTmpCache();return b},createElement:function(b,d,c){var e;a.isFunction(d)&&(d={after:d});m.createTmpCache(b);d.before&&m.createElement(b,d.before);c&&(e=h.defineNodeNameProperties(b,c,!1,!0));d.after&&m.createElement(b,d.after);m.flushTmpCache();return e},onNodeNamesPropertyModify:function(b,d,c,e){"string"==typeof b&&(b=b.split(p));a.isFunction(c)&&(c={set:c});b.forEach(function(a){t[a]||(t[a]={});"string"==
typeof d&&(d=d.split(p));c.initAttr&&m.createTmpCache(a);d.forEach(function(b){t[a][b]||(t[a][b]=[],w[b]=!0);if(c.set){if(e)c.set.only=e;t[a][b].push(c.set)}c.initAttr&&m.content(a,b)});m.flushTmpCache()})},defineNodeNamesBooleanProperty:function(b,c,e){e||(e={});if(a.isFunction(e))e.set=e;h.defineNodeNamesProperty(b,c,{attr:{set:function(a){this.setAttribute(c,a);e.set&&e.set.call(this,!0)},get:function(){return null==this.getAttribute(c)?o:c}},removeAttr:{value:function(){this.removeAttribute(c);
e.set&&e.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:e.initAttr||!1})},contentAttr:function(a,b,c){if(a.nodeName){if(c===o)return a=a.attributes[b]||{},c=a.specified?a.value:null,null==c?o:c;"boolean"==typeof c?c?a.setAttribute(b,b):a.removeAttribute(b):a.setAttribute(b,c)}},activeLang:function(){var b=[],c={},e,g,m=/:\/\/|^\.*\//,n=function(b,c,d){return c&&d&&-1!==a.inArray(c,d.availabeLangs||[])?(b.loading=!0,d=d.langSrc,m.test(d)||(d=h.cfg.basePath+d),h.loader.loadScript(d+c+".js",
function(){b.langObj[c]?(b.loading=!1,p(b,!0)):a(function(){b.langObj[c]&&p(b,!0);b.loading=!1})}),!0):!1},i=function(a){c[a]&&c[a].forEach(function(a){a.callback()})},p=function(a,b){if(a.activeLang!=e&&a.activeLang!==g){var c=r[a.module].options;if(a.langObj[e]||g&&a.langObj[g])a.activeLang=e,a.callback(a.langObj[e]||a.langObj[g],e),i(a.module);else if(!b&&!n(a,e,c)&&!n(a,g,c)&&a.langObj[""]&&""!==a.activeLang)a.activeLang="",a.callback(a.langObj[""],e),i(a.module)}};return function(n){if("string"==
typeof n&&n!==e)e=n,g=e.split("-")[0],e==g&&(g=!1),a.each(b,function(a,b){p(b)});else if("object"==typeof n)if(n.register)c[n.register]||(c[n.register]=[]),c[n.register].push(n),n.callback();else{if(!n.activeLang)n.activeLang="";b.push(n);p(n)}return e}}()});a.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(a,b){h[a]=function(a,c,e,f){"string"==typeof a&&(a=a.split(p));var g={};a.forEach(function(a){g[a]=
h[b](a,c,e,f)});return g}});h.isReady("webshimLocalization",!0)});
(function(a,h){var j=a.webshims.browserVersion;if(!(a.browser.mozilla&&5<j)&&(!a.browser.msie||12>j&&7<j)){var q={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},o=function(a,h){a.getAttribute("role")||a.setAttribute("role",h)};a.webshims.addReady(function(r,p){a.each(q,function(h,j){for(var q=a(h,r).add(p.filter(h)),b=0,c=q.length;b<c;b++)o(q[b],j)});if(r===h){var j=h.getElementsByTagName("header")[0],w=h.getElementsByTagName("footer"),s=w.length;
j&&!a(j).closest("section, article")[0]&&o(j,"banner");s&&(j=w[s-1],a(j).closest("section, article")[0]||o(j,"contentinfo"))}})}})(jQuery,document);
jQuery.webshims.register("form-datalist",function(a,h,j,q,o){h.propTypes.element=function(j){h.createPropDefault(j,"attr");if(!j.prop)j.prop={get:function(){var h=j.attr.get.call(this);h&&(h=q.getElementById(h))&&j.propNodeName&&!a.nodeName(h,j.propNodeName)&&(h=null);return h||null},writeable:!1}};(function(){var r=a.webshims.cfg.forms,p=Modernizr.input.list;if(!p||r.customDatalist){var v=0,w={submit:1,button:1,reset:1,hidden:1,range:1,date:1},s=a.browser.msie&&7>parseInt(a.browser.version,10),y=
{},t=function(a){if(!a)return[];if(y[a])return y[a];var c;try{c=JSON.parse(localStorage.getItem("storedDatalistOptions"+a))}catch(e){}y[a]=c||[];return c||[]},x={_create:function(b){if(!w[a.prop(b.input,"type")]){var c=b.datalist,e=a.data(b.input,"datalistWidget");if(c&&e&&e.datalist!==c)e.datalist=c,e.id=b.id,e.shadowList.prop("className","datalist-polyfill "+(e.datalist.className||"")+" "+e.datalist.id+"-shadowdom"),r.positionDatalist?e.shadowList.insertAfter(b.input):e.shadowList.appendTo("body"),
a(e.datalist).unbind("updateDatalist.datalistWidget").bind("updateDatalist.datalistWidget",a.proxy(e,"_resetListCached")),e._resetListCached();else if(c){if(!(e&&e.datalist===c)){v++;var g=this;this.hideList=a.proxy(g,"hideList");this.timedHide=function(){clearTimeout(g.hideTimer);g.hideTimer=setTimeout(g.hideList,9)};this.datalist=c;this.id=b.id;this.hasViewableData=!0;this._autocomplete=a.attr(b.input,"autocomplete");a.data(b.input,"datalistWidget",this);this.shadowList=a('<div class="datalist-polyfill '+
(this.datalist.className||"")+" "+this.datalist.id+'-shadowdom" />');r.positionDatalist||a(b.input).hasClass("position-datalist")?this.shadowList.insertAfter(b.input):this.shadowList.appendTo("body");this.index=-1;this.input=b.input;this.arrayOptions=[];this.shadowList.delegate("li","mouseenter.datalistWidget mousedown.datalistWidget click.datalistWidget",function(c){var e=a("li:not(.hidden-item)",g.shadowList),h="mousedown"==c.type||"click"==c.type;g.markItem(e.index(c.currentTarget),h,e);"click"==
c.type&&(g.hideList(),r.customDatalist&&a(b.input).trigger("datalistselect"));return"mousedown"!=c.type}).bind("focusout",this.timedHide);b.input.setAttribute("autocomplete","off");a(b.input).attr({"aria-haspopup":"true"}).bind("input.datalistWidget",function(){if(!g.triggeredByDatalist)g.changedValue=!1,g.showHideOptions()}).bind("keydown.datalistWidget",function(c){var e=c.keyCode,h;if(40==e&&!g.showList())return g.markItem(g.index+1,!0),!1;if(g.isListVisible){if(38==e)return g.markItem(g.index-
1,!0),!1;if(!c.shiftKey&&(33==e||36==e))return g.markItem(0,!0),!1;if(!c.shiftKey&&(34==e||35==e))return c=a("li:not(.hidden-item)",g.shadowList),g.markItem(c.length-1,!0,c),!1;if(13==e||27==e)return 13==e&&(h=a("li.active-item:not(.hidden-item)",g.shadowList),g.changeValue(a("li.active-item:not(.hidden-item)",g.shadowList))),g.hideList(),r.customDatalist&&h&&h[0]&&a(b.input).trigger("datalistselect"),!1}}).bind("focus.datalistWidget",function(){a(this).hasClass("list-focus")&&g.showList()}).bind("mousedown.datalistWidget",
function(){a(this).is(":focus")&&g.showList()}).bind("blur.datalistWidget",this.timedHide);a(this.datalist).unbind("updateDatalist.datalistWidget").bind("updateDatalist.datalistWidget",a.proxy(this,"_resetListCached"));this._resetListCached();b.input.form&&(b.input.name||b.input.id)&&a(b.input.form).bind("submit.datalistWidget"+b.input.id,function(){if(!a(b.input).hasClass("no-datalist-cache")&&"off"!=g._autocomplete){var c=a.prop(b.input,"value"),e=(b.input.name||b.input.id)+a.prop(b.input,"type");
if(!g.storedOptions)g.storedOptions=t(e);if(c&&-1==g.storedOptions.indexOf(c)&&(g.storedOptions.push(c),c=g.storedOptions,e)){c=c||[];try{localStorage.setItem("storedDatalistOptions"+e,JSON.stringify(c))}catch(h){}}}});a(j).bind("unload.datalist"+this.id+" beforeunload.datalist"+this.id,function(){g.destroy()})}}else e&&e.destroy()}},destroy:function(){var b=a.attr(this.input,"autocomplete");a(this.input).unbind(".datalistWidget").removeData("datalistWidget");this.shadowList.remove();a(q).unbind(".datalist"+
this.id);a(j).unbind(".datalist"+this.id);this.input.form&&this.input.id&&a(this.input.form).unbind("submit.datalistWidget"+this.input.id);this.input.removeAttribute("aria-haspopup");b===o?this.input.removeAttribute("autocomplete"):a(this.input).attr("autocomplete",b)},_resetListCached:function(a){var c=this,e;this.needsUpdate=!0;this.lastUpdatedValue=!1;this.lastUnfoundValue="";this.updateTimer||(j.QUnit||(e=a&&q.activeElement==c.input)?c.updateListOptions(e):h.ready("WINDOWLOAD",function(){c.updateTimer=
setTimeout(function(){c.updateListOptions();c=null;v=1},200+100*v)}))},updateListOptions:function(b){this.needsUpdate=!1;clearTimeout(this.updateTimer);this.updateTimer=!1;this.shadowList.css({fontSize:a.css(this.input,"fontSize"),fontFamily:a.css(this.input,"fontFamily")});this.searchStart=r.customDatalist&&a(this.input).hasClass("search-start");var c=[],e=[],g=[],h,m,i,f;for(m=a.prop(this.datalist,"options"),i=0,f=m.length;i<f;i++){h=m[i];if(h.disabled)return;h={value:a(h).val()||"",text:a.trim(a.attr(h,
"label")||h.textContent||h.innerText||a.text([h])||""),className:h.className||"",style:a.attr(h,"style")||""};h.text?h.text!=h.value&&(h.className+=" different-label-value"):h.text=h.value;e[i]=h.value;g[i]=h}if(!this.storedOptions)this.storedOptions=a(this.input).hasClass("no-datalist-cache")||"off"==this._autocomplete?[]:t((this.input.name||this.input.id)+a.prop(this.input,"type"));this.storedOptions.forEach(function(a){-1==e.indexOf(a)&&g.push({value:a,text:a,className:"stored-suggest",style:""})});
for(i=0,f=g.length;i<f;i++)m=g[i],c[i]='<li class="'+m.className+'" style="'+m.style+'" tabindex="-1" role="listitem"><span class="option-label">'+m.text+'</span> <span class="option-value">'+m.value+"</span></li>";this.arrayOptions=g;this.shadowList.html('<div class="datalist-outer-box"><div class="datalist-box"><ul role="list">'+c.join("\n")+"</ul></div></div>");a.fn.bgIframe&&s&&this.shadowList.bgIframe();(b||this.isListVisible)&&this.showHideOptions()},showHideOptions:function(b){var c=a.prop(this.input,
"value").toLowerCase();if(!(c===this.lastUpdatedValue||this.lastUnfoundValue&&0===c.indexOf(this.lastUnfoundValue))){this.lastUpdatedValue=c;var e=!1,g=this.searchStart,h=a("li",this.shadowList);c?this.arrayOptions.forEach(function(b,i){var f;if(!("lowerText"in b))b.lowerText=b.text!=b.value?b.value.toLowerCase()+b.text.toLowerCase():b.text.toLowerCase();f=b.lowerText.indexOf(c);(f=g?!f:-1!==f)?(a(h[i]).removeClass("hidden-item"),e=!0):a(h[i]).addClass("hidden-item")}):h.length&&(h.removeClass("hidden-item"),
e=!0);this.hasViewableData=e;!b&&e&&this.showList();if(!e)this.lastUnfoundValue=c,this.hideList()}},setPos:function(){this.shadowList.css({marginTop:0,marginLeft:0,marginRight:0,marginBottom:0});var b=r.positionDatalist?a(this.input).position():h.getRelOffset(this.shadowList,this.input);b.top+=a(this.input).outerHeight();b.width=a(this.input).outerWidth()-(parseInt(this.shadowList.css("borderLeftWidth"),10)||0)-(parseInt(this.shadowList.css("borderRightWidth"),10)||0);this.shadowList.css({marginTop:"",
marginLeft:"",marginRight:"",marginBottom:""}).css(b);return b},showList:function(){if(this.isListVisible)return!1;this.needsUpdate&&this.updateListOptions();this.showHideOptions(!0);if(!this.hasViewableData)return!1;this.isListVisible=!0;var b=this,c;b.setPos();b.shadowList.addClass("datalist-visible").find("li.active-item").removeClass("active-item");a(q).unbind(".datalist"+b.id).bind("mousedown.datalist"+b.id+" focusin.datalist"+b.id,function(c){c.target===b.input||b.shadowList[0]===c.target||
a.contains(b.shadowList[0],c.target)?(clearTimeout(b.hideTimer),setTimeout(function(){clearTimeout(b.hideTimer)},9)):b.timedHide()});a(j).unbind(".datalist"+b.id).bind("resize.datalist"+b.id+" orientationchange.datalist "+b.id+" emchange.datalist"+b.id,function(){clearTimeout(c);c=setTimeout(function(){b.setPos()},9)});clearTimeout(c);return!0},hideList:function(){if(!this.isListVisible)return!1;var b=this,c=function(){b.changedValue&&a(b.input).trigger("change");b.changedValue=!1};b.shadowList.removeClass("datalist-visible list-item-active");
b.index=-1;b.isListVisible=!1;if(b.changedValue){b.triggeredByDatalist=!0;h.triggerInlineForm&&h.triggerInlineForm(b.input,"input");if(a(b.input).is(":focus"))a(b.input).one("blur",c);else c();b.triggeredByDatalist=!1}a(q).unbind(".datalist"+b.id);a(j).unbind(".datalist"+b.id).bind("resize.datalist"+b.id+" orientationchange.datalist "+b.id+" emchange.datalist"+b.id,function(){b.shadowList.css({top:0,left:0});a(j).unbind(".datalist"+b.id)});return!0},scrollIntoView:function(b){var c=a("ul",this.shadowList),
e=a("div.datalist-box",this.shadowList),g=b.position();g.top-=(parseInt(c.css("paddingTop"),10)||0)+(parseInt(c.css("marginTop"),10)||0)+(parseInt(c.css("borderTopWidth"),10)||0);0>g.top?e.scrollTop(e.scrollTop()+g.top-2):(g.top+=b.outerHeight(),b=e.height(),g.top>b&&e.scrollTop(e.scrollTop()+(g.top-b)+2))},changeValue:function(b){if(b[0]){var b=a("span.option-value",b).text(),c=a.prop(this.input,"value");if(b!=c)a(this.input).prop("value",b).triggerHandler("updateInput"),this.changedValue=!0}},markItem:function(b,
c,e){e=e||a("li:not(.hidden-item)",this.shadowList);if(e.length)0>b?b=e.length-1:b>=e.length&&(b=0),e.removeClass("active-item"),this.shadowList.addClass("list-item-active"),e=e.filter(":eq("+b+")").addClass("active-item"),c&&(this.changeValue(e),this.scrollIntoView(e)),this.index=b}};(function(){p||h.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var b=a("select",this);b[0]?b=b[0].options:(b=a("option",this).get(),b.length&&h.warn("you should wrap your option-elements for a datalist in a select element to support IE and other old browsers."));
return b}}});var b={autocomplete:{attr:{get:function(){var b=a.data(this,"datalistWidget");return b?b._autocomplete:"autocomplete"in this?this.autocomplete:this.getAttribute("autocomplete")},set:function(b){var e=a.data(this,"datalistWidget");e?(e._autocomplete=b,"off"==b&&e.hideList()):"autocomplete"in this?this.autocomplete=b:this.setAttribute("autocomplete",b)}}}};p?((a("<datalist><select><option></option></select></datalist>").prop("options")||[]).length||h.defineNodeNameProperty("datalist","options",
{prop:{writeable:!1,get:function(){var b=this.options||[];if(!b.length){var e=a("select",this);if(e[0]&&e[0].options&&e[0].options.length)b=e[0].options}return b}}}),b.list={attr:{get:function(){var b=h.contentAttr(this,"list");null!=b?this.removeAttribute("list"):b=a.data(this,"datalistListAttr");return null==b?o:b},set:function(b){a.data(this,"datalistListAttr",b);h.objectCreate(x,o,{input:this,id:b,datalist:a.prop(this,"list")})}},initAttr:!0,reflect:!0,propType:"element",propNodeName:"datalist"}):
b.list={attr:{get:function(){var a=h.contentAttr(this,"list");return null==a?o:a},set:function(b){h.contentAttr(this,"list",b);h.objectCreate(x,o,{input:this,id:b,datalist:a.prop(this,"list")})}},initAttr:!0,reflect:!0,propType:"element",propNodeName:"datalist"};h.defineNodeNameProperties("input",b);if(a.event.customEvent)a.event.customEvent.updateDatalist=!0,a.event.customEvent.updateInput=!0,a.event.customEvent.datalistselect=!0;h.addReady(function(a,b){b.filter("datalist > select, datalist, datalist > option, datalist > select > option").closest("datalist").triggerHandler("updateDatalist")})})()}})()});
