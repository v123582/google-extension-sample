## Readme

### Usage

1. 從 chrome://extensions/ ，匯入程式所在資料夾（開發者模式，載入未封裝項目）
2. 進入 ＿＿＿＿＿＿＿ 網頁作為範例，點選「新增的 Extension 」會抓取頁面上的資料。

### Note

* popup.html 代表點開右上角 Extension 後，會顯示的小框框
* popup.js 是這個小框框執行的 JavaScript ，直接在這邊存取資料是取到小框框內的
裡面有一段程式，可以在原本的分頁上執行一段 JavaScript：

```

chrome.tabs.executeScript(null, {
    file: "sample.js"
  }, function() {
    ...
  });

```

* sample.js 會在特定的分頁上執行 JavaScript：

```
let data = document.querySelector('.date').textContent
console.log('data = ', data)
```

* popus.js 跟 sample.js 互相接收資料的程式碼：

```
chrome.runtime.onMessage.addListener(function(request, sender) {
  console.log(request.data)
});


chrome.runtime.sendMessage({
    data: data
});
```

全部的作法就是流程是：

1. 點開 Extension ，打開 popup.html 執行 popup.js
2. popup.js 會在特定的分頁中執行 sample.js
3. sample.js 抓完資料上，回傳給 popup.js
4. popup.js 收到資料後，在呈現在 popup.html 上