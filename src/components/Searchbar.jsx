import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Searchbar = () => {
  let navigate=useNavigate();
  const [searchTerm,setSearchTerm]=useState('');
  let handleSubmit=(e)=>{
   e.preventDefault();
   navigate(`/search/${searchTerm}`)
  }
 return(
   <form onSubmit={handleSubmit} autoComplete="off" className="p-2 text-gray-400 flex">
    <label htmlFor="search-field" className="sr-only">
      search all songs
    </label>
  <input
  autoComplete="off"
  id="search-field"
  placeholder="SEARCH"
  type="search"
  value={searchTerm}
  onChange={(e)=>{setSearchTerm(e.target.value)}}
  className="flex border-none outline-none placeholder-gray-500 rounded-lg bg-transparent text-white p-4 m-3"
  />
  </form>
  )
};

export default Searchbar;
