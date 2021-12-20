import {
    InputBox,
    SearchBox,
    SearchButton
} from './styled';

import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
    return (
        <SearchBox className={'searchBar'}>
            <InputBox 
                type="search"
                aria-label="buscar um contato"
                placeholder="buscar por contato..."
            />
            <SearchButton onClick={(click) => click.preventDefault() }>
                <FiSearch />
            </SearchButton>
        </SearchBox>
    );
}

export default SearchBar;