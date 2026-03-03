addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);  

  if (request.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders() });
  }

  if (url.pathname === "/" && request.method === "GET") {
    return jsonResponse({
      message: "Cloudflare Worker API is running successfully!"
    });
  }

  if (url.pathname === "/health" && request.method === "GET") {
    return jsonResponse({ status: "API is running " });
  }

  return new Response("Not Found", { status: 404 });
}

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      ...corsHeaders()
    }
  });
}

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  };
}