import { useContext } from 'react';
import { SearchContext } from './SearchContentProvider';

export function useSearchContext() {
  return useContext(SearchContext);
}
