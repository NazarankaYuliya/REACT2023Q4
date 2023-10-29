import { ChangeEvent, Component } from 'react';
import { StarWarsCharacter } from '../types';

interface SearchProps {
  updateResults: (results: StarWarsCharacter[]) => void;
  setLoading: (isLoading: boolean) => void;
}

interface SearchState {
  searchItem: string;
  isLoading: boolean;
}

class Search extends Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = {
      searchItem: localStorage.getItem('searchTerm') || '',
      isLoading: false,
    };
  }

  componentDidMount() {
    this.handleSearch();
  }

  handleSearch = async () => {
    this.props.setLoading(true);

    const trimmedSearchItem = this.state.searchItem.trim();
    try {
      const responce = await fetch(
        `https://swapi.dev/api/people/?search=${this.state.searchItem}`
      );
      const data = await responce.json();
      this.props.updateResults(data.results);
      localStorage.setItem('searchTerm', trimmedSearchItem);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      this.props.setLoading(false);
    }
  };

  handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchItem: e.target.value });
  };

  render() {
    const buttonText = this.state.isLoading ? 'Searching...' : 'Search';

    return (
      <div className="search">
        <input
          type="text"
          value={this.state.searchItem}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleSearch} disabled={this.state.isLoading}>
          {buttonText}
        </button>
      </div>
    );
  }
}

export default Search;
