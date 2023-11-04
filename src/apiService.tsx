export async function fetchData(
  searchItem: string,
  page: number,
  itemsPerPage: number
) {
  const response = await fetch(
    `https://swapi.dev/api/people/?search=${searchItem}&page=${page}&itemsPerPage=${itemsPerPage}`
  );
  const data = await response.json();
  return data;
}
