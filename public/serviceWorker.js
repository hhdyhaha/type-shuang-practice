// 这是一个空的Service Worker文件
// 创建此文件是为了避免浏览器请求serviceWorker.js时出现404错误
// 目前项目不需要使用Service Worker功能

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // 使用默认的fetch处理，不进行拦截
  return;
}); 