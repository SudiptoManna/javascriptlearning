/**
 * Created by sudiptomanna on 6/23/17.
 */
(function(){
    "use strict";

    function loadPage(xhr, urlToLoad){
        xhr.onload = function (){
            const response = xhr.responseText;
            parsePage(response);
        };
        xhr.open('GET', urlToLoad, true);
        xhr.send();
    }

    function parsePage(pageString){
        const bodyTemp = pageString.split('<head>')[1],
        body = bodyTemp.split('</html>')[0];

        document.body.outerHTML = body;
    }

    document.addEventListener('click', function (e){
        if (e.target.nodeName === 'A'){
            e.preventDefault();

            const xhr = new XMLHttpRequest,
                newUrl = e.target.href;

            loadPage(xhr,newUrl);
        }
    })

}());