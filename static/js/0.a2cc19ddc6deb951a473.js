webpackJsonp([0],{"6Ohb":function(e,t){},wa3q:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});i("7+uW");var a={components:{},data:function(){return{crawlerPics:[{title:"Source Code",text:"Example of Code",url:"https://github.com/extra-curricular-schooling/ecs-development/tree/master/ECSDevServer/ECS.WebCrawler",image:"/static/images/CrawlerCodeEx.JPG"},{title:"Source Code",text:"Example of Code",url:"https://github.com/extra-curricular-schooling/ecs-development/tree/master/ECSDevServer/ECS.WebCrawler",image:"/static/images/CrawlerCodeEx2.JPG"},{title:"Crawler",text:"Example of Crawler running",url:"https://github.com/extra-curricular-schooling/ecs-development/tree/master/ECSDevServer/ECS.WebCrawler",image:"/static/images/CrawlerRunning.JPG"},{title:"Data Aggregation",text:"Example of Article Aggregation",url:"https://github.com/extra-curricular-schooling/ecs-development/tree/master/ECSDevServer/ECS.WebCrawler",image:"/static/images/CrawlerDB.JPG"}],ECSPics:[{title:"Dynamic Interest Tags",text:"Interests based on available articles",image:"/static/images/ECSInterests.JPG"},{title:"Dynamic Interest Menu",text:"Article menu based on chosen interests",image:"/static/images/ECSSideBar.JPG"},{title:"Article Framing",text:"View chosen article onsite",image:"/static/images/ECSArticleSample.JPG"},{title:"Sweepstakes",text:"Enter to win prizes!",image:"/static/images/ECSSweepstakes.JPG"},{title:"Beautiful Design",text:"Pleasant Visuals",image:"/static/images/ECSDesign.JPG"}],accordionSpecs:{div:{height:"400px",margin:"0px auto"},ul:{},li:{border:"2px solid white"},a:{},h2:{fontSize:"30px",textTransform:"uppercase"},p:{textTransform:"uppercase"}}}},methods:{redirect:function(e){window.open(e)}}},s={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"body"},[i("h1",[e._v("Article Web Crawler")]),e._v(" "),e._m(0),e._v(" "),i("button",{staticClass:"mobile-button",on:{click:function(t){e.redirect("https://github.com/extra-curricular-schooling/ecs-development/tree/master/ECSDevServer/ECS.WebCrawler")}}},[e._v("Check it out!")]),e._v(" "),i("vue-accordion",{staticClass:"accordion",attrs:{items:e.crawlerPics,styles:e.accordionSpecs}}),e._v(" "),i("br"),e._v(" "),e._m(1),e._v(" "),i("br"),e._v(" "),i("h1",[e._v("ECS (Extra Curricular Schooling)")]),e._v(" "),e._m(2),e._v(" "),i("vue-accordion",{staticClass:"accordion",attrs:{items:e.ECSPics,styles:e.accordionSpecs}}),e._v(" "),i("br"),e._v(" "),e._m(3),e._v(" "),i("br"),e._v(" "),i("div",{staticClass:"github"},[i("h1",[e._v("GitHub")]),e._v(" "),i("button",{staticClass:"GitHubButton",on:{click:function(t){e.redirect("https://github.com/hugogarcia354")}}},[i("span",[e._v("\n      Click Here to see the source control of many of the projects I have worked on, including the projects listed above.\n    ")])])]),e._v(" "),i("br"),i("br"),i("br")],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"scrolling-wrapper"},[i("div",{staticClass:"card"},[i("div",{staticClass:"awc1"}),e._v(" "),i("div",{staticClass:"mobileDescription"},[e._v("\n        Source Code\n        "),i("br"),e._v("\n        Example of Code\n      ")])]),e._v(" "),i("div",{staticClass:"card"},[i("div",{staticClass:"awc2"}),e._v(" "),i("div",{staticClass:"mobileDescription"},[e._v("\n        Source Code\n        "),i("br"),e._v("\n        Example of Code\n      ")])]),e._v(" "),i("div",{staticClass:"card"},[i("div",{staticClass:"awc3"}),e._v(" "),i("div",{staticClass:"mobileDescription"},[e._v("\n        Crawler\n        "),i("br"),e._v("\n        Example of Crawler running\n      ")])]),e._v(" "),i("div",{staticClass:"card"},[i("div",{staticClass:"awc4"}),e._v(" "),i("div",{staticClass:"mobileDescription"},[e._v("\n        Data Aggregation\n        "),i("br"),e._v("\n        Example of Article Aggregation\n      ")])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"description"},[e._v('\n    The Article Web Crawler is an application used by the ECS web site to aggregate news articles. Ran as an executable, the application can be ran at anytime and targets specific whitelisted websites. The application then "crawls" through each article on the site and matches the articles key tags with targeted keywords. If a match is found, then the article gets loaded on to the ECS database for use by the ECS User Base.\n      '),i("div",{staticClass:"projectSpecs"},[i("h2",[e._v("Project Specifications")]),e._v(" "),i("div",{staticClass:"specList"},[i("li",[e._v("Built with C#")]),e._v(" "),i("li",[e._v("Separate executable")]),e._v(" "),i("li",[e._v("Can be run from any machine and links to specified database")])])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"scrolling-wrapper"},[i("div",{staticClass:"card"},[i("div",{staticClass:"ecs1"}),e._v(" "),i("div",{staticClass:"mobileDescription"},[e._v("\n        Dynamic Interest Tags\n        "),i("br"),e._v("\n        Interests based on available articles\n      ")])]),e._v(" "),i("div",{staticClass:"card"},[i("div",{staticClass:"ecs2"}),e._v(" "),i("div",{staticClass:"mobileDescription"},[e._v("\n        Dynamic Interest Menu\n        "),i("br"),e._v("\n        Article menu based on chosen interests\n      ")])]),e._v(" "),i("div",{staticClass:"card"},[i("div",{staticClass:"ecs3"}),e._v(" "),i("div",{staticClass:"mobileDescription"},[e._v("\n        Article Framing\n        "),i("br"),e._v("\n        View chosen article onsite\n      ")])]),e._v(" "),i("div",{staticClass:"card"},[i("div",{staticClass:"ecs4"}),e._v(" "),i("div",{staticClass:"mobileDescription"},[e._v("\n        Sweepstakes\n        "),i("br"),e._v("\n        Enter to win prizes!\n      ")])]),e._v(" "),i("div",{staticClass:"card"},[i("div",{staticClass:"ecs5"}),e._v(" "),i("div",{staticClass:"mobileDescription"},[e._v("\n        Beautiful Design\n        "),i("br"),e._v("\n        Pleasant Visuals\n      ")])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"description"},[e._v("\n    A Single Page Web Application, ECS is a website that is directed to users that want to have an easy hub to acquire articles on their interests. Users choose from a set of interests and are then shown a list of articles they can read from. Once read, users earn points that can be used to enter raffles and win real prizes.  \n    "),i("div",{staticClass:"projectSpecs"},[i("h2",[e._v("Project Specifications")]),e._v(" "),i("div",{staticClass:"specList"},[i("li",[e._v("ASP.NET Server")]),e._v(" "),i("li",[e._v("Vue.JS FrontEnd")]),e._v(" "),i("li",[e._v("Using a hosted Database")]),e._v(" "),i("li",[e._v("Admin Capabilities")]),e._v(" "),i("li",[e._v("User Account Capabilities")])])])])}]};var r=i("VU/8")(a,s,!1,function(e){i("6Ohb")},"data-v-47da6b2d",null);t.default=r.exports}});
//# sourceMappingURL=0.a2cc19ddc6deb951a473.js.map