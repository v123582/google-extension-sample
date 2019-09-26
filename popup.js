
chrome.runtime.onMessage.addListener(function(request, sender) {
  console.log('===== 取得資料 =====')
  console.log(request)
  if(request.data){
    message.innerText = request.data
  }
});

function onWindowLoad() {

  var message = document.querySelector('#message');

  chrome.tabs.executeScript(null, {
    file: "sample.js"
  }, function() {
    console.log('onWindowLoad in extension')
  });

}

window.onload = onWindowLoad;


