import{o as m,c as v,r as t,b as u,w as r,a,g as l,t as c,d as n,f as h}from"./vue.runtime.esm-bundler.0bc3eabf.js";import{_ as g}from"./_plugin-vue_export-helper.8823f7c1.js";import{_ as s,s as B}from"./default-i18n.3881921e.js";import{C as w}from"./Blur.71007c0c.js";import{C as I}from"./SettingsRow.aa479f88.js";import{S as V}from"./External.88ec9b3a.js";import{B as A}from"./RadioToggle.49538c2f.js";import{R as M}from"./RequiredPlans.d0936efa.js";import{C as G}from"./Card.a96d9a32.js";import{C as N}from"./ProBadge.57eb3f6b.js";import{C as R}from"./Index.38afdc86.js";import{A as P}from"./AddonConditions.e766d033.js";import"./constants.d0e2b74f.js";import"./links.d8ef3c22.js";import"./TruSeoHighlighter.f41d03f0.js";/* empty css                                              */import"./Row.7b93a0cf.js";/* empty css                                            */import"./addons.ecfd02c6.js";import"./upperFirst.d65414ba.js";import"./_stringToArray.a4422725.js";import"./isArrayLikeObject.10b615a9.js";import"./license.db04cc67.js";import"./index.888aa896.js";import"./Caret.11ded1aa.js";import"./Tooltip.eebec260.js";import"./Slide.c3dfb2b1.js";/* empty css                                              */import"./postContent.5b10ed83.js";import"./cleanForSlug.a67f7e84.js";import"./Ellipse.e18bc40f.js";import"./toFinite.c2274946.js";const i="all-in-one-seo-pack",x=()=>({strings:{customFieldSupport:s("Custom Field Support",i),exclude:s("Exclude Pages/Posts",i),video:s("Video Sitemap",i),description:s("The Video Sitemap works in much the same way as the XML Sitemap module, it generates an XML Sitemap specifically for video content on your site. Search engines use this information to display rich snippet information in search results.",i),enableSitemap:s("Enable Sitemap",i),openSitemap:s("Open Video Sitemap",i),noIndexDisplayed:s("Noindexed content will not be displayed in your sitemap.",i),doYou404:s("Do you get a blank sitemap or 404 error?",i),ctaButtonText:s("Upgrade to Pro and Unlock Video Sitemaps",i),ctaHeader:B(s("Video Sitemaps are only available for licensed %1$s %2$s users.",i),"AIOSEO","Pro"),linksPerSitemap:s("Links Per Sitemap",i),maxLinks:s("Allows you to specify the maximum number of posts in a sitemap (up to 50,000).",i),enableSitemapIndexes:s("Enable Sitemap Indexes",i)}}),H={};function O(e,S){return m(),v("div")}const D=g(H,[["render",O]]),U={setup(){const{strings:e}=x();return{strings:e}},components:{CoreBlur:w,CoreSettingsRow:I,SvgExternal:V,BaseRadioToggle:A}},E={class:"aioseo-settings-row aioseo-section-description"},q=["innerHTML"],F={class:"aioseo-sitemap-preview"},z={class:"aioseo-description"},X=a("br",null,null,-1),Y=["innerHTML"],j={class:"aioseo-description"},J=["innerHTML"],K={class:"aioseo-description"},Q=["innerHTML"];function W(e,S,L,o,k,y){const d=t("base-toggle"),p=t("core-settings-row"),_=t("svg-external"),f=t("base-button"),b=t("base-radio-toggle"),T=t("base-input"),C=t("core-blur");return m(),u(C,null,{default:r(()=>[a("div",E,[l(c(o.strings.description)+" ",1),a("span",{innerHTML:e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"videoSitemaps",!0)},null,8,q)]),n(p,{name:o.strings.enableSitemap},{content:r(()=>[n(d,{modelValue:!0})]),_:1},8,["name"]),n(p,{name:e.$constants.GLOBAL_STRINGS.preview},{content:r(()=>[a("div",F,[n(f,{size:"medium",type:"blue"},{default:r(()=>[n(_),l(" "+c(o.strings.openSitemap),1)]),_:1})]),a("div",z,[l(c(o.strings.noIndexDisplayed)+" ",1),X,l(" "+c(o.strings.doYou404)+" ",1),a("span",{innerHTML:e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"blankSitemap",!0)},null,8,Y)])]),_:1},8,["name"]),n(p,{name:o.strings.enableSitemapIndexes},{content:r(()=>[n(b,{name:"sitemapIndexes",options:[{label:e.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.enabled,value:!0}]},null,8,["options"]),a("div",j,[l(c(o.strings.sitemapIndexes)+" ",1),a("span",{innerHTML:e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"sitemapIndexes",!0)},null,8,J)])]),_:1},8,["name"]),n(p,{name:o.strings.linksPerSitemap},{content:r(()=>[n(T,{class:"aioseo-links-per-site",type:"number",size:"medium",min:1,max:5e4}),a("div",K,[l(c(o.strings.maxLinks)+" ",1),a("span",{innerHTML:e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"maxLinks",!0)},null,8,Q)])]),_:1},8,["name"])]),_:1})}const Z=g(U,[["render",W]]);const ee={setup(){const{strings:e}=x();return{strings:e}},components:{Blur:Z,RequiredPlans:M,CoreCard:G,CoreProBadge:N,Cta:R}},oe={class:"aioseo-video-sitemap-lite"};function te(e,S,L,o,k,y){const d=t("core-pro-badge"),p=t("blur"),_=t("required-plans"),f=t("cta"),b=t("core-card");return m(),v("div",oe,[n(b,{slug:"videoSitemap",noSlide:!0},{header:r(()=>[a("span",null,c(o.strings.video),1),n(d)]),default:r(()=>[n(p),n(f,{"feature-list":[o.strings.customFieldSupport,o.strings.exclude],"cta-link":e.$links.getPricingUrl("video-sitemap","video-sitemap-upsell"),"button-text":o.strings.ctaButtonText,"learn-more-link":e.$links.getUpsellUrl("video-sitemap",null,"home")},{"header-text":r(()=>[l(c(o.strings.ctaHeader),1)]),description:r(()=>[n(_,{addon:"aioseo-video-sitemap"}),l(" "+c(o.strings.description),1)]),_:1},8,["feature-list","cta-link","button-text","learn-more-link"])]),_:1})])}const $=g(ee,[["render",te]]);const ne={mixins:[P],components:{Cta:D,Lite:$,VideoSitemap:$},data(){return{addonSlug:"aioseo-video-sitemap"}}},se={class:"aioseo-video-sitemap"};function ie(e,S,L,o,k,y){const d=t("video-sitemap",!0),p=t("cta"),_=t("lite");return m(),v("div",se,[e.shouldShowMain?(m(),u(d,{key:0})):h("",!0),e.shouldShowUpdate||e.shouldShowActivate?(m(),u(p,{key:1})):h("",!0),e.shouldShowLite?(m(),u(_,{key:2})):h("",!0)])}const He=g(ne,[["render",ie]]);export{He as default};