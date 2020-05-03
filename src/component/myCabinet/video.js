// "use strict";


// (function () {
    

//     var nodeList =  "";
//     var urls = new Array();
//     var hostnames = new Array();
//     var currentUrl = window.location.href;
//     var currentOrigin = window.location.origin;
//     var hasWordTorrent = false;
//     var counter = 0;
//     var searchEngine = null;
//     var fromSearchEngine = false;
    
//     var getHostName = function (url) {
//         var url = url;
//         if (url.includes("yahoo")) {
//             return "yahoo";
//         } else if (url.includes("google")) {
//             return "google";
//         } else if (url.includes("bing")) {
//             return "bing"; 
//         } else if (url.includes("privatesearch")) {
//             return "privatesearch";
//         } else if (url.includes("yandex")) {
//             return "yandex";
//         } else {
//             return null;
//         }
//     }

//     var getParameterByName = function (name, url) {
//         if (!url) url = window.location.href;
//         name = name.replace(/[\[\]]/g, "\\$&");
//         var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
//             results = regex.exec(url);
//         if (!results) return null;
//         if (!results[2]) return '';
//         return decodeURIComponent(results[2].replace(/\+/g, " "));
//     }

//     var getSearchResults = function () {
//         nodeList = document.querySelectorAll('#mainline-search-results-view ul li a');
        

//         for (var i = 0; i < nodeList.length; i++) {
//             urls[i] = nodeList[i].href;
//             hostnames[i] = nodeList[i].href;
//         }
        
//         chrome.runtime.sendMessage({
//             what: "privatesearch",
//             urls: urls,
//             hostnames: hostnames,
//             currentTabHostName: getHostName(currentOrigin),
//             fromSearchEngine: true
//         }, function (response) {
//             searchEngine = "AdAware Secure Search";
//             var getQuery = document.querySelector('#search-text').value;
//             if (getQuery.indexOf("torrent") != -1) {
//                 hasWordTorrent = true;
//             } else {
//                 hasWordTorrent = false;
//             }
//             chrome.runtime.sendMessage({
//                 what: "searchQuery",
//                 hasWordTorrent: hasWordTorrent,
//                 currentUrl: currentUrl,
//                 searchQuery: getParameterByName("q", currentUrl),
//                 searchEngine: searchEngine,
//                 urls: urls
//             }, function (response) {});
//         });
//     }

//     document.addEventListener("DOMContentLoaded", function(event) {
//         chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
            
//             if (request.text == "searchEngineList") {
                
//                 switch (getHostName(currentOrigin)) {
//                     // GOOGLE SEARCH ENGINE
//                     case "google":          
//                         // On page load get browser url
//                         var searchQuery = getParameterByName("q", currentUrl);
//                         nodeList = document.querySelectorAll('.r>a');
//                         searchEngine = "Google";
//                         for (var i = 0; i < nodeList.length; i++) {
//                             urls[i] = nodeList[i].href;
//                             hostnames[i] = nodeList[i].href;
//                         }
                        
//                         sendResponse({ urls: urls, hostnames: hostnames, currentTabHostName: getHostName(currentOrigin), fromSearchEngine: true });
    
//                         // If string "torrent" is in the query string
//                         if (searchQuery.indexOf("torrent") != -1) {
                            
//                             hasWordTorrent = true;
//                         } else {
//                             hasWordTorrent = false;
//                         }
//                     break;
//                     // BING SEARCH ENGINE
//                     case "bing":        
//                         // On page load get browser url
//                         var searchQuery = getParameterByName("q", currentUrl);
//                         searchEngine = "Bing";
//                         nodeList = document.querySelectorAll('.b_algo h2 a');
//                         for (var i = 0; i < nodeList.length; i++) {
//                             urls[i] = nodeList[i].href;
//                             hostnames[i] = nodeList[i].href;
//                         }
            
//                         sendResponse({ urls: urls, hostnames: hostnames, currentTabHostName: getHostName(currentOrigin), fromSearchEngine: true });
    
//                         // If string "torrent" is in the query string
//                         if (searchQuery.indexOf("torrent") != -1) {
                            
//                             hasWordTorrent = true;
//                         } else {
//                             hasWordTorrent = false;
//                         }
//                     break;
//                     // YANDEX SEARCH ENGINE
//                     case "yandex":
//                         // On page load get browser url
//                         var searchQuery = getParameterByName("text", currentUrl);
//                         searchEngine = "Yandex";
//                         nodeList = document.querySelectorAll('.organic__title-wrapper>a');
//                         for (var i = 0; i < nodeList.length; i++) {
//                             urls[i] = nodeList[i].href;
//                             hostnames[i] = nodeList[i].href;
//                         }

//                         sendResponse({ urls: urls, hostnames: hostnames, currentTabHostName: getHostName(currentOrigin), fromSearchEngine: true });

//                         // If string "torrent" is in the query string
//                         if (searchQuery.indexOf("torrent") != -1) {
                            
//                             hasWordTorrent = true;
//                         } else {
//                             hasWordTorrent = false;
//                         }
//                     break;
//                     // YAHOO SEARCH ENGINE
//                     case "yahoo":
//                         // On page load get browser url
//                         var searchQuery = getParameterByName("p", currentUrl);
//                         searchEngine = "Yahoo";
//                         nodeList = document.querySelectorAll('.searchCenterMiddle a');
//                         for (var i = 0; i < nodeList.length; i++) {
                            
//                             urls[i] = nodeList[i].href;
//                             hostnames[i] = nodeList[i].href;
//                         }


//                         sendResponse({ urls: urls, hostnames: hostnames, currentTabHostName: getHostName(currentOrigin), fromSearchEngine: true });

//                         // If string "torrent" is in the query string
//                         if (searchQuery.indexOf("torrent") != -1) {
                            
//                             hasWordTorrent = true;
//                         } else {
//                             hasWordTorrent = false;
//                         }
//                     break;
//                     // PRIVATESEARCH SEARCH ENGINE
//                     case "privatesearch":   
//                         // On page load get browser url
//                         var searchQuery = getParameterByName("q", currentUrl);
//                         var target = document.querySelector("#mainline-search-results-view");
//                         var config = {subtree: true, characterData: true, childList: true};

                        
//                         var observer = new MutationObserver(function (mutations) {
//                             getSearchResults();
//                         });
//                         getSearchResults();
//                         observer.observe(target, config);
//                     break;
//                     default:            // OTHER PAGES
//                         sendResponse({ urls: [currentUrl], hostnames: [currentUrl], currentTabHostName: getHostName(currentOrigin), fromSearchEngine: false });
                        
//                         hasWordTorrent = false;
//                         searchEngine = "";
//                 }
    
//                 chrome.runtime.sendMessage({
//                     what: "searchQuery",
//                     hasWordTorrent: hasWordTorrent,
//                     currentUrl: currentUrl,
//                     searchQuery: (searchEngine === "Yandex") ? getParameterByName("text", currentUrl) : getParameterByName("q", currentUrl),
//                     searchEngine: searchEngine,
//                     urls: urls,
//                     hostnames: hostnames,
//                     currentTabHostName: getHostName(currentOrigin)
//                 });
//             }
//         });
//     });
// })();

// window.addEventListener('DOMContentLoaded', (event) => {
//     if (location.host === "media.adaware.com") {
//         var myElement = document.createElement("div");
//         myElement.setAttribute("id", "myTorrentScannerExtension");
//         document.body.appendChild(myElement);
//     }
// });