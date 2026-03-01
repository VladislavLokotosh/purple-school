import { useState } from "react";
import Button from "../button/Button";
import "./Search.css";

function Search() {
  const [resultSearch, setResultSearch] = useState("");

  const addResultSearch = (event) => {
    setResultSearch(event.target.value);
  };
  const confirmResultSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    console.log(formProps);
  };

  return (
    <form className="search-form" onSubmit={confirmResultSearch}>
      <input
        placeholder="Введите название"
        type="text"
        name="text"
        value={resultSearch}
        onChange={addResultSearch}
        className="search-input"
      />
      <Button textButton="Искать" />
    </form>
  );
}

export default Search;
