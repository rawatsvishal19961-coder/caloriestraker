export async function GET(req) {

   // Get the search query from the request URL

  try {
    const { searchParams } =
      new URL(req.url);

    const query =
      searchParams.get("query");

    const response = await fetch(
       `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${query}&search_simple=1&json=1`
    );

    const data = await response.json();

    return Response.json(data);

  } catch (error) {
    return Response.json({
      error: "API Failed",
    });
  }
}