(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a.p+"static/media/nophoto.76ebd871.svg"},30:function(e,t,a){},31:function(e,t,a){e.exports=a.p+"static/media/logo.439f390c.svg"},32:function(e,t,a){e.exports=a(85)},37:function(e,t,a){},75:function(e,t,a){},80:function(e,t,a){},82:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(18),l=a.n(s),o=(a(37),a(2)),i=a(3),c=a(5),m=a(4),u=a(6),p=a(9),d=a.n(p),h=a(87),g=a(88),v=a(89),f=a(13),b=a.n(f),E=a(21),y=a.n(E);function O(){return r.a.createElement("h1",{className:"loading"},"Page is Loading...")}var N=a(11),_=a.n(N),k=a(86),j=(a(75),function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.location.pathname,t=e.slice(6,e.indexOf("-"));this.props.onMount(t)}},{key:"componentDidUpdate",value:function(e){var t=this.props.location.pathname,a=e.location.pathname,n=t.slice(6,t.indexOf("-"));a.slice(6,a.indexOf("-"))!==n&&this.props.onMount(n),window.scrollTo(0,0)}},{key:"render",value:function(){if(null===this.props.bioData.castName||void 0===this.props.filmography)return r.a.createElement(O,null);var e=this.props.filmography.map(function(e,t){return r.a.createElement("div",{className:"filmography-container",key:t},r.a.createElement(k.a,{to:"/movie/".concat(e.id)},null===e.poster_path?r.a.createElement("img",{className:"filmography-no-photo",src:_.a,alt:"generic filler"}):r.a.createElement("img",{className:"filmography-no-photo",src:"https://image.tmdb.org/t/p/w1280/".concat(e.poster_path),alt:e.original_title}),r.a.createElement("p",{className:"filmography-title"},e.original_title),r.a.createElement("p",{className:"filmography-year"},e.release_date.substring(0,4))))});return r.a.createElement("div",{className:"profile-container"},r.a.createElement("div",{className:"profile"},null===this.props.bioData.castPhoto_path?r.a.createElement("img",{className:"no-profile-photo",src:"https://secure.hmepowerweb.com/Resources/Images/NoImageAvailableLarge.jpg",alt:"no poster found"}):r.a.createElement("img",{className:"profile-photo",src:"https://image.tmdb.org/t/p/w1280/".concat(this.props.bioData.castPhoto_path),alt:this.props.bioData.name}),r.a.createElement("div",{className:"profileData"},r.a.createElement("h1",{className:"profile-name"},this.props.bioData.castName),r.a.createElement("div",{className:"profile-details"},r.a.createElement("p",null,r.a.createElement("strong",null,"Date of Birth:"),r.a.createElement("br",null),r.a.createElement(y.a,{format:"MMMM Do, YYYY"},this.props.bioData.birthday)),null===this.props.bioData.deathday?null:r.a.createElement("p",null,r.a.createElement("strong",null,"Date of Death:"),r.a.createElement("br",null)," ",r.a.createElement(y.a,{format:"MMMM Do, YYYY"},this.props.bioData.deathday)),r.a.createElement("p",null,r.a.createElement("strong",null,"Biography"),r.a.createElement("br",null),this.props.bioData.bio)))),r.a.createElement("h2",null,"Filmography"),r.a.createElement(b.a,{className:"filmography-list",speed:1e3,slidesToShow:5,slidesToScroll:4,responsive:[{breakpoint:1350,settings:{slidesToShow:4,slidesToScroll:4,infinite:!0}},{breakpoint:1050,settings:{slidesToShow:3,slidesToScroll:2,infinite:!0}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0}}]},e))}}]),t}(n.Component)),w=(a(30),function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.location.pathname,t=e.slice(7,e.indexOf("-"));this.props.onMount(t)}},{key:"componentDidUpdate",value:function(e){var t=this.props.location.pathname,a=e.location.pathname,n=a.slice(7,a.indexOf("-")),r=t.slice(7,t.indexOf("-"));n!==r&&this.props.onMount(r)}},{key:"render",value:function(){if(0===this.props.numberOfResults)return r.a.createElement(O,null);var e=this.props.searchResults.map(function(e,t){return r.a.createElement("div",{className:"movie-card",key:t},r.a.createElement(k.a,{to:"/movie/".concat(e.id)},null===e.poster_path?r.a.createElement("img",{className:"results-no-poster",src:_.a,alt:"no poster found"}):r.a.createElement("img",{className:"results-poster",src:"https://image.tmdb.org/t/p/w1280/".concat(e.poster_path),alt:e.original_title}),r.a.createElement("div",{className:"movie-search-info"},r.a.createElement("h1",null,e.original_title," (",e.release_date.substring(0,4),")"),r.a.createElement("p",null,e.overview))))});return r.a.createElement("section",{id:"results",className:"results"},r.a.createElement("p",null,"Your search returned ".concat(this.props.numberOfResults," results.")),e)}}]),t}(n.Component)),S=a(31),M=a.n(S),D=(a(80),function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"onSubmit",value:function(e){if(e.preventDefault(),""===this.input.value)this.props.history.push("/searcherror");else{if(this.props.onSearch){var t=this.input.value;this.props.onSearch(t)}this.props.history.push("/results"),this.input.value=""}}},{key:"render",value:function(){var e=this;return r.a.createElement("header",{className:"App-header"},r.a.createElement(k.a,{to:"/movie/369972",className:"logo-link"},r.a.createElement("img",{src:M.a,className:"App-logo",alt:"logo"})),r.a.createElement("form",{className:"search-form",onSubmit:function(t){return e.onSubmit(t)}},r.a.createElement("input",{type:"text",name:"userInput",ref:function(t){return e.input=t}}),r.a.createElement("span",{className:"search-bar"}),r.a.createElement("label",{htmlFor:"userInput"},"Enter a movie title..."),r.a.createElement("button",{className:"search-button"})),r.a.createElement("hr",null))}}]),t}(n.Component)),R=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.data;return r.a.createElement("div",{className:"movie"},null===e.poster_path?r.a.createElement("img",{className:"movie-page-no-poster",src:_.a,alt:"no poster found"}):r.a.createElement("img",{className:"movie-page-poster",src:"https://image.tmdb.org/t/p/w1280/".concat(e.poster_path),alt:e.original_title}),r.a.createElement("div",{className:"movie-data"},r.a.createElement("div",{className:"movie-headline"},r.a.createElement("h1",null,e.title," (",e.release_date.substring(0,4),")"),r.a.createElement("h4",null,e.tagline)),r.a.createElement("div",{className:"movie-details"},0===e.budget?r.a.createElement("p",null,r.a.createElement("strong",null,"Budget"),r.a.createElement("br",null),"N/A"):r.a.createElement("p",null,r.a.createElement("strong",null,"Budget"),r.a.createElement("br",null),e.budget.toLocaleString()),0===e.revenue?r.a.createElement("p",null,r.a.createElement("strong",null,"Revenue"),r.a.createElement("br",null),"N/A"):r.a.createElement("p",null,r.a.createElement("strong",null,"Revenue"),r.a.createElement("br",null),e.revenue.toLocaleString()),r.a.createElement("p",null,r.a.createElement("strong",null,"Runtime"),r.a.createElement("br",null),e.runtime," minutes"),r.a.createElement("div",{className:"genres"},r.a.createElement("p",null,r.a.createElement("strong",null,"Genres"),r.a.createElement("br",null),e.genres.map(function(e,t){return r.a.createElement("span",{key:t,className:"genre-link"},r.a.createElement(k.a,{to:"/genre/".concat(e.id,"-").concat(e.name)},e.name)," ")})))),r.a.createElement("div",{className:"movie-plot"},r.a.createElement("p",null,r.a.createElement("strong",null,"Plot"),r.a.createElement("br",null),e.overview))))}}]),t}(n.Component),T=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.similarMovieData.map(function(e,t){return r.a.createElement("div",{key:t,className:"similar-movie-container"},r.a.createElement(k.a,{to:"/movie/".concat(e.id)},null===e.poster_path?r.a.createElement("img",{className:"similar-movie-nophoto",src:_.a,alt:"no profile found"}):r.a.createElement("img",{className:"similar-movie-photo",src:"https://image.tmdb.org/t/p/w1280/".concat(e.poster_path),alt:e.original_title}),r.a.createElement("p",{className:"similar-movie-title"},e.original_title," (",e.release_date.substring(0,4),")")))});return r.a.createElement("div",{className:"similar-movies"},r.a.createElement("h2",null,"Similar Movies"),r.a.createElement(b.a,{className:"slider-list",speed:1e3,slidesToShow:5,slidesToScroll:4,responsive:[{breakpoint:1350,settings:{slidesToShow:4,slidesToScroll:4,infinite:!0}},{breakpoint:1050,settings:{slidesToShow:3,slidesToScroll:2,infinite:!0}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0}}]},e))}}]),t}(n.Component),x=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.castData.map(function(e,t){return r.a.createElement("div",{key:t,className:"cast-container"},r.a.createElement(k.a,{to:"/cast/".concat(e.id,"-").concat(e.name)},null===e.profile_path?r.a.createElement("img",{className:"cast-nophoto",src:_.a,alt:"no profile found"}):r.a.createElement("img",{className:"cast-photo",src:"https://image.tmdb.org/t/p/w1280/".concat(e.profile_path),alt:e.name}),r.a.createElement("p",{className:"actor"},e.name),r.a.createElement("p",{className:"character"},e.character)))});return r.a.createElement("div",{className:"cast"},r.a.createElement("h2",null,"Cast"),r.a.createElement(b.a,{className:"slider-list",speed:1e3,slidesToShow:5,slidesToScroll:4,responsive:[{breakpoint:1350,settings:{slidesToShow:4,slidesToScroll:4,infinite:!0}},{breakpoint:1050,settings:{slidesToShow:3,slidesToScroll:2,infinite:!0}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0}}]},e))}}]),t}(n.Component),I=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.videoData.map(function(e,t){var a="https://www.youtube.com/embed/".concat(e.key);return r.a.createElement("div",{className:"video-container",key:t},r.a.createElement("iframe",{title:e.name,id:"ytplayer",type:"text/html",src:a,frameBorder:"0"}),r.a.createElement("p",null,e.name))});return r.a.createElement("div",{className:"videos"},r.a.createElement("h2",null,"Trailers & Videos"),r.a.createElement(b.a,{className:"video-list",speed:1e3,slidesToShow:1,slidesToScroll:1},e))}}]),t}(n.Component),C=(a(82),function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.location.pathname.slice(7);this.props.onMount(e)}},{key:"componentDidUpdate",value:function(e){var t=this.props.location.pathname,a=e.location.pathname,n=t.slice(7);a.slice(7)!==n&&this.props.onMount(n),window.scrollTo(0,0)}},{key:"render",value:function(){var e=this.props.data,t=this.props.data.cast,a=this.props.data.similarMovies,n=this.props.data.videos;return e.title?r.a.createElement("div",{className:"movie-container"},r.a.createElement(R,{data:e}),r.a.createElement(x,{castData:t}),r.a.createElement(T,{similarMovieData:a}),r.a.createElement(I,{videoData:n})):r.a.createElement(O,null)}}]),t}(n.Component));var B=function(){return r.a.createElement("p",null,"Please enter a search term.")},U=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){if(0===this.props.numberOfResults)return r.a.createElement(O,null);var e=this.props.searchResults.map(function(e,t){return r.a.createElement("div",{className:"movie-card",key:t},r.a.createElement(k.a,{to:"/movie/".concat(e.id)},null===e.poster_path?r.a.createElement("img",{className:"results-no-poster",src:_.a,alt:"no poster found"}):r.a.createElement("img",{className:"results-poster",src:"https://image.tmdb.org/t/p/w1280/".concat(e.poster_path),alt:e.original_title}),r.a.createElement("div",{className:"movie-search-info"},r.a.createElement("h1",null,e.original_title," (",e.release_date.substring(0,4),")"),r.a.createElement("p",null,e.overview))))});return r.a.createElement("section",{id:"results",className:"results"},r.a.createElement("div",{className:"results-num"},r.a.createElement("p",null,"Your search returned ".concat(this.props.numberOfResults," results."))),e)}}]),t}(n.Component),Y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={numberOfResults:0,searchResults:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"getSearchResults",value:function(e){var t=this;this.setState({numberOfResults:0,searchResults:[]}),document.body.style.backgroundImage="",d.a.get("https://api.themoviedb.org/3/search/movie?api_key=8541c092938098d21b11f58a14dd114e&language=en&query=".concat(e)).then(function(e){t.setState({numberOfResults:e.data.total_results,searchResults:e.data.results})})}},{key:"getMoviesByGenre",value:function(e){var t=this;this.setState({numberOfResults:0}),document.body.style.backgroundImage="",d.a.get("https://api.themoviedb.org/3/discover/movie?api_key=8541c092938098d21b11f58a14dd114e&sort_by=vote_average.desc&include_adult=false&include_video=false&language=en-US&page=1&vote_count.gte=5000&with_genres=".concat(e)).then(function(e){t.setState({numberOfResults:e.data.total_results,searchResults:e.data.results})})}},{key:"getCastProfile",value:function(e){var t=this;this.setState({castName:null}),document.body.style.backgroundImage="",d.a.all([d.a.get("https://api.themoviedb.org/3/discover/movie?api_key=8541c092938098d21b11f58a14dd114e&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&with_cast=".concat(e,"&with_original_language=en")),d.a.get("https://api.themoviedb.org/3/person/".concat(e,"?api_key=8541c092938098d21b11f58a14dd114e&language=en-US"))]).then(d.a.spread(function(e,a){t.setState({numberOfResults:e.data.total_results,filmography:e.data.results,castId:a.data.id,birthday:a.data.birthday,deathday:a.data.deathday,castName:a.data.name,bio:a.data.biography,castPhoto_path:a.data.profile_path})}))}},{key:"getMovieById",value:function(e){var t=this;this.setState({title:null}),d.a.all([d.a.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=8541c092938098d21b11f58a14dd114e&language=en-US")),d.a.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=8541c092938098d21b11f58a14dd114e&language=en-US")),d.a.get("https://api.themoviedb.org/3/movie/".concat(e,"/videos?api_key=8541c092938098d21b11f58a14dd114e&language=en-US")),d.a.get("https://api.themoviedb.org/3/movie/".concat(e,"/similar?api_key=8541c092938098d21b11f58a14dd114e&language=en-US"))]).then(d.a.spread(function(e,a,n,r){t.setState({searchResults:[],movieId:e.data.id,title:e.data.original_title,poster_path:e.data.poster_path,backdrop_path:e.data.backdrop_path,budget:e.data.budget,revenue:e.data.revenue,genres:e.data.genres,overview:e.data.overview,tagline:e.data.tagline,release_date:e.data.release_date,runtime:e.data.runtime,cast:a.data.cast,videos:n.data.results,similarMovies:r.data.results}),window.innerWidth>910&&(document.body.style.backgroundImage="url('https://image.tmdb.org/t/p/original".concat(e.data.backdrop_path))}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.searchResults,n=t.numberOfResults,s=t.filmography;return r.a.createElement(h.a,{basename:"/movie-search"},r.a.createElement("main",{className:"App"},r.a.createElement(g.a,{exact:!0,path:"/",render:function(e){return e.pathname===window.location.pathname?null:r.a.createElement(v.a,{to:"/movie/369972"})}}),r.a.createElement(g.a,{path:"/",render:function(t){return r.a.createElement(D,Object.assign({onSearch:function(t){return e.getSearchResults(t)}},t))}}),r.a.createElement(g.a,{exact:!0,path:"/results",render:function(t){return r.a.createElement(U,Object.assign({searchResults:a,numberOfResults:n,onSelectMovie:function(t){return e.getMovieById(t)}},t))}}),r.a.createElement(g.a,{exact:!0,path:"/searcherror",component:B}),r.a.createElement(g.a,{exact:!0,path:"/genre/:id-:name",render:function(t){return r.a.createElement(w,Object.assign({searchResults:a,numberOfResults:n,onMount:function(t){return e.getMoviesByGenre(t)}},t))}}),r.a.createElement(g.a,{exact:!0,path:"/movie/:id",render:function(t){return r.a.createElement(C,Object.assign({data:e.state,onMount:function(t){return e.getMovieById(t)}},t))}}),r.a.createElement(g.a,{exact:!0,path:"/cast/:id-:name",render:function(t){return r.a.createElement(j,Object.assign({filmography:s,bioData:e.state,onMount:function(t){return e.getCastProfile(t)}},t))}})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,2,1]]]);
//# sourceMappingURL=main.f680be65.chunk.js.map