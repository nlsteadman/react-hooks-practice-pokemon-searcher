import React from "react";

function Search({ filterCards, onFilter }) {
  function handleChange(e) {
    onFilter(e.target.value);
  }


  return (
    <div className="ui search">
      <div className="ui icon input">
        <input
          className="prompt"
          value={filterCards}
          onChange={handleChange} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
