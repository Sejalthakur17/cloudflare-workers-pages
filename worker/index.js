addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {

  // Handle CORS preflight
  if (request.method === "OPTIONS") {
    return new Response(null, {
      headers: corsHeaders()
    });
  }

  if (request.method === "POST") {
    const body = await request.json();

    // Business Logic
    const number = body.number;
    const result = number * 5;

    return new Response(
      JSON.stringify({
        input: number,
        output: result,
        message: "Calculation successful"
      }),
      {
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders()
        }
      }
    );
  }

  return new Response("Method Not Allowed", { status: 405 });
}

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  };
}