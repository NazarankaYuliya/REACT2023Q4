export async function fetchData(
  searchItem: string,
  page: number,
  itemsPerPage: number
) {
  try {
    const response = await fetch(
      `https://swapi.dev/api/people/?search=${searchItem}&page=${page}&itemsPerPage=${itemsPerPage}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('An error occurred while fetching data:', error);
    throw error;
  }
}

export async function fetchCharacterData(id: number) {
  try {
    const response = await fetch(`https://swapi.dev/api/people/${id}`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('An error occurred while fetching character data:', error);
    throw error;
  }
}
