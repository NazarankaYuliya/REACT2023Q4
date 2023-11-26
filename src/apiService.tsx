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

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const api = createApi({
//   reducerPath: 'api',
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
//   endpoints: (builder) => ({
//     fetchData: builder.query({
//       query: ({ searchItem, page = 1, itemsPerPage = 10 }) =>
//         `people/?search=${searchItem}&page=${page}&itemsPerPage=${itemsPerPage}`,
//     }),
//     fetchCharacterData: builder.query({
//       query: (id) => `people/${id}`,
//     }),
//   }),
// });

// export const { useFetchDataQuery, useFetchCharacterDataQuery } = api;
// export default api;
