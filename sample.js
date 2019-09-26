
data = document.querySelector('.date').textContent
console.log('data = ', data)

chrome.runtime.sendMessage({
    data: data
});