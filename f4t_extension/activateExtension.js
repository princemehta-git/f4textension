chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if (request.todo == "showPageAction"){
        new chrome.declarativeContent.ShowAction()
    };

});