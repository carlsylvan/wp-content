import{_ as g}from"./js/_plugin-vue_export-helper.8823f7c1.js";import{r as c,o as r,c as l,a as p,F as b,h as v,n as y,i as S,b as u,D as C,f as d,g as P,t as m,w,d as I,G as T}from"./js/vue.runtime.esm-bundler.0bc3eabf.js";import{l as x}from"./js/index.43fa9b03.js";import{l as E}from"./js/index.888aa896.js";import{l as k}from"./js/index.0b123ab1.js";import{u as A,e as L,l as N}from"./js/links.d8ef3c22.js";import{C as B}from"./js/Card.a96d9a32.js";import{C as D}from"./js/SocialProfiles.753365e4.js";import{S as $}from"./js/LogoGear.5cfaa040.js";import{e as F}from"./js/elemLoaded.9a6eb745.js";import"./js/translations.6e7b2383.js";import"./js/default-i18n.3881921e.js";import"./js/constants.d0e2b74f.js";import"./js/Caret.11ded1aa.js";import"./js/isArrayLikeObject.10b615a9.js";import"./js/Tooltip.eebec260.js";import"./js/Slide.c3dfb2b1.js";import"./js/Checkbox.ec923721.js";import"./js/Checkmark.edd0f833.js";import"./js/Textarea.b5d7c6eb.js";import"./js/SettingsRow.aa479f88.js";import"./js/Row.7b93a0cf.js";/* empty css                                               */import"./js/Twitter.5c7bf0bf.js";const R={setup(){return{rootStore:A(),settingsStore:L()}},components:{CoreCard:B,CoreSocialProfiles:D,SvgLogoGear:$},data(){return{activeTabIndex:0,strings:{socialProfiles:this.$t.__("Social Profiles",this.$td),description:this.$t.__("To let search engines know which profiles are associated with this user, enter them below:",this.$td)}}},methods:{setActiveTab(e){const o=this.activeTabIndex;switch(this.activeTabIndex=e,this.activeTabObject.slug){case"personal-options":document.getElementById("your-profile").childNodes.forEach(t=>{t.style&&(t.style.display="block")});break;case"social-profiles":document.getElementById("your-profile").childNodes.forEach(t=>{t.id==="aioseo-user-profile-tab"||t.className==="submit"||!t.style||(t.style.display="none")});break;case"customer-data":this.activeTabIndex=o,window.location.href=this.rootStore.aioseo.urls.home+"/wp-admin/admin.php?page=followup-emails-reports&tab=reportuser_view&email="+encodeURIComponent(this.settingsStore.userProfile.userData.user_email)+"&user_id="+this.settingsStore.userProfile.userData.ID;break}},updateHiddenInputField(e){document.getElementById("aioseo-user-social-profiles").value=JSON.stringify(e)}},computed:{tabs(){const e=[{label:this.$t.__("Personal Options",this.$td),slug:"personal-options"},{label:this.$t.__("Social Profiles",this.$td),slug:"social-profiles",svg:"svg-logo-gear"}];return this.settingsStore.userProfile.isWooCommerceFollowupEmailsActive&&e.push({label:this.$t.__("Customer Data",this.$td),slug:"customer-data"}),e},activeTabObject(){return this.tabs[this.activeTabIndex]}},async created(){this.updateHiddenInputField(this.settingsStore.userProfile.profiles)},mounted(){const e=new URLSearchParams(window.location.search);e&&e.get("social-profiles")&&this.setActiveTab(1)}},U={id:"aioseo-user-profile-tab"},V={class:"navigation-bar"},G=["onClick"],H={class:"aioseo-settings-row aioseo-section-description"};function O(e,o,t,f,a,i){const h=c("CoreSocialProfiles"),_=c("CoreCard");return r(),l("div",U,[p("div",V,[(r(!0),l(b,null,v(i.tabs,(s,n)=>(r(),l("a",{key:n,class:y({active:n===a.activeTabIndex}),href:"#",onClick:S(J=>i.setActiveTab(n),["prevent"])},[s.svg?(r(),u(C(s.svg),{key:0})):d("",!0),P(" "+m(s.label),1)],10,G))),128))]),i.activeTabObject.slug==="social-profiles"?(r(),u(_,{key:0,slug:"userProfiles","header-text":a.strings.socialProfiles,"no-slide":"",toggles:!1},{default:w(()=>[p("div",H,m(a.strings.description),1),I(h,{userProfiles:f.settingsStore.userProfile.profiles,onUpdated:o[0]||(o[0]=s=>i.updateHiddenInputField(s))},null,8,["userProfiles"])]),_:1},8,["header-text"])):d("",!0)])}const j=g(R,[["render",O]]),q=()=>{const e=document.getElementById("your-profile");if(!e)return;const o=document.createElement("div");o.id="aioseo-user-profile-tab";const t=document.createElement("input");t.id="aioseo-user-social-profiles",t.name="aioseo-user-social-profiles",t.type="hidden",e.prepend(t),e.prepend(o)},z=()=>{let e=T({...j,name:"Standalone/UserProfileTab"});e=x(e),e=E(e),e=k(e),N(e),e.mount("#aioseo-user-profile-tab")};F("#your-profile","profilePageLoaded");document.addEventListener("animationstart",function(e){e.animationName==="profilePageLoaded"&&(q(),z())});