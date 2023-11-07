export async function doSearch(queryString: string) {
  try {
    const response = await fetch(
      `https://swapi.dev/api/planets/?search=${queryString}`
    );
    const APIresponse = await response.json();

    return APIresponse;
  } catch (error) {
    console.error(error);
  }
}

export async function getAllPlanets(page?: string) {
  try {
    if (!page) {
      const response = await fetch('https://swapi.dev/api/planets');
      const APIresponse = await response.json();

      return APIresponse;
    } else {
      const response = await fetch(`${page}`);
      const APIresponse = await response.json();
      return APIresponse;
    }
  } catch (error) {
    console.error(error);
  }
}
