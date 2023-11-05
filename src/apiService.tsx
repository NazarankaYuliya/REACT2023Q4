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

export async function fetchCharacterData(id: number) {
  const response = await fetch(`https://swapi.dev/api/people/${id}`);

  const data = await response.json();

  return data;
}
