import logo from "./logo.svg";
import { Word } from "./models/Word";
import { useState, useEffect } from "react";
import Axios from "axios";
import { List } from "./models/List";

import LoadingSpinner from "./component/loading";

function App() {
  const a = "";
  const domain = "https://jp-gram-be.onrender.com";

  const [inputValue, setInputValue] = useState("");
  const [words, setWords] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSearchInputChange = (event) => {
    console.log("handleSearchInputChange");
    setInputValue(event.target.value);
  };

  const searchClick = () => {
    searchKey();
  };

  const searchInputKey = (e) => {
    if (e.key == "Enter") {
      searchKey();
    }
  };

  const searchKey = () => {
    setIsLoading(true);
    Axios.get(`${domain}/grammar/${inputValue}`)
      .then((res) => {
        setIsLoading(false);
        if (res) {
          console.log(res.data.map((word) => word.key));
          setWords(res.data);
          console.log(words);
        }
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  };

  const renderResult = (
    <div className="resultArea">
        <List list={words}></List>
      </div>
  )

  return (
    <div className="App">
      <div className="p-3 mb-2 bg-primary searchArea">
        <input
          type="text"
          className="searchInput"
          onChange={handleSearchInputChange}
          onKeyDown={searchInputKey}
        />
        <button className="btn btn-light" disabled={isLoading} onClick={searchClick}>
          Search
        </button>
      </div>
      {isLoading ? <LoadingSpinner /> : renderResult}
      
      {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
    </div>
  );
}

export default App;
