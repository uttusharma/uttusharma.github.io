'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "86fe2744bdb0680e2ad556060fc93482",
"assets/assets/data/allscore.md": "2f3236267ba8470a44254f173af24c7b",
"assets/assets/data/ipecstudent.md": "25c2b4309b6be220e4f8ce997be3b15a",
"assets/assets/data/meetNotify.md": "e5924600f19e621fb5ad77ceec8f67bf",
"assets/assets/data/myipec.md": "309ff497db9e95181097d7c4877bc11b",
"assets/assets/data/ochaskaa.md": "d82355ae152791203931040667a4553b",
"assets/assets/icons/android.png": "2834f46c872024c9992a594f8001d878",
"assets/assets/icons/aws.png": "c85e15ac87d15ca7cf8c94305e5c9579",
"assets/assets/icons/cpp.png": "689b3cc3bb5b203af52535fd539fa7d3",
"assets/assets/icons/dart.png": "2fa28f6a13f37c05c37792a482b80e41",
"assets/assets/icons/firebase.png": "1bbefcf04f39bd697289111d868391cb",
"assets/assets/icons/flutter.png": "dbf386f44a37afc535e8ec7f21aab64e",
"assets/assets/icons/gcp.png": "fb99cd35f3eb3aa6bf32e2c3b77d0863",
"assets/assets/icons/git.png": "5cbe6a8ee7cdefa68ba02d84caf6959d",
"assets/assets/icons/java.png": "beae86084a3c4857bdaa6e8f7db595e6",
"assets/assets/icons/js.png": "c0a88ca5a411608e0752e5ea6ddc4a42",
"assets/assets/icons/python.png": "f1f74fbe1cf10f3d0cc7e3d02d86c14e",
"assets/FontManifest.json": "b4b9e52d8f612cc4027698fe02818d93",
"assets/fonts/Inconsolata-Black.ttf": "5effb753d212b5ae351f6342f28268bd",
"assets/fonts/Inconsolata-Bold.ttf": "8459cb29b2f9ce3e91a0c9625c7dbeb8",
"assets/fonts/Inconsolata-ExtraBold.ttf": "b52af280458d15bf04ec1299cbb7cff4",
"assets/fonts/Inconsolata-ExtraLight.ttf": "cd2fcf180a3715be9cc78ecbe151eb53",
"assets/fonts/Inconsolata-Light.ttf": "c8b568b1f3bf08c879495fe8fc1dea30",
"assets/fonts/Inconsolata-Medium.ttf": "fe81130af236d40cfdc40a0eb7ff37ff",
"assets/fonts/Inconsolata-Regular.ttf": "39cba59a48ffa6eea39a5d5f9ec63df6",
"assets/fonts/Inconsolata-SemiBold.ttf": "67d275b4059c2e7958f5025b381697b3",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/fonts/SpaceMono-Bold.ttf": "450f757ba22bf3eb9f839eb26287398a",
"assets/fonts/SpaceMono-BoldItalic.ttf": "97244ddaccbf325073da7af362e2cb5f",
"assets/fonts/SpaceMono-Italic.ttf": "233cc83beb6682c47f0d6a3ea129428f",
"assets/fonts/SpaceMono-Regular.ttf": "52eb73dbce8bf4083a59acc2e91699ad",
"assets/NOTICES": "f295897d75e121679b3f87f5af5e97bc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"favicon-16x16.png": "9d69f06687eb829298b06ad076dbc4c1",
"favicon-32x32.png": "cdb422d54394a5f703414c5d18f18de4",
"favicon-96x96.png": "8396e9f74695c75becadd9e84db43fa7",
"favicon.ico": "0c34708e43af2aa3a5e46b86c02d6010",
"favicon.png": "cb7333e5024f073ce5e43efefe3e5cee",
"icons/android-icon-144x144.png": "4700b02be6c400f1ec011b7af9410366",
"icons/android-icon-192x192.png": "10cf4572a9cb964ecd407829cfb7cb73",
"icons/android-icon-36x36.png": "8b9f295be371ef50e444d0946c653f1d",
"icons/android-icon-48x48.png": "57b70a7d4e472c6e4fd823f9eec3a32c",
"icons/android-icon-72x72.png": "c4dff17bdf1fc616fc579f326ad1f514",
"icons/android-icon-96x96.png": "8396e9f74695c75becadd9e84db43fa7",
"icons/apple-icon-114x114.png": "5d6f0859b2fe4193a1c566934592722c",
"icons/apple-icon-120x120.png": "44ad4c7d98cad43379b6e83fa2fd0139",
"icons/apple-icon-144x144.png": "4700b02be6c400f1ec011b7af9410366",
"icons/apple-icon-152x152.png": "6cb4d70e1e345397ca22c39569a5fd0d",
"icons/apple-icon-180x180.png": "936e845b067ac8b281ae8f2af53652a4",
"icons/apple-icon-57x57.png": "c2cf85c555244aa8fc2840848c20d3bc",
"icons/apple-icon-60x60.png": "df955d613d56a2f7cde4fef11ae6ce6b",
"icons/apple-icon-72x72.png": "c4dff17bdf1fc616fc579f326ad1f514",
"icons/apple-icon-76x76.png": "65d26d3861c1831f0bcc69acb18653d2",
"icons/apple-icon-precomposed.png": "77bce9ddf8634cd9aa894327b11811a4",
"icons/apple-icon.png": "77bce9ddf8634cd9aa894327b11811a4",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/ms-icon-144x144.png": "4700b02be6c400f1ec011b7af9410366",
"icons/ms-icon-150x150.png": "1a3a2740ee847866212df11571ecaeeb",
"icons/ms-icon-310x310.png": "fbb41a1f1e509f7d9e7530c5ae389444",
"icons/ms-icon-70x70.png": "8f22a4939c8eba220759d570f6a708e7",
"index.html": "2833ebfbf7217a3af8ae4c91322576ae",
"/": "2833ebfbf7217a3af8ae4c91322576ae",
"main.dart.js": "def0e504fccdcb8de8431972e2ff9fbd",
"manifest.json": "40bc06ab258b09de994d455460bcbbe4",
"version.json": "426313f2f3133c2f20415344c4a22df3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
