import React, { useState } from "react";
import "./SearchBar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

/*thay toàn bộ*/
const SearchBar = ({items}) => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredItems = searchTerm? items.filter((item) =>
    (item.title || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
    (item.userName || '' ).toLowerCase().includes(searchTerm.toLowerCase()) ||
    (item.bookTitle || '' ).toLowerCase().includes(searchTerm.toLowerCase())

// nếu không tìm được thì thêm lựa chọn.
):(<></>);
  console.log("Filtered Items:", filteredItems);

  return (
    <div className="searchBarWrapper">
      <div>
        <input type="text" placeholder="Tìm kiếm " 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)}/>
        <button className="SearchBarButton"><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
      </div>
        {filteredItems.length > 0 ? (
        filteredItems.map((item) => <li key={item.id}>{item.id}. {item.title || item.userName || item.bookTitle }</li>)) : (<></>)}
      </div>
  );
};

export default SearchBar;
