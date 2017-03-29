angular.module("amqApp").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<!doctype html><!--[if lt IE 7]>      <html class=\"no-js lt-ie9 lt-ie8 lt-ie7\"> <![endif]--><!--[if IE 7]>         <html class=\"no-js lt-ie9 lt-ie8\"> <![endif]--><!--[if IE 8]>         <html class=\"no-js lt-ie9\"> <![endif]--><!--[if gt IE 8]><!--><html lang=\"en\" ng-csp=\"\" ng-app=\"amqApp\"><!--<![endif]--><head><base href=\"/\"><meta charset=\"utf-8\"><meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\"><title>AngularJS amqApp</title><meta name=\"description\" content=\"Simple AngularJS amqApp to kick start your new project with SASS support and Gulp watch/build tasks\"><!-- mobile meta --><meta name=\"HandheldFriendly\" content=\"True\"><meta name=\"MobileOptimized\" content=\"320\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><link rel=\"shortcut icon\" type=\"image/x-icon\" href=\"images/favicon.ico\"><!--[if IE]>\n			<link rel=\"shortcut icon\" href=\"favicon.ico\">\n		<![endif]--><!-- or, set /favicon.ico for IE10 win --><meta name=\"msapplication-TileColor\" content=\"#f01d4f\"><!-- CSS --><!-- build:css css/style.min.css --><link rel=\"stylesheet\" href=\"bower_components/OwlCarousel/owl-carousel/owl.carousel.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"styles/style.css\"><!-- endbuild --></head><body class=\"main-wrapper\"><!--[if lt IE 8]>\n		    <p class=\"browserupgrade\">You are using an <strong>outdated</strong> browser. Please <a href=\"http://browsehappy.com/\">upgrade your browser</a> to improve your experience.</p>\n		<![endif]--><!-- Navigation --><main-nav></main-nav><!-- Main view for templates --><div data-ng-view=\"\" class=\"container\"></div></body><!-- Vendors --><!-- build:nonangularlibs js/nonangularlibs.js --><script type=\"text/javascript\" src=\"js/nonangular/jquery-1.11.2.min.js\"></script><!-- endbuild --><!-- Non-angular libraries --><!-- build:libs js/libs.js --><script type=\"text/javascript\" src=\"js/nonangular/lodash.min.js\"></script><script type=\"text/javascript\" src=\"js/scripts.js\"></script><script type=\"text/javascript\" src=\"bower_components/OwlCarousel/owl-carousel/owl.carousel.min.js\"></script><!-- endbuild --><!-- Angular external libraries for application --><!-- build:angularlibs js/angularlibs.js --><script type=\"text/javascript\" src=\"bower_components/angular/angular.js\"></script><script type=\"text/javascript\" src=\"bower_components/angular-route/angular-route.js\"></script><script type=\"text/javascript\" src=\"bower_components/angular-sanitize/angular-sanitize.js\"></script><!-- endbuild --><!-- Angular components --><!-- build:appcomponents js/appcomponents.js --><script type=\"text/javascript\" src=\"app/app.js\"></script><script type=\"text/javascript\" src=\"app/config.js\"></script><script type=\"text/javascript\" src=\"components/services/LocalStorage.service.js\"></script><script type=\"text/javascript\" src=\"components/services/queryService.service.js\"></script><script type=\"text/javascript\" src=\"components/directives/main.nav.directive.js\"></script><script type=\"text/javascript\" src=\"components/directives/responsive.nav.directive.js\"></script><script type=\"text/javascript\" src=\"components/directives/owl.slider.directive.js\"></script><!-- endbuild --><!-- Application sections --><!-- build:mainapp js/mainapp.js --><script type=\"text/javascript\" src=\"app/factory.js\"></script><script type=\"text/javascript\" src=\"app/controller.js\"></script><!-- endbuild --><!-- templates from $templateCache --><!-- build:templates --><!-- endbuild --><!-- Google Analytics: change UA-XXXXX-X to be your site\'s ID. --><script>(function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=\n	    function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;\n	    e=o.createElement(i);r=o.getElementsByTagName(i)[0];\n	    e.src=\'https://www.google-analytics.com/analytics.js\';\n	    r.parentNode.insertBefore(e,r)}(window,document,\'script\',\'ga\'));\n	    ga(\'create\',\'UA-XXXXX-X\',\'auto\');ga(\'send\',\'pageview\');</script></html>");
$templateCache.put("views/404.html","<!-- 404 --><div class=\"text-center\"><h4>Page Not Found</h4><h1>404</h1></div>");
$templateCache.put("views/search.html","<h2>Contact</h2><div class=\"container cf\"><div><p>Copyright (C) 2015 Jozef Butko<br><a href=\"http://www.jozefbutko.com/resume\">www.jozefbutko.com/resume</a><br><a href=\"http://www.github.com/jbutko\">www.github.com/jbutko</a><br><a href=\"http://www.twitter.com/jozefbutko\">@jozefbutko</a></p></div></div>");
$templateCache.put("views/home.html","<h2 class=\"text-center\">AngularJS amqApp</h2><!-- slider directive --><div myslider><ul class=\"slider\"><li class=\"image-slider\"><img src=\"https://unsplash.imgix.net/photo-1426200830301-372615e4ac54?fit=crop&fm=jpg&h=725&q=75&w=1050\" alt=\"Image\"></li><li class=\"image-slider\"><img src=\"https://unsplash.imgix.net/photo-1421977870504-378093748ae6?fit=crop&fm=jpg&h=700&q=75&w=1050\" alt=\"Image\"></li><li class=\"image-slider\"><img src=\"https://ununsplash.imgix.net/photo-1421757295538-9c80958e75b0?fit=crop&fm=jpg&h=700&q=75&w=1050\" alt=\"Image\"></li><li class=\"image-slider\"><img src=\"https://unsplash.imgix.net/photo-1420745981456-b95fe23f5753?fit=crop&fm=jpg&h=700&q=75&w=1050\" alt=\"Image\"></li><li class=\"image-slider\"><img src=\"https://download.unsplash.com/photo-1415871989540-61fe9268d3c8\" alt=\"Image\"></li></ul></div><h3>Features</h3><div class=\"container cf\"><div><ul><li>* SASS support including sourceMaps</li><li>* Minimal CSS styling of the view</li><li>* Gulp watch, build and local server tasks</li><li>* Responsive navigation</li><li>* Owl slider directive</li><li>* Responsive navigation</li><li>* localStorage service for set, get, remove data</li><li>* queryService $http wrapper to handle calls</li><li>* clear folder structure</li><li>* less than 10 request in build version</li><li>* minified CSS and JS build files</li><li>* google analytics snippet</li></ul></div></div><div class=\"text-center\"><small>Images courtesy of <a target=\"_blank\" href=\"http://unsplash.com\">unsplash.com</a></small></div>");
$templateCache.put("views/build.html","<div class=\"container cf\"><div><h2>Download</h2><code>bower install angularjs-amqApp</code><br>or<br><code>git clone https://github.com/jbutko/AngularJS-amqApp.git</code><br><h2>1. Setup</h2><code>npm install</code><br>- install all npm and bower dependencies<br><small><strong>Note:</strong> If npm install fails during dependency installation it will be likely caused by gulp-imagemin. In that case remove gulp-imagemin dependency from package.json, run npm install again and then install gulp-imagemin separately with following command: npm install gulp-imagemin --save-dev</small><h2>2. Watch files</h2><code>gulp</code><br>- all SCSS/HTML will be watched for changes and injected into browser thanks to BrowserSync<h2>3. Build production version</h2><code>gulp build</code><br>- this will process following tasks:<br>* clean _build folder<br>* compile SASS files, minify and uncss compiled css<br>* copy and optimize images<br>* minify and copy all HTML files into $templateCache<br>* build index.html<br>* minify and copy all JS files<br>* copy fonts<br>* show build folder size<br><h2>4. Start webserver without watch task</h2><code>gulp server</code><h2>5. Start webserver from build folder</h2><code>gulp server-build</code></div></div>");
$templateCache.put("components/directives/main-nav.html","<!-- Main navigation --><header class=\"header\" role=\"banner\" itemscope itemtype=\"http://schema.org/WPHeader\"><div id=\"inner-header\" class=\"wrap container cf\"><!-- logo --><h1 id=\"logo\" class=\"text-hide h1 pull-left\" itemscope itemtype=\"http://schema.org/Organization\"><a href=\"#/\" rel=\"nofollow\"><img src=\"\" alt=\"\"></a></h1><!-- hamburger icon --><responsive-nav></responsive-nav><!-- nav --><nav role=\"navigation\" class=\"main-nav text-center\" itemscope itemtype=\"http://schema.org/SiteNavigationElement\"><ul class=\"menu cf\"><li><a href=\"#/home\">Home</a></li><li><a href=\"#/setup\">Setup</a></li><li><a href=\"#/contact\">Contact</a></li></ul></nav></div></header><div class=\"responsive-wrapper\"><ul class=\"cf responsive-nav option-set\"><li><a href=\"#/home\">Home</a></li><!--\n        remove gap\n        --><li><a href=\"#/setup\">Setup</a></li><!--\n        remove gap\n        --><li><a href=\"#/contact\">Contact</a></li></ul></div>");
$templateCache.put("components/directives/responsive-nav.html","<!-- hamburger icon --> <a href=\"#\" class=\"hamburger\"><!-- <img src=\"images/responsive-nav.png\" alt=\"\"> --></a>");}]);