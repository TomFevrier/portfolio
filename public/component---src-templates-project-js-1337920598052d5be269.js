(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{250:function(e,t,a){"use strict";a.r(t);a(264),a(63);var n=a(0),r=a.n(n),i=a(143),o=a(260),c=a.n(o),l=a(299),s=a.n(l),d=a(258),p=a(256),m=(a(351),a(352)),u=a(270),f=function(e){var t=e.id;return r.a.createElement(i.StaticQuery,{query:"3026677231",render:function(e){var a=e.allStrapiProject.edges.find(function(e){return e.node.id=="Project_"+t}).node;return r.a.createElement(u.a,a)},data:m})},h=a(233),b=a.n(h),g=function(e){return r.a.createElement("div",{className:b.a.container,onClick:e.onClick,style:{opacity:e.lightboxOpen?1:0,pointerEvents:e.lightboxOpen?"auto":"none"}},r.a.createElement("div",{className:b.a.lightbox,onClick:function(e){return e.stopPropagation()},style:{transform:e.lightboxOpen?"translate(-50%, -50%) scale(1)":"translate(-50%, -50%) scale(0.8)"}},e.imgSrc&&r.a.createElement(c.a,{fluid:e.imgSrc.childImageSharp.fluid}),r.a.createElement("span",{className:b.a.close,onClick:e.onClick},"×")))},E=a(234),w=a.n(E);a(235);function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var A=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={lightboxOpen:!1,imgSrc:null},a.enlarge=a.enlarge.bind(C(a)),a.close=a.close.bind(C(a)),a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var i=n.prototype;return i.enlarge=function(e){console.log("enlarging"),this.setState({lightboxOpen:!0,imgSrc:e})},i.close=function(){console.log("closing"),this.setState({lightboxOpen:!1})},i.render=function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:w.a.grid},this.props.strapiProject.pictures.map(function(t){return r.a.createElement("li",{key:t.id,className:w.a.item,onClick:function(){return e.enlarge(t.localFile)}},r.a.createElement(c.a,{fluid:t.localFile.childImageSharp.fluid}))})),r.a.createElement(g,{lightboxOpen:this.state.lightboxOpen,imgSrc:this.state.imgSrc,onClick:this.close}))},n}(r.a.Component),k=a(236),v=a.n(k);a.d(t,"query",function(){return H});t.default=function(e){var t=e.data;return r.a.createElement(d.a,null,r.a.createElement(p.a,{title:t.strapiProject.title}),r.a.createElement("article",null,r.a.createElement("div",{className:v.a.main},r.a.createElement("h1",null,t.strapiProject.title),r.a.createElement("p",null,r.a.createElement(i.Link,{to:"/media/"+t.strapiProject.publisher.slug,className:v.a.publisher},r.a.createElement("span",null,t.strapiProject.publisher.name)),r.a.createElement("span",{className:v.a.date}," — Publié le ",new Date(t.strapiProject.date).toLocaleDateString("fr-FR",{day:"numeric",month:"long",year:"numeric"}))),t.strapiProject.authors&&r.a.createElement("p",null,"Avec ",t.strapiProject.authors),r.a.createElement("a",{href:t.strapiProject.link,target:"_blank",rel:"noopener noreferrer"},"Lien"),(t.strapiProject.related||t.strapiProject.related_auto)&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Dans le même genre..."),r.a.createElement("ul",{className:v.a.grid},t.strapiProject.related&&t.strapiProject.related.map(function(e){return r.a.createElement("li",{key:e.id,className:v.a.item},r.a.createElement(f,e))}),t.strapiProject.related_auto&&t.strapiProject.related_auto.map(function(e){return r.a.createElement("li",{key:e.id,className:v.a.item},r.a.createElement(f,e))})))),r.a.createElement("aside",null,t.strapiProject.video&&r.a.createElement("a",{href:t.strapiProject.link,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(s.a,{url:t.strapiProject.video.publicURL,width:"100%",height:"auto",playing:!0,loop:!0})),t.strapiProject.pictures&&r.a.createElement(A,t))))};var H="201451059"},255:function(e){e.exports={data:{site:{siteMetadata:{title:"Tom Février",description:"Datajournalisme et nouveaux formats",author:"Tom Février",menuLinks:[{name:"À propos",link:"/a-propos/"},{name:"Projets",link:"/projets/"},{name:"Parcours",link:"/parcours/"},{name:"Contact",link:"/contact/"}]}}}}},256:function(e,t,a){"use strict";var n=a(257),r=a(0),i=a.n(r),o=a(269),c=a.n(o);function l(e){var t=e.description,a=e.lang,r=e.meta,o=e.title,l=n.data.site,s=t||l.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:o,titleTemplate:l.siteMetadata.title+" | %s",meta:[{name:"description",content:s},{property:"og:title",content:o},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:s}].concat(r)})}l.defaultProps={lang:"fr",meta:[],description:""},t.a=l},257:function(e){e.exports={data:{site:{siteMetadata:{title:"Tom Février",description:"Datajournalisme et nouveaux formats",author:"Tom Février"}}}}},258:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(143),o=(a(254),a(265)),c=a(267),l=(a(63),a(264),a(255)),s=a(259),d=a.n(s),p=a(228),m=a.n(p),u=function(e){e.siteTitle;var t=e.homepage,a=l.data.site;return r.a.createElement("header",null,r.a.createElement("div",null,r.a.createElement("h1",{style:{margin:"-0.2rem 0 0"}},r.a.createElement(d.a,{fade:!0,to:"/"},r.a.createElement("svg",{className:t?m.a.animated:m.a.still,width:"265",height:"47",viewBox:"0 0 265 47",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M7.01672 23.56H1.29672V17.48H22.0567V23.56H16.3367V45H7.01672V23.56Z",stroke:"white",strokeWidth:"1.5"}),r.a.createElement("path",{d:"M38.4014 45.64C35.5214 45.64 32.9614 45.0267 30.7214 43.8C28.5081 42.5733 26.7747 40.88 25.5214 38.72C24.2947 36.5333 23.6814 34.0533 23.6814 31.28C23.6814 28.48 24.2947 25.9867 25.5214 23.8C26.7747 21.6133 28.5081 19.92 30.7214 18.72C32.9614 17.4933 35.5214 16.88 38.4014 16.88C41.2814 16.88 43.8281 17.4933 46.0414 18.72C48.2814 19.92 50.0147 21.6133 51.2414 23.8C52.4947 25.96 53.1214 28.4533 53.1214 31.28C53.1214 34.0533 52.4947 36.5333 51.2414 38.72C50.0147 40.88 48.2814 42.5733 46.0414 43.8C43.8014 45.0267 41.2547 45.64 38.4014 45.64ZM38.4014 38.36C40.0814 38.36 41.4547 37.7067 42.5214 36.4C43.6147 35.0933 44.1614 33.3733 44.1614 31.24C44.1614 29.8267 43.9081 28.5733 43.4014 27.48C42.9214 26.36 42.2414 25.4933 41.3614 24.88C40.4814 24.24 39.4814 23.92 38.3614 23.92C37.2681 23.92 36.2814 24.24 35.4014 24.88C34.5214 25.4933 33.8414 26.36 33.3614 27.48C32.8814 28.5733 32.6414 29.8267 32.6414 31.24C32.6414 33.3733 33.1747 35.0933 34.2414 36.4C35.3081 37.7067 36.6947 38.36 38.4014 38.36Z",stroke:"white",strokeWidth:"1.5"}),r.a.createElement("path",{d:"M56.9555 17.48H65.2755L72.1555 30.84L78.8755 17.48H87.1955V45H78.8755V30.32L73.7955 39.92H70.3955L65.2755 30.32V45H56.9555V17.48Z",stroke:"white",strokeWidth:"1.5"}),r.a.createElement("path",{d:"M99.8852 17.48H118.845V23.56H108.485V29.12H118.085V34.16H108.485V45H99.8852V17.48Z",stroke:"white",strokeWidth:"1.5"}),r.a.createElement("path",{d:"M122.698 17.48H142.018V23.56H132.418V28.56H141.178V33.6H132.418V38.92H142.018V45H122.698V17.48ZM127.498 10.2L139.218 2L143.258 9.16L129.938 14.48L127.498 10.2Z",stroke:"white",strokeWidth:"1.5"}),r.a.createElement("path",{d:"M143.967 17.48H153.007L157.247 34.64L161.487 17.48H170.927L162.327 45H152.127L143.967 17.48Z",stroke:"white",strokeWidth:"1.5"}),r.a.createElement("path",{d:"M194.202 45.64C189.188 45.64 186.122 43.32 185.002 38.68L184.002 34.56H182.122V45H173.362V17.48H185.482C187.775 17.48 189.788 17.8267 191.522 18.52C193.282 19.1867 194.642 20.1333 195.602 21.36C196.562 22.5867 197.042 24 197.042 25.6C197.042 27.3867 196.602 28.8933 195.722 30.12C194.868 31.32 193.535 32.3067 191.722 33.08C191.908 34.0933 192.122 35.0133 192.362 35.84C192.682 36.8533 193.122 37.56 193.682 37.96C194.242 38.36 195.055 38.56 196.122 38.56C196.495 38.56 197.082 38.5067 197.882 38.4V44.92C196.628 45.4 195.402 45.64 194.202 45.64ZM183.642 28.96C185.615 28.96 187.002 28.7467 187.802 28.32C188.628 27.8667 189.042 27.1067 189.042 26.04C189.042 25.1333 188.708 24.48 188.042 24.08C187.375 23.6533 186.322 23.44 184.882 23.44H182.122V28.96H183.642Z",stroke:"white",strokeWidth:"1.5"}),r.a.createElement("path",{d:"M201.291 17.48H210.531V45H201.291V17.48Z",stroke:"white",strokeWidth:"1.5"}),r.a.createElement("path",{d:"M215.745 17.48H235.065V23.56H225.465V28.56H234.225V33.6H225.465V38.92H235.065V45H215.745V17.48Z",stroke:"white",strokeWidth:"1.5"}),r.a.createElement("path",{d:"M260.374 45.64C255.36 45.64 252.294 43.32 251.174 38.68L250.174 34.56H248.294V45H239.534V17.48H251.654C253.947 17.48 255.96 17.8267 257.694 18.52C259.454 19.1867 260.814 20.1333 261.774 21.36C262.734 22.5867 263.214 24 263.214 25.6C263.214 27.3867 262.774 28.8933 261.894 30.12C261.04 31.32 259.707 32.3067 257.894 33.08C258.08 34.0933 258.294 35.0133 258.534 35.84C258.854 36.8533 259.294 37.56 259.854 37.96C260.414 38.36 261.227 38.56 262.294 38.56C262.667 38.56 263.254 38.5067 264.054 38.4V44.92C262.8 45.4 261.574 45.64 260.374 45.64ZM249.814 28.96C251.787 28.96 253.174 28.7467 253.974 28.32C254.8 27.8667 255.214 27.1067 255.214 26.04C255.214 25.1333 254.88 24.48 254.214 24.08C253.547 23.6533 252.494 23.44 251.054 23.44H248.294V28.96H249.814Z",stroke:"white",strokeWidth:"1.5"})))),r.a.createElement("nav",null,r.a.createElement("ul",null,a.siteMetadata.menuLinks.map(function(e){return r.a.createElement("li",{key:e.link},r.a.createElement(d.a,{paintDrip:!0,color:"rebeccapurple",to:e.link},e.name))})))))};u.defaultProps={siteTitle:""};var f=u,h=a(229),b=a.n(h);"undefined"!=typeof window&&a(268)('a[href*="#"]');var g=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={showBackToTop:!1},a.handleScroll=a.handleScroll.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a)),a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var l=n.prototype;return l.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},l.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},l.handleScroll=function(){document.body.scrollTop>200||document.documentElement.scrollTop>200?this.setState({showBackToTop:!0}):this.setState({showBackToTop:!1})},l.render=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{homepage:this.props.homepage}),r.a.createElement("div",{className:b.a.wrapper},r.a.createElement(i.Link,{to:window.location.pathname+"/#"},r.a.createElement(o.a,{className:b.a.backToTop,style:{opacity:this.state.showBackToTop?1:0,pointerEvents:this.state.showBackToTop?"auto":"none"},icon:c.a,size:"2x"})),r.a.createElement("main",null,this.props.children),r.a.createElement("footer",null,"© ",(new Date).getFullYear()," - Tom Février",r.a.createElement("br",null),"Propulsé par"," ",r.a.createElement("a",{href:"https://www.gatsbyjs.org",target:"_blank",rel:"noopener noreferrer"},"Gatsby")," ","&"," ",r.a.createElement("a",{href:"http://strapi.io",target:"_blank",rel:"noopener noreferrer"},"Strapi"))))},n}(r.a.Component);t.a=g},270:function(e,t,a){"use strict";a(63);var n=a(0),r=a.n(n),i=(a(143),a(260)),o=a.n(i),c=a(259),l=a.n(c),s=a(230),d=a.n(s);t.a=function(e){return r.a.createElement(l.a,{paintDrip:!0,color:"rebeccapurple",to:"/projet/"+e.slug},r.a.createElement("div",{className:d.a.card},e.featured_image&&r.a.createElement(o.a,{fluid:e.featured_image.childImageSharp.fluid,className:d.a.thumbnail}),r.a.createElement("div",{className:d.a.cache}),r.a.createElement("div",{className:d.a.info},r.a.createElement("h2",null,r.a.createElement("span",null,e.title)),r.a.createElement("p",null,"number"!=typeof e.publisher&&r.a.createElement("span",null,r.a.createElement("b",null,e.publisher.name)," —"," "),r.a.createElement("span",null,new Date(e.date).toLocaleDateString("fr-FR"))))))}},352:function(e){e.exports={data:{allStrapiProject:{edges:[{node:{id:"Project_5d930d44308d340f83ed874e",slug:"oscars",title:"Pourquoi une telle différence entre les goûts du public et les palmarès des Oscars ?",date:"2019-02-22T00:00:00.000Z",featured_image:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsSAAALEgHS3X78AAACBklEQVQ4y5WTW2/TQBCF8/9/Aq9IgJCQeKYIECkV0BYShaZNk8axnTi+rHfXt7XDy+HsOokQQmr6MJrZzeSbMzPrwa5ssKt/oy1beF9vsPwywcP5GKvvU/i05cUE8+EYwfUtzxPMPlwyjznDEeafrpk/Qpnk2FUN2qLCQMYpsmCKRoQoowV0eA8VPEB6MxThDPHtOdbTH8iDANKfMp5AeAsof8ncNYpNAiNzdGXdA8ssgbx/hjp8iy59hyZ8AbN5jiZ4idqnD9/AhK94fo0m+ggTndGfoc2G9J8JitHJMTo1R1dkGFS5hE4jHgSMKlmlRqdDJqZo1Yr3rC5vYLIrGOETdMF4hCoaw+Qe6u03gt+jyy97YJFJqCQjoHKSe2v2ngW0ppdMDgj+5ZS0OumLqgWhS95fMfbcHgalIDDNjjP4v9V7iNfDD8AiYRdsWa/Qyjva1irMIZPHgNaoVMf0imqWfSxZQPx0xUxClTqyM1ScoXhcYVH0I6Dv9NapsipbnaLJqDCfkFH2CtVJCgnUolfqZly79lsuzUirdsMRqKcAq79UHhbHF6DXrn0j7tw4+qWcDDy0r92fXczN2udin5Z9egPtlpI6oNHlidByb1Sp+F7l4njuW+ZS7LdooU8zw5btlzJjrN2dA8bBGiKKkVnbbI9m78Q/d0eLrLe/8xvf+o5hR/cHJEwfG5MKNgQAAAAASUVORK5CYII=",aspectRatio:1.3817073170731706,src:"/static/0058cdbaf8e9c4019605ed66d3592905/59139/80aff6f5156df7a7ba040deb839cbe38.png",srcSet:"/static/0058cdbaf8e9c4019605ed66d3592905/d3809/80aff6f5156df7a7ba040deb839cbe38.png 150w,\n/static/0058cdbaf8e9c4019605ed66d3592905/fdbb0/80aff6f5156df7a7ba040deb839cbe38.png 300w,\n/static/0058cdbaf8e9c4019605ed66d3592905/59139/80aff6f5156df7a7ba040deb839cbe38.png 600w,\n/static/0058cdbaf8e9c4019605ed66d3592905/cb30f/80aff6f5156df7a7ba040deb839cbe38.png 900w,\n/static/0058cdbaf8e9c4019605ed66d3592905/0bf3b/80aff6f5156df7a7ba040deb839cbe38.png 1133w",sizes:"(max-width: 600px) 100vw, 600px"}}},publisher:{name:"Slate.fr"}}},{node:{id:"Project_5d930e22308d340f83ed8757",slug:"koh-data",title:"Qui va remporter « Koh-Lanta » 2019 ? La réponse des statistiques",date:"2019-05-17T00:00:00.000Z",featured_image:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsTAAALEwEAmpwYAAADf0lEQVQ4yz2U+1NaVxSF+aOb6dQk6qTVTiaT1InTGDOmNSKgGK2ihiQq4iiI4hMfPAXug6fIGy7SJF/3Re0P59599r1n7bXWOftYOvUmt40WjXKN62KpFxu1BobkzXfHjGWY+aKeJXJ2TjIS40pGMhojHU8QO7/kKhylXa1jMR+3LYOqopDYXKdr3P4P1Gm2MQSocw9YkYKB7R22PZvs+3fxebfZWvOy/vkLQX+gt85SzhfR0wplPUfq6Jx/2watSo2uFNHCEbLCwIzNnAlaLtxQL1V6CppS4GxjHTWZxhBiptoeoJZOkT69YvWtm1azSatcpSMgudAJhYtzuu1b2gLYrjUJH3mo5DOyuCUSqxjlohSr9+TeM7wmq6loZyoLL61oyaB8MPjeMbj0XxDdi1CvVakWb+g22mSiQRrXhV5sgrSahlgjCqpNKfIgWUmjhNIsvnRQVMLCpsmPb138czscuY8ohILoF5cY7S5Zz1/UtAQ3NzUapRLnXi8h/zax0K5Y0n7wME02qjH5aBL/fAC+Qymv8eVvF4GVPdRogmP3V/GvRME7Tl2JEt3xcaPnUba2SHg+oceDAmhgqYqxajJJJqII4AdWxpxk1ZgYn2R9agbvuJO1sTn2HSskdre5WnpBQ09wFTjmzOcivjbFtn2VQmCOTvsblpp4Y0rOxTQ+PLLydeKj+JFAj+RwDs3ic3pYe7/Gke1PNJ8bdXmEukh2T3hIH6wQcwyxMPiWkncUsV0Ar2/QUin0sIK1b4q5oXl2P/vwudaZ/GmS2V8dWPudhCafk9t4LYC/U1WvWB5xkXK9IuZ8zuLwBEXvG2H4A0u9VBaJqnioYu+3Md3nYMu+wOnGJ6Z+tjM/PIt9cI6z6RHyS4/RFvqpZ1RWR10oc4+JC+DS8HtKW2PC8B4woyo9hrYn08w+c7D6ZhX3Ozf2pzacv81gE8CQ9RW55QHUfwapailWXrtIfxy4Yzg0wfUDw6Yc4ryu9zbF+suUSJzBMWgXsGkcA3ZmBm1Yn85yMvmCrDBU559Q09O4/lgkNdtH1PTw2TjFzdE7hubpNne6lMkTObggfhwhcRIhdhwmfnIXhyUfCe6hnO2TOt2XS0Incij/HvqJHuxyHjgkFTroXTAWs//ME98oV2hUqtJedWm1tvRvu9fX5jDnt72O6PSG2cdm/m5ufpdYzqBJ7j+fiBRb8ZU/QgAAAABJRU5ErkJggg==",aspectRatio:1.3333333333333333,src:"/static/9689fbfa083df5eeb0bec161ae93ec66/59139/9080d3c57764ef291428fb2b7e03cc4d.png",srcSet:"/static/9689fbfa083df5eeb0bec161ae93ec66/d3809/9080d3c57764ef291428fb2b7e03cc4d.png 150w,\n/static/9689fbfa083df5eeb0bec161ae93ec66/fdbb0/9080d3c57764ef291428fb2b7e03cc4d.png 300w,\n/static/9689fbfa083df5eeb0bec161ae93ec66/59139/9080d3c57764ef291428fb2b7e03cc4d.png 600w,\n/static/9689fbfa083df5eeb0bec161ae93ec66/007a4/9080d3c57764ef291428fb2b7e03cc4d.png 740w",sizes:"(max-width: 600px) 100vw, 600px"}}},publisher:{name:"Slate.fr"}}}]}}}}}]);
//# sourceMappingURL=component---src-templates-project-js-1337920598052d5be269.js.map