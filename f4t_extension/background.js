// curr_url =  getCurrentTab();

// async function getCurrentTab() {
//     let queryOptions = { active: true, currentWindow: true };
//     let [tab] = await chrome.tabs.query(queryOptions);
//     return tab;
// };

function getCurrentTab(callback) {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        // console.log(tabs[0].url);
        url = tabs[0].url;
        callback(url);
    });
}


// getCurrentTab(function () {
//     if (!url.includes("https://free4talk.com")) {
//         chrome.action.onClicked.addListener(function () {
//             var newURL = "https://free4talk.com/";
//             chrome.tabs.create({ url: newURL });
//         });
//     }
// })


chrome.action.onClicked.addListener(function () {
    getCurrentTab(function () {
        if (!url.includes("https://www.free4talk.com")) {
            var newURL = "https://free4talk.com/";
            chrome.tabs.create({ url: newURL });
            // console.log(url);
        }
        // else{
        //     chrome.runtime.sendMessage("showBot", (response) => {})
        // }
    }
    )
});


// chrome.runtime.onInstalled.addListener(details => {
//     if (details.reason === chrome.runtime.OnInstalledReason.INSTALL) {
//       chrome.runtime.setUninstallURL('https://www.princemehta.com/');
//     }
//   });

