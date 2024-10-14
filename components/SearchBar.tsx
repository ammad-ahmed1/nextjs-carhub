"use client";
import React, { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";
import { manufacturers } from "../constants/index";

const SearchBar = () => {
  const [manufacturer, setManufaturer] = useState("");
  const handleSearch = () => {};
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufaturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;
