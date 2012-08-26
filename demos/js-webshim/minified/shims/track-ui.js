jQuery.webshims.register("track-ui",function(e,h){var i=h.cfg.track,k={subtitles:1,captions:1},j={update:function(a,d){if(a.activeCues.length){if(!this.compareArray(a.displayedActiveCues,a.activeCues)){a.displayedActiveCues=a.activeCues;if(!a.trackDisplay)a.trackDisplay=e('<div class="cue-display"></div>').insertAfter(d),this.addEvents(a,d);a.hasDirtyTrackDisplay&&d.triggerHandler("forceupdatetrackdisplay");this.showCues(a)}}else this.hide(a)},showCues:function(a){var d=e('<span class="cue-wrapper" />');
e.each(a.displayedActiveCues,function(a,c){d.append(e('<span class="cue" />').html(c.getCueAsHTML()))});a.trackDisplay.html(d)},compareArray:function(a,d){var f=!0,c=0,b=a.length;if(b!=d.length)f=!1;else for(;c<b;c++)if(a[c]!=d[c]){f=!1;break}return f},addEvents:function(a,d){if(i.positionDisplay){var f,c=function(c){if(a.displayedActiveCues.length||!0===c){a.trackDisplay.css({display:"none"});var b=d.getShadowElement();b.offsetParent();var c=b.innerHeight(),f=b.innerWidth(),b=b.position();a.trackDisplay.css({left:b.left,
width:f,height:c-45,top:b.top,display:"block"});a.trackDisplay.css("fontSize",Math.max(Math.round(c/30),7));a.hasDirtyTrackDisplay=!1}else a.hasDirtyTrackDisplay=!0},b=function(){c(!0)};d.bind("updateshadowom playerdimensionchange mediaelementapichange updatetrackdisplay updatemediaelementdimensions swfstageresize",function(){clearTimeout(f);f=setTimeout(c,0)});d.bind("forceupdatetrackdisplay",b);b()}},hide:function(a){if(a.trackDisplay&&a.displayedActiveCues.length)a.displayedActiveCues=[],a.trackDisplay.empty()}};
e.extend(e.event.customEvent,{updatetrackdisplay:!0,forceupdatetrackdisplay:!0});h.mediaelement.trackDisplay=j;h.mediaelement.getActiveCue=function(a,d,f,c){if(!a._lastFoundCue)a._lastFoundCue={index:0,time:0};if(Modernizr.track&&!a._shimActiveCues)a._shimActiveCues=[];for(var b=0,g;b<a.shimActiveCues.length;b++)g=a.shimActiveCues[b],g.startTime>f||g.endTime<f?(a.shimActiveCues.splice(b,1),b--,g.pauseOnExit&&e(d).pause(),e(a).triggerHandler("cuechange"),e(g).triggerHandler("exit")):1<a.mode&&k[a.kind]&&
-1==e.inArray(g,c.activeCues)&&c.activeCues.push(g);d=a.cues.length;for(b=a._lastFoundCue.time<f?a._lastFoundCue.index:0;b<d;b++){g=a.cues[b];if(g.startTime<=f&&g.endTime>=f&&-1==e.inArray(g,a.shimActiveCues))a.shimActiveCues.push(g),1<a.mode&&k[a.kind]&&c.activeCues.push(g),e(a).triggerHandler("cuechange"),e(g).triggerHandler("enter"),a._lastFoundCue.time=f,a._lastFoundCue.index=b;if(g.startTime>f)break}};!i.override&&Modernizr.track&&function(){var a,d=function(c){a||setTimeout(function(){a=!0;
e(c).triggerHandler("updatetrackdisplay");a=!1},9)},f=h.defineNodeNameProperty("track","track",{prop:{get:function(){d(e(this).parent("audio, video"));return f.prop._supget.apply(this,arguments)}}});["audio","video"].forEach(function(a){var b,f;f=h.defineNodeNameProperty(a,"textTracks",{prop:{get:function(){d(this);return f.prop._supget.apply(this,arguments)}}});b=h.defineNodeNameProperty(a,"addTextTrack",{prop:{value:function(){d(this);return b.prop._supvalue.apply(this,arguments)}}})})}();h.addReady(function(a,
d){e("video",a).add(d.filter("video")).each(function(){var a,c=e(this),b,d=function(){c.unbind(".trackview").bind("play.trackview timeupdate.trackview updatetrackdisplay.trackview",function(){var d,e;if(!a||!b)if(a=c.prop("textTracks"),b=h.data(c[0],"mediaelementBase")||h.data(c[0],"mediaelementBase",{}),!b.displayedActiveCues)b.displayedActiveCues=[];if(a&&((e=c.prop("currentTime"))||0===e)){b.activeCues=[];for(var g=0,i=a.length;g<i;g++)d=a[g],0<d.mode&&d.cues&&d.cues.length&&h.mediaelement.getActiveCue(d,
c,e,b);j.update(b,c)}})};!i.override&&Modernizr.track?c.bind("mediaelementapichange trackapichange",function(){b=a=!1;if(i.override||!Modernizr.track||c.is(".nonnative-api-active"))d();else{if(!a||!b)a=c.prop("textTracks"),b=h.data(c[0],"mediaelementBase")||h.data(c[0],"mediaelementBase",{});e.each(a,function(a,c){j.hide(c,b);c._shimActiveCues&&delete c._shimActiveCues});c.unbind(".trackview")}}):d()})})});
