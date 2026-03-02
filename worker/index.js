addEventListener("fetch", event => {
  event.respondWith(
    new Response("Hello from Backend!", {
      headers: { "Content-Type": "text/plain" }
    })
  );
});