
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/feature/searchSlice";

const SearchBar = () => {
  const submitHandler = (e) => {
    e.preventDefault();
   dispatch(setQuery(text))
    setText("")
  };

  const [text, setText] = useState("");

  const dispatch = useDispatch()
  return (
    <div className="">
      <form
      
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex gap-5 px-10 py-6 shadow-lg bg-white sticky top-0 z-10"
      >
        <input
        
          value={text}
          onChange={(e)=>{
            setText(e.target.value)
          }}
          required
          className="text-xl w-full px-4 py-2 rounded-full outline-none border-2 bg-gray-950 text-white"
          type="text"
          placeholder="Search Anything..."
        />
        <button className="bg-green-700 rounded-sm text-white px-5 py-1 text-xl cursor-pointer active:scale-95">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
