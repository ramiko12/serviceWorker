self.addEventLisenter("install",function(event){
	event.waitUntill(
		cache.open("jsMonthly").then(function(cache){
			cache.addAll
		})
		)
})

self.addEventListener('fetch', function(event) {
  event.respondWith(new Response("Hello world!"));
}); 