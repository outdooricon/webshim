jQuery.webshims.register("form-number-date-api",function(a,b){var k,o,v;if(!b.getStep)b.getStep=function(n,b){var c=a.attr(n,"step");if("any"===c)return c;b=b||l(n);if(!g[b]||!g[b].step)return c;c=k.asNumber(c);return(!isNaN(c)&&0<c?c:g[b].step)*g[b].stepScaleFactor};if(!b.addMinMaxNumberToCache)b.addMinMaxNumberToCache=function(a,b,c){a+"AsNumber"in c||(c[a+"AsNumber"]=g[c.type].asNumber(b.attr(a)),isNaN(c[a+"AsNumber"])&&a+"Default"in g[c.type]&&(c[a+"AsNumber"]=g[c.type][a+"Default"]))};var j=
parseInt("NaN",10),g=b.inputTypes,q=function(a){return"number"==typeof a||a&&a==1*a},r=function(n){return a('<input type="'+n+'" />').prop("type")===n},l=function(a){return(a.getAttribute("type")||"").toLowerCase()},w=b.addMinMaxNumberToCache,s=function(a,b){for(var a=""+a,b=b-a.length,c=0;c<b;c++)a="0"+a;return a},h=b.bugs.valueAsNumberSet||b.bugs.bustedValidity;b.addValidityRule("stepMismatch",function(a,i,c,d){if(""===i)return!1;if(!("type"in c))c.type=l(a[0]);if("date"==c.type)return!1;d=(d||
{}).stepMismatch;if(g[c.type]&&g[c.type].step){if(!("step"in c))c.step=b.getStep(a[0],c.type);if("any"==c.step)return!1;if(!("valueAsNumber"in c))c.valueAsNumber=g[c.type].asNumber(i);if(isNaN(c.valueAsNumber))return!1;w("min",a,c);a=c.minAsNumber;isNaN(a)&&(a=g[c.type].stepBase||0);d=Math.abs((c.valueAsNumber-a)%c.step);d=!(1.0E-7>=d||1.0E-7>=Math.abs(d-c.step))}return d});[{name:"rangeOverflow",attr:"max",factor:1},{name:"rangeUnderflow",attr:"min",factor:-1}].forEach(function(a){b.addValidityRule(a.name,
function(b,c,d,e){e=(e||{})[a.name]||!1;if(""===c)return e;if(!("type"in d))d.type=l(b[0]);if(g[d.type]&&g[d.type].asNumber){if(!("valueAsNumber"in d))d.valueAsNumber=g[d.type].asNumber(c);if(isNaN(d.valueAsNumber))return!1;w(a.attr,b,d);if(isNaN(d[a.attr+"AsNumber"]))return e;e=d[a.attr+"AsNumber"]*a.factor<d.valueAsNumber*a.factor-1.0E-7}return e})});b.reflectProperties(["input"],["max","min","step"]);var t=b.defineNodeNameProperty("input","valueAsNumber",{prop:{get:function(){var b=l(this),b=g[b]&&
g[b].asNumber?g[b].asNumber(a.prop(this,"value")):t.prop._supget&&t.prop._supget.apply(this,arguments);null==b&&(b=j);return b},set:function(n){var i=l(this);g[i]&&g[i].numberToString?isNaN(n)?a.prop(this,"value",""):(i=g[i].numberToString(n),!1!==i?a.prop(this,"value",i):b.warn("INVALID_STATE_ERR: DOM Exception 11")):t.prop._supset&&t.prop._supset.apply(this,arguments)}}}),u=b.defineNodeNameProperty("input","valueAsDate",{prop:{get:function(){var b=l(this);return g[b]&&g[b].asDate&&!g[b].noAsDate?
g[b].asDate(a.prop(this,"value")):u.prop._supget&&u.prop._supget.call(this)||null},set:function(n){var i=l(this);if(g[i]&&g[i].dateToString&&!g[i].noAsDate){if(null===n)return a.prop(this,"value",""),"";i=g[i].dateToString(n);if(!1!==i)return a.prop(this,"value",i),i;b.warn("INVALID_STATE_ERR: DOM Exception 11")}else return u.prop._supset&&u.prop._supset.apply(this,arguments)||null}}});k={mismatch:function(a){return!q(a)},step:1,stepScaleFactor:1,asNumber:function(a){return q(a)?1*a:j},numberToString:function(a){return q(a)?
a:!1}};o={minDefault:0,maxDefault:100};v={mismatch:function(b){if(!b||!b.split||!/\d$/.test(b))return!0;var g=b.split(/\u002D/);if(3!==g.length)return!0;var c=!1;a.each(g,function(a,e){if(!(q(e)||e&&e=="0"+1*e))return c=!0,!1});if(c)return c;if(4!==g[0].length||2!=g[1].length||12<g[1]||2!=g[2].length||33<g[2])c=!0;return b!==this.dateToString(this.asDate(b,!0))},step:1,stepScaleFactor:864E5,asDate:function(a,b){return!b&&this.mismatch(a)?null:new Date(this.asNumber(a,!0))},asNumber:function(a,b){var c=
j;if(b||!this.mismatch(a))a=a.split(/\u002D/),c=Date.UTC(a[0],a[1]-1,a[2]);return c},numberToString:function(a){return q(a)?this.dateToString(new Date(1*a)):!1},dateToString:function(a){return a&&a.getFullYear?a.getUTCFullYear()+"-"+s(a.getUTCMonth()+1,2)+"-"+s(a.getUTCDate(),2):!1}};if(h||!r("range")||!r("time"))o=a.extend({},k,o);(h||!r("number"))&&b.addInputType("number",k);(h||!r("range"))&&b.addInputType("range",o);(h||!r("date"))&&b.addInputType("date",v)});
jQuery.webshims.register("form-number-date-ui",function(a,b,k,o,v,j){var g=b.triggerInlineForm,q=Modernizr.inputtypes,r=function(){var a={"padding-box":"innerWidth","border-box":"outerWidth","content-box":"width"},b=Modernizr.prefixed&&Modernizr.prefixed("boxSizing");return function(f,c){var g,j,i;j="width";b&&(j=a[f.css(b)]||j);g=f[j]();j="width"==j;if(g){var p=parseInt(c.css("marginLeft"),10)||0,x=c.outerWidth();(i=parseInt(f.css("marginRight"),10)||0)&&f.css("marginRight",0);p<=-1*x?(c.css("marginRight",
Math.floor(Math.abs(x+p-0.1)+i)),f.css("paddingRight",(parseInt(f.css("paddingRight"),10)||0)+Math.abs(p)),j&&f.css("width",Math.floor(g+p))):(c.css("marginRight",i),f.css("width",Math.floor(g-p-x-0.2)))}}}(),l={},w=a([]),s,h=function(d,e){a("input",d).add(e.filter("input")).each(function(){var d=a.prop(this,"type");if(h[d]&&!b.data(this,"shadowData"))h[d](a(this))})},t=function(d,b){if(j.lazyDate){var f=a.data(d[0],"setDateLazyTimer");f&&clearTimeout(f);a.data(d[0],"setDateLazyTimer",setTimeout(function(){d.datepicker("setDate",
b);a.removeData(d[0],"setDateLazyTimer");d=null},0))}else d.datepicker("setDate",b)};if(j.lazyDate===v)try{j.lazyDate=a.browser.msie&&9>b.browserVersion||500>a(k).width()&&500>a(k).height()}catch(u){}var n={tabindex:1,tabIndex:1,title:1,"aria-required":1,"aria-invalid":1};if(!j.copyAttrs)j.copyAttrs={};b.extendUNDEFProp(j.copyAttrs,n);var i=function(a){return j.calculateWidth?{css:{marginRight:a.css("marginRight"),marginLeft:a.css("marginLeft")},outerWidth:a.outerWidth()}:{}};h.common=function(d,
e,f){Modernizr.formvalidation&&d.bind("firstinvalid",function(a){(b.fromSubmit||!s)&&d.unbind("invalid.replacedwidgetbubble").bind("invalid.replacedwidgetbubble",function(f){!a.isInvalidUIPrevented()&&!f.isDefaultPrevented()&&(b.validityAlert.showFor(a.target),a.preventDefault(),f.preventDefault());d.unbind("invalid.replacedwidgetbubble")})});var c,g,i=a("input, span.ui-slider-handle",e),h=d[0].attributes;for(c in j.copyAttrs)if((g=h[c])&&g.specified)n[c]&&i[0]?i.attr(c,g.nodeValue):e[0].setAttribute(c,
g.nodeValue);c=(c=d.attr("id"))?a('label[for="'+c+'"]',d[0].form):w;e.addClass(d[0].className);b.addShadowDom(d,e,{data:f||{},shadowFocusElement:a("input.input-datetime-local-date, span.ui-slider-handle",e)[0],shadowChilds:i});d.after(e);d[0].form&&a(d[0].form).bind("reset",function(a){a.originalEvent&&!a.isDefaultPrevented()&&setTimeout(function(){d.prop("value",d.prop("value"))},0)});c[0]&&(e.getShadowFocusElement().attr("aria-labelledby",b.getID(c)),c.bind("click",function(){d.getShadowFocusElement().focus();
return!1}))};Modernizr.formvalidation&&["input","form"].forEach(function(a){var e=b.defineNodeNameProperty(a,"checkValidity",{prop:{value:function(){s=!0;var a=e.prop._supvalue.apply(this,arguments);s=!1;return a}}})});if(!q.date||j.replaceUI){var c=function(d,e,f,c){var g,i,h=function(){p.dpDiv.unbind("mousedown.webshimsmousedownhandler");i=g=!1},p=e.bind("focusin",function(){h();p.dpDiv.unbind("mousedown.webshimsmousedownhandler").bind("mousedown.webshimsmousedownhandler",function(){g=!0})}).bind("focusout blur",
function(a){g&&(i=!0,a.stopImmediatePropagation())}).datepicker(a.extend({onClose:function(){i&&e.not(":focus")?(h(),e.trigger("focusout"),e.triggerHandler("blur")):h()}},l,j.datepicker,d.data("datepicker"))).bind("change",f).data("datepicker");p.dpDiv.addClass("input-date-datepicker-control");c&&b.triggerDomUpdate(c[0]);"disabled,min,max,value,step,data-placeholder".split(",").forEach(function(a){var f=d.prop(a);""!==f&&("disabled"!=a||!f)&&d.prop(a,f)});return p};h.date=function(d){if(a.fn.datepicker){var e=
a('<input class="input-date" type="text" />'),f=c(d,e,function(f){h.date.blockAttr=!0;var b;if(j.lazyDate){var c=a.data(e[0],"setDateLazyTimer");c&&(clearTimeout(c),a.removeData(e[0],"setDateLazyTimer"))}try{b=(b=a.datepicker.parseDate(e.datepicker("option","dateFormat"),e.prop("value")))?a.datepicker.formatDate("yy-mm-dd",b):e.prop("value")}catch(i){b=e.prop("value")}d.prop("value",b);h.date.blockAttr=!1;f.stopImmediatePropagation();g(d[0],"input");g(d[0],"change")});this.common(d,e,h.date.attrs);
a(d).bind("updateshadowdom",function(){if(f.trigger[0]){d.css({display:""});var a=i(d);a.css&&(e.css(a.css),a.outerWidth&&e.outerWidth(a.outerWidth),r(e,f.trigger))}d.css({display:"none"})}).triggerHandler("updateshadowdom");f.trigger[0]&&setTimeout(function(){b.ready("WINDOWLOAD",function(){a(d).triggerHandler("updateshadowdom")})},9)}};h.date.attrs={disabled:function(b,e,f){a.prop(e,"disabled",!!f)},min:function(b,e,f){try{f=a.datepicker.parseDate("yy-mm-dd",f)}catch(c){f=!1}f&&a(e).datepicker("option",
"minDate",f)},max:function(b,e,f){try{f=a.datepicker.parseDate("yy-mm-dd",f)}catch(c){f=!1}f&&a(e).datepicker("option","maxDate",f)},"data-placeholder":function(b,e,f){b=(f||"").split("-");3==b.length&&(f=a(e).datepicker("option","dateFormat").replace("yy",b[0]).replace("mm",b[1]).replace("dd",b[2]));a.prop(e,"placeholder",f)},value:function(b,e,f){if(!h.date.blockAttr){try{var c=a.datepicker.parseDate("yy-mm-dd",f)}catch(g){c=!1}c?t(a(e),c):a.prop(e,"value",f)}}}}if(!q.range||j.replaceUI)h.range=
function(b){if(a.fn.slider){var e=a('<span class="input-range"><span class="ui-slider-handle" role="slider" tabindex="0" /></span>');this.common(b,e,h.range.attrs);b.bind("updateshadowdom",function(){b.css({display:""});var a=i(b);a.css&&(e.css(a.css),a.outerWidth&&e.outerWidth(a.outerWidth));b.css({display:"none"})}).triggerHandler("updateshadowdom");e.slider(a.extend(!0,{},j.slider,b.data("slider"))).bind("slide",function(a,e){if(a.originalEvent)h.range.blockAttr=!0,b.prop("value",e.value),h.range.blockAttr=
!1,g(b[0],"input"),g(b[0],"change")});["disabled","min","max","step","value"].forEach(function(f){var e=b.attr(f),c;"value"==f&&!e&&(c=b.getShadowElement())&&(e=(a(c).slider("option","max")-a(c).slider("option","min"))/2);null!=e&&b.attr(f,e)})}},h.range.attrs={disabled:function(b,e,f){f=!!f;a(e).slider("option","disabled",f);a("span",e).attr({"aria-disabled":f+"",tabindex:f?"-1":"0"})},min:function(b,e,f){f=f?1*f||0:0;a(e).slider("option","min",f);a("span",e).attr({"aria-valuemin":f})},max:function(b,
e,f){f=f||0===f?1*f||100:100;a(e).slider("option","max",f);a("span",e).attr({"aria-valuemax":f})},value:function(b,e,f){f=a(b).prop("valueAsNumber");isNaN(f)||(h.range.blockAttr||a(e).slider("option","value",f),a("span",e).attr({"aria-valuenow":f,"aria-valuetext":f}))},step:function(b,e,f){f=f&&a.trim(f)?1*f||1:1;a(e).slider("option","step",f)}};if(!b.bugs.valueAsNumberSet&&(j.replaceUI||!Modernizr.inputtypes.date||!Modernizr.inputtypes.range))k=function(){b.data(this,"hasShadow")&&a.prop(this,"value",
a.prop(this,"value"))},b.onNodeNamesPropertyModify("input","valueAsNumber",k),b.onNodeNamesPropertyModify("input","valueAsDate",k);a.each("disabled,min,max,value,step,data-placeholder".split(","),function(a,e){b.onNodeNamesPropertyModify("input",e,function(a){var c=b.data(this,"shadowData");if(c&&c.data&&c.data[e]&&c.nativeElement===this)c.data[e](this,c.shadowElement,a)})});if(!j.availabeLangs)j.availabeLangs="af ar ar-DZ az bg bs ca cs da de el en-AU en-GB en-NZ eo es et eu fa fi fo fr fr-CH gl he hr hu hy id is it ja ko kz lt lv ml ms nl no pl pt-BR rm ro ru sk sl sq sr sr-SR sv ta th tr uk vi zh-CN zh-HK zh-TW".split(" ");
k=function(){a.datepicker&&(b.activeLang({langObj:a.datepicker.regional,module:"form-number-date-ui",callback:function(b){b=a.extend({},l,b,j.datepicker);b.dateFormat&&j.datepicker.dateFormat!=b.dateFormat&&a("input.hasDatepicker").filter(".input-date, .input-datetime-local-date").datepicker("option","dateFormat",b.dateFormat).getNativeElement().filter("[data-placeholder]").attr("data-placeholder",function(a,b){return b});a.datepicker.setDefaults(b)}}),a(o).unbind("jquery-uiReady.langchange input-widgetsReady.langchange"))};
a(o).bind("jquery-uiReady.langchange input-widgetsReady.langchange",k);k();(function(){var c=function(){var b={};return function(c){return c in b?b[c]:b[c]=a('<input type="'+c+'" />')[0].type===c}}();if(!c("number")){var e=b.cfg["forms-ext"],f=b.inputTypes,i=function(c,e,d){d=d||{};if(!("type"in d))d.type=a.prop(c,"type");if(!("step"in d))d.step=b.getStep(c,d.type);if(!("valueAsNumber"in d))d.valueAsNumber=f[d.type].asNumber(a.prop(c,"value"));var g="any"==d.step?f[d.type].step*f[d.type].stepScaleFactor:
d.step;b.addMinMaxNumberToCache("min",a(c),d);b.addMinMaxNumberToCache("max",a(c),d);if(isNaN(d.valueAsNumber))d.valueAsNumber=f[d.type].stepBase||0;if("any"!==d.step&&(c=Math.round(1E7*((d.valueAsNumber-(d.minAsnumber||0))%d.step))/1E7)&&Math.abs(c)!=d.step)d.valueAsNumber-=c;c=d.valueAsNumber+g*e;return c=!isNaN(d.minAsNumber)&&c<d.minAsNumber?d.valueAsNumber*e<d.minAsNumber?d.minAsNumber:isNaN(d.maxAsNumber)?d.valueAsNumber:d.maxAsNumber:!isNaN(d.maxAsNumber)&&c>d.maxAsNumber?d.valueAsNumber*e>
d.maxAsNumber?d.maxAsNumber:isNaN(d.minAsNumber)?d.valueAsNumber:d.minAsNumber:Math.round(1E7*c)/1E7};b.modules["form-number-date-ui"].getNextStep=i;var j=function(b,c,d){if(!b.disabled&&!b.readOnly&&!a(d).hasClass("step-controls")&&(a.prop(b,"value",f[c].numberToString(i(b,a(d).hasClass("step-up")?1:-1,{type:c}))),a(b).unbind("blur.stepeventshim"),g(b,"input"),o.activeElement)){if(o.activeElement!==b)try{b.focus()}catch(e){}setTimeout(function(){if(o.activeElement!==b)try{b.focus()}catch(c){}a(b).one("blur.stepeventshim",
function(){g(b,"change")})},0)}};if(e.stepArrows){var h={set:function(){var a=b.data(this,"step-controls");if(a)a[this.disabled||this.readonly?"addClass":"removeClass"]("disabled-step-control")}};b.onNodeNamesPropertyModify("input","disabled",h);b.onNodeNamesPropertyModify("input","readonly",a.extend({},h))}var n={38:1,40:-1};b.addReady(function(h,k){e.stepArrows&&a("input",h).add(k.filter("input")).each(function(){var h=a.prop(this,"type");if(f[h]&&f[h].asNumber&&e.stepArrows&&!(!0!==e.stepArrows&&
!e.stepArrows[h]||c(h)||a(m).hasClass("has-step-controls"))){var m=this,k=a('<span class="step-controls" unselectable="on"><span class="step-up" /><span class="step-down" /></span>').insertAfter(m).bind("selectstart dragstart",function(){return!1}).bind("mousedown mousepress",function(a){j(m,h,a.target);return!1}).bind("mousepressstart mousepressend",function(b){a(b.target)["mousepressstart"==b.type?"addClass":"removeClass"]("mousepress-ui")}),o=function(b,c){if(!m.disabled&&!m.readOnly)return a.prop(m,
"value",f[h].numberToString(i(m,c,{type:h}))),g(m,"input"),!1},l=a(m).addClass("has-step-controls").attr({readonly:m.readOnly,disabled:m.disabled,autocomplete:"off",role:"spinbutton"}).bind(a.browser.msie?"keydown":"keypress",function(b){if(!m.disabled&&!m.readOnly&&n[b.keyCode])return a.prop(m,"value",f[h].numberToString(i(m,n[b.keyCode],{type:h}))),g(m,"input"),!1});"number"==h&&l.bind("keypress",function(){return function(a){var b=String.fromCharCode(null==a.charCode?a.keyCode:a.charCode);return a.ctrlKey||
a.metaKey||" ">b||-1<"0123456789.".indexOf(b)}}());a.fn.mwheelIntent?l.add(k).bind("mwheelIntent",o):l.bind("focus",function(){l.add(k).unbind(".mwhellwebshims").bind("mousewheel.mwhellwebshims",o)}).bind("blur",function(){a(m).add(k).unbind(".mwhellwebshims")});b.data(m,"step-controls",k);e.calculateWidth&&(r(l,k),k.css("marginTop",(l.outerHeight()-k.outerHeight())/2))}})})}})();b.addReady(function(c,e){a(o).bind("jquery-uiReady.initinputui input-widgetsReady.initinputui",function(){if(a.datepicker||
a.fn.slider){if(a.datepicker&&!l.dateFormat)l.dateFormat=a.datepicker._defaults.dateFormat;h(c,e)}a.datepicker&&a.fn.slider?a(o).unbind(".initinputui"):b.modules["input-widgets"].src||b.warn('jQuery UI Widget factory is already included, but not datepicker or slider. configure src of $.webshims.modules["input-widgets"].src')})})});
