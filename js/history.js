/**
 * Created by sudiptomanna on 6/23/17.
 */
(function(){
    "use strict";

    function loadPage(xhr, urlToLoad){
        xhr.onload = function (){
            const response = xhr.responseText;
            parsePage(response);
            window.history.pushState({ pageContent: response }, 'JavaScript Fundamentals', urlToLoad);
        };
        xhr.open('GET', urlToLoad, true);
        xhr.send();

    }

    function parsePage(pageString){
        const bodyTemp = pageString.split('<head>')[1] || pageString,
        body = bodyTemp.split('</html>')[0] || pageString;

        document.body.outerHTML = body;
    }

    document.addEventListener('click', function (e){
        if (e.target.nodeName === 'A'){
            e.preventDefault();

            const xhr = new XMLHttpRequest,
                newUrl = e.target.href;

            loadPage(xhr,newUrl);

            window.history.pushState({pageContent: document.body.outerHTML}, 'JavaScript Fundamentals', document.location.href);
        }
    });
    window.addEventListener('popstate', function (e) {
        if (e.state && typeof e.state.pageContent === 'string'){
            parsePage(e.state.pageContent);
        }

    })

}());