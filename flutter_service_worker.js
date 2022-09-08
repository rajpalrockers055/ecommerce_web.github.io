'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "b7476054b289fc16d53c0495ba79b828",
"index.html": "fddde32d909438cb439345639a722f59",
"/": "fddde32d909438cb439345639a722f59",
"main.dart.js": "56feaceee9049eebb1dc56f8a793f69b",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b2778f03e86d99a0a1f5e7cbcd57db6c",
"assets/AssetManifest.json": "277afa9d898eca4824b47285d2facd7d",
"assets/NOTICES": "4d54ea9dda56e2db80413be4b0483b59",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "b839ac6292ce59781951fe25997a260a",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/logo_with_name_light.png": "c4219cf2295caa8b5784ecab46676d09",
"assets/assets/images/profile_pic.png": "d8d1b048c61287e5441f7c3e12d59c09",
"assets/assets/images/logo.png": "22dd54b0581d16c5d0d85b9e6f32d7a5",
"assets/assets/images/show_case/nike_shoes_product.png": "b79c530e9b031c1904dc76aea6f9be1e",
"assets/assets/images/show_case/campus_sutra_product.png": "47fc48d3526b4f8607fb261fc670a1e9",
"assets/assets/images/show_case/bestbuy_headphone.png": "a8131313ed5cfc2339f110b3957a9dec",
"assets/assets/images/show_case/category_footwear_bg.png": "96f20fe38126f969ca7b69397a210308",
"assets/assets/images/show_case/apple_app_store.png": "ee245311c196f9869b2cd116fac8748f",
"assets/assets/images/show_case/category_kids.png": "8f1369591fa7733751127340634f09f5",
"assets/assets/images/show_case/category_kids_bg.png": "dfba721e8ffe9c6e8d86d74da675ea2c",
"assets/assets/images/show_case/dnmx_product.png": "141d8867287d9990fe49532900fe1c91",
"assets/assets/images/show_case/color_option_2.png": "68ea547009375a2c98e4e1e7c3335ed0",
"assets/assets/images/show_case/category_home_decor_bg.png": "9a0640cf643e6c0046fb1b1cc73d96f0",
"assets/assets/images/show_case/color_option_3.png": "7dc63253dc6caefe5c892b9504888bc2",
"assets/assets/images/show_case/offer_couple.png": "7f0186805a0238b06490d393575ed6b6",
"assets/assets/images/show_case/category_men_bg.png": "978908507a8ae8c0eb71bd1242482f10",
"assets/assets/images/show_case/bestbuy_dress.png": "851b47d6927de814288b6afb900a21de",
"assets/assets/images/show_case/john_players_product.png": "75750d2c1f374b7620e6ba50a07769e1",
"assets/assets/images/show_case/category_women_bg.png": "b860c343935c0fc738ceb8330cef8d04",
"assets/assets/images/show_case/category_men.png": "dac86be4b20a7622fdacee558eaca9c6",
"assets/assets/images/show_case/offer_tags.png": "8f287b835fe0c242d1590cbf5d3d88da",
"assets/assets/images/show_case/category_footwear.png": "77b58895b40a545f8eff103517546f6b",
"assets/assets/images/show_case/bestbuy_t_shirt.png": "8fbfcf784a393b81bf5923a24ad81c2e",
"assets/assets/images/show_case/category_women.png": "53f3dd1f8bc9a878fe8aec9b4cc4a2e0",
"assets/assets/images/show_case/captcha_image.png": "b0007d1bec6ff38a1af7bcefe31c3f0d",
"assets/assets/images/show_case/google_play_store.png": "c0d1e2832831e5d81431b6c002a35843",
"assets/assets/images/show_case/bestbuy_shoes.png": "4e60e6420a7fd368c6e53f3b7e03127a",
"assets/assets/images/logo_with_name_dark.png": "3e277da9188c0986550e6c7c06a489a6",
"assets/assets/images/vector_graphics/person.svg": "5668f822c49e57b912b3ab2c5ddd0aca",
"assets/assets/images/vector_graphics/women.svg": "7c5d413125f79d04e59d8cf54ff9f70e",
"assets/assets/images/vector_graphics/kids.svg": "8351e47d3241a8047f02d7ba9cd0de29",
"assets/assets/images/vector_graphics/credit_card.svg": "7f42d9bc81c56581b4efb37d7927ba00",
"assets/assets/images/vector_graphics/delivery_box.svg": "99087f5f2b23f9722d13bec564b228f9",
"assets/assets/images/vector_graphics/home_decor.svg": "cb87cd1dbef3399af3fe64660a5e1055",
"assets/assets/images/vector_graphics/success_round.svg": "ddaf10550bca27168776fadb7475cc78",
"assets/assets/images/vector_graphics/lock.svg": "aa58eb3eb16907e562b635122351cdcc",
"assets/assets/images/vector_graphics/discount.svg": "94fc3df4a27add5afee5ec0f37acf68e",
"assets/assets/images/vector_graphics/razorpay.svg": "e5410b1b523383afff228b1aa7774e76",
"assets/assets/images/vector_graphics/wallet.svg": "4e167c888a53f1bf7a051d91fb61af55",
"assets/assets/images/vector_graphics/failure_round.svg": "0c86c241f406e3304def74a7a407e002",
"assets/assets/images/vector_graphics/men.svg": "bc5eeb83c609d7ff02a87d6dde70b5df",
"assets/assets/images/vector_graphics/category.svg": "355e838c9d56b21f66ac40fd52957d19",
"assets/assets/images/vector_graphics/footwear.svg": "d8977a4ff34a5a2c9486709f804f35eb",
"assets/assets/images/vector_graphics/paypal.svg": "6e42892501f9f221296173ce2bf9a3ce",
"assets/assets/images/vector_graphics/facebook.svg": "e7eb396b306322c062b0c0ecc063d1a6",
"assets/assets/images/vector_graphics/google.svg": "d3aec38e22d654f8270d2b979d108176",
"assets/assets/images/vector_graphics/stripe.svg": "e9d3a35c32308044c95a221248c7f4d2",
"assets/assets/images/vector_graphics/cash.svg": "c4b07dfb7462dae7555c3a9efa9aa4fc",
"assets/assets/images/vector_graphics/location.svg": "19b5eaf32957ba49ad4a364881bf0cb5",
"assets/assets/images/vector_graphics/share.svg": "ffbcefcd79a13bc78aa3a0dc1c5fd33f",
"assets/assets/images/vector_graphics/sort.svg": "401272ce3d9bc2a3a0652406134b0897",
"assets/assets/images/vector_graphics/filter.svg": "8c9675b8419d5bcdbddea814f700972e",
"assets/assets/images/vector_graphics/heart.svg": "0cf86c838e6a2ed52cef06ee2880d70f",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
