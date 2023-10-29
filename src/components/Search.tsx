import { ChangeEvent, Component } from 'react';
import { StarWarsCharacter } from '../types';

interface SearchProps {
  updateResults: (results: StarWarsCharacter[]) => void;
}

interface SearchState {
  searchItem: string;
}

class Search extends Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = {
      searchItem: localStorage.getItem('searchTerm') || '',
    };
  }

  componentDidMount() {
    this.handleSearch();
  }

  handleSearch = async () => {
    try {
      const responce = await fetch(
        `https://swapi.dev/api/people/?search=${this.state.searchItem}`
      );
      const data = await responce.json();
      this.props.updateResults(data.results);
      localStorage.setItem('searchTerm', this.state.searchItem);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchItem: e.target.value });
  };

  render() {
    return (
      <div className="search">
        <input
          type="text"
          value={this.state.searchItem}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleSearch}>Search</button>
      </div>
    );
  }
}

export default Search;
