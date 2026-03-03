addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request));
});

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  };
}

async function handleRequest(request) {
  const url = new URL(request.url);

  // Handle preflight
  if (request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: corsHeaders()
    });
  }

  // Root route
  if (url.pathname === "/" && request.method === "GET") {
    return new Response(
      JSON.stringify({ message: "Cloudflare Worker API is running " }),
      {
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders()
        }
      }
    );
  }

  // Calculate route
  if (url.pathname === "/calculate" && request.method === "POST") {
    const body = await request.json();
    const number = Number(body.number);

    if (isNaN(number)) {
      return new Response(
        JSON.stringify({ error: "Invalid number" }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders()
          }
        }
      );
    }

    return new Response(
      JSON.stringify({ result: number * 5 }),
      {
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders()
        }
      }
    );
  }

  return new Response("Not Found", { status: 404 });
}