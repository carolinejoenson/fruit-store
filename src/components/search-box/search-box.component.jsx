import "./search-box.styles.css";


const SearchBox = ({fruitData, getSearchFieldString}) => {

    return (
        <div className="searchBox">
            <input type="search" placeholder="SEARCH FRUIT" list="optionsSearchFruit" onChange={getSearchFieldString}></input>
            <datalist id="optionsSearchFruit">
                {fruitData.map((fruits) => {
                    return <option value={fruits.fruit} key={fruits.id}></option>
                })}
            </datalist>
        </div>
    );
}


export default SearchBox;
