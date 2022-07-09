import React, {FC, useCallback, useMemo, useState} from "react";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './search.scss';

const Search:FC = () => {
    const [searchString, setSearchString] = useState('');

    const handleInput = useCallback((value: React.ChangeEvent<HTMLInputElement>) => {
        setSearchString(value.target.value)
    }, []);

    const openWindow = useCallback(() => {
        window.open(`https://www.google.com/search?q=${searchString}`, '_blank');
        setSearchString('');
    }, [searchString]);

    const handleOnKeyDown = useCallback((e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            openWindow();
        }
    }, [openWindow]);

    const handleSubmitClick = useCallback(() => openWindow(), [openWindow]);

    return useMemo(() => (
        <div className="search">
            <div className='style-fix'>
                <div className="search__table-wrapper">
                    <table className="search__table-wrapper__table">
                        <tr>
                            <td>
                                <input
                                    type="text"
                                    placeholder='Search'
                                    className='search__table-wrapper__table__input'
                                    value={searchString}
                                    onChange={handleInput}
                                    onKeyDown={handleOnKeyDown}
                                    autoComplete="off"
                                />
                            </td>
                            <td>
                                <a href="#" onClick={handleSubmitClick}>
                                    <FontAwesomeIcon
                                        className="search__table-wrapper__table__icon"
                                        icon={faSearch}
                                    />
                                </a>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    ), [handleInput, handleOnKeyDown, handleSubmitClick, searchString]);
}

Search.displayName = 'Search';

export default Search;