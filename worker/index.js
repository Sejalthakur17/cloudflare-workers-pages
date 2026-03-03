addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);

  if (request.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders() });
  }

  // Health check route
  if (url.pathname === "/health" && request.method === "GET") {
    return jsonResponse({ status: "API is running 🚀" });
  }

  // Business logic route
  if (url.pathname === "/calculate" && request.method === "POST") {
    const body = await request.json();

    if (!body.number) {
      return jsonResponse({ error: "Number is required" }, 400);
    }

    const result = body.number * 5;

    return jsonResponse({
      input: body.number,
      output: result,
      timestamp: new Date().toISOString()
    });
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