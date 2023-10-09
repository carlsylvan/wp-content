var pt=Object.defineProperty;var mt=(t,e,n)=>e in t?pt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var S=(t,e,n)=>(mt(t,typeof e!="symbol"?e+"":e,n),n);import{R as j,S as z,v as h,w as P,r as y,i as m,c as g,x as _,y as I,T as M,u as V,b as O}from"./links.d8ef3c22.js";import{V as W}from"./vue.runtime.esm-bundler.0bc3eabf.js";import{d as Z}from"./Caret.11ded1aa.js";import{a as q,g as E}from"./cleanForSlug.a67f7e84.js";import{d as gt,D as ft}from"./isArrayLikeObject.10b615a9.js";const wt=()=>{const t=window.elementor.documents.getCurrent(),e=[];return t.$element?(t.$element.find(".elementor-widget-container").each((n,o)=>{let r=o.innerHTML.trim();r=r.replaceAll(/<p.*>(<img.*>)<\/p>/g,"$1"),!(j(r)===""&&z(r).length===0)&&e.push(r)}),e.join(" ")):""},L=()=>{var t;return{content:wt(),title:window.elementor.settings.page.model.get("post_title"),excerpt:window.elementor.settings.page.model.get("post_excerpt")||"",slug:q(window.elementor.settings.page.model.get("post_title")),permalink:window.elementor.config.document.urls.permalink||"",featuredImage:((t=window.elementor.settings.page.model.get("post_featured_image"))==null?void 0:t.url)||""}},yt=()=>{const t=E(ET_Builder,"Frames.app.frameElement",document.querySelector("iframe#et-fb-app-frame"));if(!t)return document.createElement("div");let e=t.contentWindow.document.querySelectorAll("#et-fb-app");return 1<e.length&&(e=[...e].filter(n=>n.classList.contains("et-fb-root-ancestor"))),e[0]||document.createElement("div")},St=()=>{const t=[],e=yt().querySelectorAll(".et_pb_section"),n=new RegExp(["<style.*?</style>","\\[object Object\\]"].join("|"),"gi");for(let o=0;o<e.length;o++){let r=e[o].innerHTML;r=e[o].innerHTML.replace(n,""),r=r.replaceAll(/<p.*>(<img.*>)<\/p>/g,"$1"),!(j(r)===""&&z(r).length===0)&&t.push(r)}return t.join(" ")},Et=()=>{const t=new URL(E(ETBuilderBackendDynamic,"currentPage.permalink",""));return t.searchParams.delete("PageSpeed"),t.href},$=()=>({content:St(),title:E(ETBuilderBackendDynamic,"postTitle",""),excerpt:E(ETBuilderBackendDynamic,"postMeta.post_excerpt",""),slug:E(ETBuilderBackendDynamic,"postMeta.post_name",""),permalink:Et(),featuredImage:E(ETBuilderBackendDynamic,"currentPage.thumbnailUrl","")}),ht=t=>{let e;switch(t.type){case"header":e=document.createElement(t.settings.tag),e.innerHTML=t.settings.headerTxt.trim();break;case"image":const n=document.createElement("img");t.settings.altTxt&&n.setAttribute("alt",t.settings.altTxt),t.settings.src&&n.setAttribute("src",t.settings.src),t.settings.noFollow&&n.setAttribute("rel","nofollow"),e=n,t.settings.link&&(e=document.createElement("a"),e.setAttribute("href",t.settings.link),e.innerHTML=n.outerHTML,t.settings.noFollow&&e.setAttribute("rel","nofollow"),t.settings.openNewWindow&&e.setAttribute("target","_blank"));break;case"video":t.settings.type==="youtube"?(e=document.createElement("iframe"),e.setAttribute("src",t.settings.youtubeUrl)):(e=document.createElement("div"),e.innerHTML=t.settings.code);break;case"text":e=document.createElement("div"),e.innerHTML=t.settings.txt.trim();break;case"button":e=document.createElement("a"),e.appendChild(document.createTextNode(t.settings.btnTxt+" "+t.settings.btnSubTxt)),t.settings.link&&e.setAttribute("href",t.settings.link),t.settings.altTxt&&e.setAttribute("alt",t.settings.altTxt),t.settings.src&&e.setAttribute("src",t.settings.src),t.settings.noFollow&&e.setAttribute("rel","nofollow"),t.settings.openNewWindow&&e.setAttribute("target","_blank");break;case"bullet-list":e=document.createElement("ul"),t.settings.items.forEach(o=>{const r=document.createElement("li");r.innerHTML=o.txt,e.appendChild(r)});break;case"custom-html":e=document.createElement("div"),e.innerHTML=t.settings.code;break}return e},Pt=()=>{const t=[];return JSON.parse(JSON.stringify(E(seedprod_data,"settings.document.sections",[]))).forEach(n=>{n.rows.forEach(o=>{o.cols.forEach(r=>{r.blocks.forEach(a=>{const s=ht(a);s&&(j(s)===""&&z(s).length===0||t.push(s.outerHTML))})})})}),t.join(" ")},Tt=()=>{const t=E(seedprod_data,"home_url",""),e=E(seedprod_data,"settings.post_name","");return`${t}/${e}/`},N=()=>({content:Pt(),title:E(seedprod_data,"settings.post_title",""),excerpt:"",slug:E(seedprod_data,"settings.post_name",""),permalink:Tt()}),X=()=>{let t="";return _()&&(t=L().permalink),I()&&(t=$().permalink),M()&&(t=N().permalink),t},vt=()=>{const t=g();if(t.liveTags.permalink)return t.liveTags.permalink;let e;if(h()||P){const n=document.querySelector("#edit-slug-box a");n&&n.href&&(e=n.href)}return y()&&(e=window.wp.data.select("core/editor").getPermalink()),e||(e=X()),e&&t.updatePermalink(e),e},A=()=>{let t;if(h()||P){const e=document.querySelector("#edit-slug-box a");e&&e.href&&(t=e.href)}return y()&&(t=window.wp.data.select("core/editor").getPermalink()),t||(t=X()),t},xt=async(t=!0)=>{let e=vt();const n=A();if(e!==n&&(e=n,e)){const o=m();if(g().updatePermalink(e),!t)return;new T().runAnalysis({postId:o.currentPost.id,postData:{...o.currentPost},content:x(),slug:A()})}},F=()=>{let t="";return _()&&(t=L().title),I()&&(t=$().title),M()&&(t=N().title),t},At=()=>{const t=g();if(t.liveTags.post_title)return t.liveTags.post_title;let e;if(h()||P()){const n=document.querySelector("#post input#title");e=n?n.value:""}return y()&&(e=window.wp.data.select("core/editor").getCurrentPost().title),e||(e=F()),e&&t.updatePostTitle(e),e},Q=()=>{let t;if(h()||P()){const e=document.querySelector("#post input#title");t=e?e.value:""}return y()&&(t=window.wp.data.select("core/editor").getEditedPostAttribute("title")),t||(t=F()),t},Ct=async(t=!0)=>{let e=At();const n=Q();if(e!==n){e=n;const o=m();if(g().updatePostTitle(e),!t)return;new T().runAnalysis({postId:o.currentPost.id,postData:{...o.currentPost},content:x(),slug:A()})}},Y=t=>{if(!t)return"";const e=[/\[.*?\]/g,/<\/?[a-z][^>]*?>/gi,/<!--[\s\S]*?-->/g,/(\r\n|\n|\r)/g];return t=t.replaceAll(/\n\n/g," "),e.forEach(n=>{t=t.replace(n,"")}),t.trim()},K=()=>{let t="";return _()&&(t=L().excerpt),I()&&(t=$().excerpt),M()&&(t=N().excerpt),t},kt=()=>{const t=g();if(t.liveTags.post_excerpt)return t.liveTags.post_excerpt;let e;return(h()||P())&&(e=tt()),y()&&(e=window.wp.data.select("core/editor").getCurrentPost().excerpt),e||(e=K()),e||(e=Y(lt())),e&&t.updatePostExcerpt(e),e},bt=()=>{let t;return(h()||P())&&(t=tt()),y()&&(t=window.wp.data.select("core/editor").getEditedPostAttribute("excerpt")),t||(t=K()),t||(t=Y(x())),t},_t=async(t=!0)=>{let e=kt();const n=bt();if(e!==n){e=n;const o=m();if(g().updatePostExcerpt(e),!t)return;new T().runAnalysis({postId:o.currentPost.id,postData:{...o.currentPost},content:x(),slug:A()})}},tt=()=>{let t="";const e=document.querySelector("#postexcerpt textarea#excerpt");if(t=e?e.value:"",document.querySelector("#wp-excerpt-wrap.tmce-active")){const n=window.tinyMCE?window.tinyMCE.get("excerpt"):"";n&&(t=n.getContent({format:"raw"}))}return t},et=()=>{let t="";return _()&&(t=L().slug),I()&&(t=$().slug),M()&&(t=N().slug),t},qt=()=>{const t=g();if(t.permalinkSlug)return t.permalinkSlug;let e="";if(h()||P()){const n=document.querySelector("#post_name");n&&(e=q(n.value))}return y()&&(e=window.wp.data.select("core/editor").getCurrentPost().slug),e||(e=et()),e&&t.updatePermalinkSlug(e),e},It=()=>{let t="";if(h()||P()){const e=document.querySelector("#post_name");e&&(t=q(e.value))}if(y()&&(t=window.wp.data.select("core/editor").getEditedPostAttribute("slug")),_()){const e=window.elementor.settings.page.model.get("post_title");e&&(t=q(e))}return t||(t=et()),t},Mt=async(t=!0)=>{let e=qt();const n=It();if(e!==n){e=n;const o=m();if(g().updatePermalinkSlug(e),!t)return;new T().runAnalysis({postId:o.currentPost.id,postData:{...o.currentPost},content:x(),slug:A()})}};let w="",v="";const Lt=(t=!0)=>{var o;const e=g();if(h()||P()){const r=document.querySelectorAll('#post input[name="post_category[]"]:checked');r.length?(w!==r[0].parentNode.innerText&&(w=r[0].parentNode.innerText,e.updateTaxonomyTitle(w)),v=Array.from(r).map(a=>a.parentNode.innerText).join(", "),e.updateCategories(v)):w!==""&&(w=v="",e.updateTaxonomyTitle(w),e.updateCategories(v))}if(y()){let r=[],a=[];if((o=V().aioseo.user.data.allcaps)!=null&&o.manageCategories&&(r=window.wp.data.select("core").getEntityRecords("taxonomy","category"),a=window.wp.data.select("core/editor").getEditedPostAttribute("categories")),a&&a.length&&r){const l=r.find(i=>i.id===a[0]);l&&w!==l.name&&(w=l.name,e.updateTaxonomyTitle(w)),v=r.filter(i=>a.includes(i.id)).map(i=>i.name).join(", "),e.updateCategories(v)}else w!==""&&(w=v="",e.updateTaxonomyTitle(w),e.updateCategories(v))}const n=m();t&&new T().runAnalysis({postId:n.currentPost.id})},$t=(t=!1)=>{const e=m();if(e.currentPost.context!=="term")return;const n=g(),o=document.querySelector("#edittag input#name");o&&(n.updateTaxonomyTitle(o.value),o.addEventListener("input",()=>{n.updateTaxonomyTitle(o.value)}));const r=document.querySelector("#edittag textarea#description");r&&(n.updateTaxonomyDescription(r.value),r.addEventListener("input",()=>{n.updateTaxonomyDescription(r.value)}));const a=document.querySelector("#edittag input#slug");if(a){const s=q(a.value);n.updatePermalinkSlug(s),n.updatePermalink(e.currentPost.permalink.replace(`/${n.permalinkSlug}`,`/${s.replace(/ /gi,"-").replace(/[^a-z0-9-]/gi,"").toLowerCase()}`)),a.addEventListener("input",()=>{n.updatePermalinkSlug(s),n.updatePermalink(e.currentPost.permalink.replace(`/${n.permalinkSlug}`,`/${s.replace(/ /gi,"-").replace(/[^a-z0-9-]/gi,"").toLowerCase()}`))})}e.savePostState(),t&&T.runAnalysis({postId:e.currentPost.id})},Nt=(t=!1)=>{const e=m();if(e.currentPost.postType!=="attachment")return;const n=g(),o=document.querySelector("textarea#attachment_caption");o&&(n.updateAttachmentCaption(o.value),o.addEventListener("input",i=>{n.updateAttachmentCaption(i.target.value)}));const r=document.querySelector("textarea#attachment-details-caption");r&&(n.updateAttachmentCaption(r.value),r.addEventListener("input",i=>{n.updateAttachmentCaption(i.target.value)}));const a=document.querySelector("textarea#attachment_content");a&&(n.updateAttachmentDescription(a.value),a.addEventListener("input",i=>{n.updateAttachmentDescription(i.target.value)}));const s=document.querySelector("input#attachment_alt");s&&(n.updateAltTag(s.value),s.addEventListener("input",i=>{n.updateAltTag(i.target.value)}));const l=document.querySelector("input#attachment-details-alt-text");l&&(n.updateAltTag(s.value),l.addEventListener("input",i=>{n.updateAltTag(i.target.value)})),t&&new T().runAnalysis({postId:e.currentPost.id})},Bt=()=>{var n,o;const t=m();return(n=t.currentPost)!=null&&n.id?((o=O().options.advanced)==null?void 0:o.truSeo)&&!t.currentPost.isSpecialPage&&t.currentPost.postType!=="attachment"&&nt():!1},Gt=()=>{var n,o;const t=V();return(n=t.aioseo.screen)!=null&&n.postType?!!((o=O().options.advanced)!=null&&o.truSeo&&nt(t.aioseo.screen.postType)):!1},nt=(t=null)=>{var a,s,l,i,f,u,p;if(t)return!!((s=(a=window.aioseo.dynamicOptions.searchAppearance.postTypes[t])==null?void 0:a.advanced)!=null&&s.showMetaBox);if(!((l=window.aioseo.currentPost)!=null&&l.id))return!1;const e=window.aioseo.currentPost.postType,n=window.aioseo.currentPost.termType,o=!!(e&&window.aioseo.currentPost.context==="post"&&window.aioseo.dynamicOptions.searchAppearance.postTypes[e]&&((f=(i=window.aioseo.dynamicOptions.searchAppearance.postTypes[e])==null?void 0:i.advanced)!=null&&f.showMetaBox)),r=!!(n&&window.aioseo.currentPost.context==="term"&&window.aioseo.dynamicOptions.searchAppearance.taxonomies[n]&&((p=(u=window.aioseo.dynamicOptions.searchAppearance.taxonomies[n])==null?void 0:u.advanced)!=null&&p.showMetaBox));return o||r},b=async(t=900,e=!0)=>{Z(async()=>{await Ct(!1),await Ht(!1),await _t(!1),await Mt(!1),await xt(!1),Lt(!1),$t(!1),Nt(!1);const n=m();e&&new T().runAnalysis({postId:n.currentPost.id})},t)},Jt=t=>{const e=t.getRangeAt(0),n=e.cloneRange();return n.collapse(!1),t.removeAllRanges(),t.addRange(n),t.extend(e.startContainer,e.startOffset),t},Zt=t=>{const e=new RegExp(String.fromCharCode(160),"g");return t.replace(/&nbsp;/g," ").replace(e," ")},Xt=({element:t,property:e,value:n})=>{if(!t)return document.documentElement;let o=t.parentElement;for(;o;){if(o.isEqualNode(document.documentElement)||n===document.defaultView.getComputedStyle(o).getPropertyValue(e))return o;o=o.parentElement}},Ft=()=>{const t=document.createElement("div");return t.classList.add("tru-seo-highlight-popover-wrapper"),t.style.position="absolute",t.style.zIndex="999",t.style.display="flex",t.setAttribute("tabindex",-1),t};function Dt(){return new Worker(""+window.__aioseoDynamicImportPreload__("main-4497e735.js"))}class T{constructor(){S(this,"postId",null);S(this,"postTitle",null);S(this,"postParsedTitle",null);S(this,"postParsedDescription",null);S(this,"postDescription",null);S(this,"keyphrases",null);S(this,"postContent",null);S(this,"postSlug",null);S(this,"isAnalyzing",!1);S(this,"worker",null)}async runAnalysis({postId:e,postData:n,content:o=x(),slug:r=A()}){var d;const a=m(),s=O();if(n=n||{...a.currentPost},!((d=s.options.advanced)!=null&&d.truSeo)||!a.currentPost.page_analysis||this.isAnalyzing)return;this.worker&&this.worker.terminate();const l={separator:gt(s.options.searchAppearance.global.separator)},i=V(),f=g(),u=f.tags.map(c=>f.liveTags[c.id]!==void 0&&c.value!==f.liveTags[c.id]?{...c,value:f.liveTags[c.id]}:c),p={...W(i.aioseo),tags:W(u),currentPost:W(a.currentPost)},C=JSON.parse(JSON.stringify({postId:e,postData:n,content:o,aioseo:p,slug:r,postEditedTitle:Q(),aioseoGlobals:l}));let B=[];this.worker=new Dt,this.worker.addEventListener("message",c=>{c.data.event==="tru-seo-analysis-complete"&&(B=c.data.analysis,this.dispatchActions(B,C),this.worker.terminate())}),this.worker.postMessage({event:"tru-seo-analysis",analysisData:C})}setSidebarButtonScore(e){const n=document.getElementById("aioseo-post-settings-sidebar-button"),o=document.getElementById("aioseo-post-score");!n||!o||(n.className=80<e?"score-green":50<e?"score-orange":"score-red",y()||(n.classList.add("aioseo-score-button","classic-editor"),e=`${e}/100`),o.textContent=e)}dispatchActions(e,n){const o=m();e.forEach(r=>{r.action==="updateState"&&o.currentPost.postType!=="attachment"&&n.postEditedTitle&&this.setSidebarButtonScore(r.data.seo_score),o[r.action](r.data)})}}const Rt=t=>{var n;if(typeof(window==null?void 0:window.acf)!="object"||typeof((n=window.acf)==null?void 0:n.getField)!="function")return null;const e=window.acf.getField(t)||{};return typeof(e==null?void 0:e.val)!="function"?null:e.val()||{}},ot=()=>{const e=m().currentPost.postType;if(!e)return"";const o=O().dynamicOptions.searchAppearance.postTypes[e].customFields;if(!o||!Bt)return"";const r=()=>{b(500)},a=o.replace(/\n/g,",").split(","),s=[],l=["INPUT","TEXTAREA","IMG"],i=u=>{try{document.createDocumentFragment().querySelector(u)}catch{return!1}return!0};a.forEach(u=>{u=u.trim();const p=i(`#${u}`)?document.querySelector(`#${u}`):!1,C=document.querySelectorAll("#the-list > tr"),B=document.querySelectorAll(".acf-field");l.includes(p==null?void 0:p.tagName)&&!(p!=null&&p.closest(".acf-field"))?s.push(p):C.forEach(d=>{const c=d.querySelector(`#${d.id}-key`),k=d.querySelector(`#${d.id}-value`);l.includes(k==null?void 0:k.tagName)&&a.includes(c==null?void 0:c.value)&&s.push(k)}),B.forEach(d=>{if(u!==d.dataset.name)return"";let c=d.querySelector(`[id^="acf"][name$="[${d.dataset.key}]"]`);if(d.dataset.type==="image"&&(c=d.querySelector(".has-value img")),d.dataset.type==="gallery"&&(c=d.querySelector(".acf-gallery-attachment img")),d.dataset.type==="link"&&(c=Rt(d.dataset.key)||d.querySelector(`[name$="[${d.dataset.key}][url]"]`)||{},c={tagName:"INPUT",type:"url",value:(c==null?void 0:c.url)??(c==null?void 0:c.value)??""}),!c||c.type&&c.type==="hidden")return"";if(d.dataset.type==="wysiwyg"){const k=window.setInterval(()=>{var D,R;(R=(D=window.tinyMCE)==null?void 0:D.activeEditor)!=null&&R.acf&&(window.clearInterval(k),window.tinyMCE.activeEditor.on("keyup",function(){b(500)}),window.tinyMCE.activeEditor.on("PostProcess",function(){Z(()=>{b(500)},10)}))},50),ut=function(D){D.forEach(R=>{var J;if(R.attributeName==="class"&&d.querySelector(".wp-editor-wrap.tmce-active")&&((J=window.tinyMCE)!=null&&J.activeEditor)){window.tinyMCE.activeEditor.on("keyup",function(){b(500)});const U=d.querySelector(`[name="acf[${d.dataset.key}]"]`);U&&(U.addEventListener("keyup",()=>{b(500)}),U.addEventListener("paste",()=>{b(500)}))}})},dt=new MutationObserver(ut),G=d.querySelector(".wp-editor-wrap");G&&dt.observe(G,{attributes:!0})}l.includes(c.tagName)&&s.push(c)})});let f="";return s.forEach(u=>{let p="";if(l.includes(u.tagName)&&typeof(u==null?void 0:u.addEventListener)=="function"&&u.addEventListener("keyup",r),u.value&&(p=u.value),u.tagName==="IMG"&&u.src){const C=u.alt?`alt="${u.alt}"`:"";p=`<img src="${u.src}" ${C}>`}u.value&&u.type&&u.type==="url"&&(p=`<a href="${p}">${p}</a>`),p&&(f+=`${p} `)}),f},Qt=(t,e=["INPUT","TEXTAREA","IMG"])=>{if(!t)return"";const n=document.querySelector(`#${t}`),o=document.querySelectorAll("#the-list > tr"),r=document.querySelectorAll(".acf-field");let a="";return n&&e.indexOf(n.tagName)!==-1&&(n.closest(".acf-field")||(a=n.tagName==="IMG"?n.getAttribute("src"):n.value)),o.length&&o.forEach(s=>{const l=s.querySelector(`#${s.id}-key`),i=s.querySelector(`#${s.id}-value`);i&&e.indexOf(i.tagName)!==-1&&l.value===t&&(a=i.tagName==="IMG"?i.getAttribute("src"):i.value)}),r.length&&r.forEach(s=>{if(t!==s.dataset.name)return;let l;e.forEach(i=>{const f=i.toLowerCase();l=s.querySelector(`[data-key="${s.dataset.key}"] ${f}`)||l}),l&&(a=l.tagName==="IMG"?l.getAttribute("src"):l.value)}),a},rt=/base64,(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)/g,st=["acf","aioseo"],at=()=>{let t="";return _()&&(t=L().content),I()&&(t=$().content),M()&&(t=N().content),t},it=t=>{var o;if(!t.includes('<!-- wp:block {"ref":'))return t;const e=(o=window.wp.blocks)==null?void 0:o.rawHandler({HTML:t});return ft(e).forEach(r=>{var a,s,l;if(r.name==="core/block"){const i=window.wp.data.select("core").getEntityRecord("postType","wp_block",(a=r.attributes)==null?void 0:a.ref);(s=i==null?void 0:i.content)!=null&&s.raw&&(t=t.replace(`<!-- wp:block {"ref":${(l=r.attributes)==null?void 0:l.ref}} /-->`,i.content.raw))}}),t},ct=(t,e)=>(window.wp.data.select("core/block-editor").getBlocks().forEach(o=>{if(e.includes(o.name.split("/")[0])){const r=document.getElementById("block-"+o.clientId);if(r&&r.innerHTML){const a=`<!-- wp:${o.name}.*?-->`;t=t.replace(new RegExp(a),r.innerHTML)}}}),t),lt=()=>{const t=g();if(t.liveTags.post_content)return t.liveTags.post_content;let e="";if(h())if(window.tinyMCE||document.querySelector("#wp-content-wrap.html-active"))e=H();else{const o=window.setInterval(()=>{window.tinyMCE&&(window.clearInterval(o),e=H())},50)}return y()&&(e=window.wp.data.select("core/editor").getCurrentPost().content,e=it(e),e=ct(e,st)),e||(e=at()),m().currentPost.descriptionIncludeCustomFields&&(e=e+ot()),e=e.replace(rt,""),e&&t.updatePostContent(e),e},x=()=>{let t="";if(h())if(window.tinyMCE||document.querySelector("#wp-content-wrap.html-active"))t=H();else{const n=window.setInterval(()=>{window.tinyMCE&&(window.clearInterval(n),t=H())},50)}return y()&&(t=window.wp.data.select("core/editor").getEditedPostContent(),t=it(t),t=ct(t,st)),t||(t=at()),m().currentPost.descriptionIncludeCustomFields&&(t=t+ot()),t=t.replace(rt,""),t},Ht=async(t=!0)=>{let e=lt();const n=x();if(e!==n){e=n;const o=m();if(g().updatePostContent(e),!t)return;new T().runAnalysis({postId:o.currentPost.id,postData:{...o.currentPost},content:x(),slug:A()})}},H=()=>{let t="";const e=window.tinyMCE?window.tinyMCE.get("content"):"";if(document.querySelector("#wp-content-wrap.tmce-active")&&e)t=e.getContent({format:"raw"});else{const n=document.querySelector("textarea#content");t=n?n.value:""}return t};export{T,$ as a,x as b,Qt as c,Lt as d,$t as e,Nt as f,L as g,Gt as h,Ft as i,Xt as j,It as k,b as m,Zt as n,Jt as r,nt as s,Bt as t};
