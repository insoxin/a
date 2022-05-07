
console.log('Script loaded!')
var cacheStorageKey = 'minimal-pwa-8'

var cacheList = [
  '/',
  "index.html",
  "https://cdn.bootcss.com/twitter-bootstrap/3.3.7/css/bootstrap.min.css",
  "logo.png",
  "pwa-fonts.png",
  "https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js",
  "https://cdn.bootcss.com/twitter-bootstrap/3.3.7/js/bootstrap.min.js",
  "https://cdn.jsdelivr.net/gh/insoxin/bz@main/bz_js/inso_img.js",
  "https://cdn.jsdelivr.net/gh/insoxin/bz@main/bz_css/inso_bz.css",
  "https://cdn.jsdelivr.net/npm/darkmode-js@1.5.4/lib/darkmode-js.min.js",
  "https://cdn.jsdelivr.net/gh/insoxin/API@master/js/v1.js",
  
]

self.addEventListener('install', function(e) {
  console.log('Cache event!')
  e.waitUntil(
    caches.open(cacheStorageKey).then(function(cache) {
      console.log('Adding to Cache:', cacheList)
      return cache.addAll(cacheList)
    }).then(function() {
      console.log('Skip waiting!')
      return self.skipWaiting()
    })
  )
})

self.addEventListener('activate', function(e) {
  console.log('Activate event')
  e.waitUntil(
    Promise.all(
      caches.keys().then(cacheNames => {
        return cacheNames.map(name => {
          if (name !== cacheStorageKey) {
            return caches.delete(name)
          }
        })
      })
    ).then(() => {
      console.log('Clients claims.')
      return self.clients.claim()
    })
  )
})

self.addEventListener('fetch', function(e) {
  // console.log('Fetch event:', e.request.url)
  e.respondWith(
    caches.match(e.request).then(function(response) {
      if (response != null) {
        console.log('Using cache for:', e.request.url)
        return response
      }
      console.log('Fallback to fetch:', e.request.url)
      return fetch(e.request.url)
    })
  )
})
