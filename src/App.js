import { useState } from "react";
import Navbar from "./components/Navbar";

import News from "./components/News";

const App = () => {
  const [searchedValue, setSearchedValue] = useState('');
  const [sortedValue, setSortedValue] = useState('crawled');
  const addSearchHandler = (enteredSearch) => {
    setSearchedValue(enteredSearch);
  };
  const addSortHandler = (enteredSort) => {
    setSortedValue(enteredSort);
  };
  return (
    <>
      <Navbar
        onAddSearch={addSearchHandler}
        onAddSort={addSortHandler}
      />
      <News
        searchValue={searchedValue}
        sortValue={sortedValue}
      />
    </>
  );
}

export default App;
