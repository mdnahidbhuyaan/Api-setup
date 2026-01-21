import React from "react";
import { useDispatch } from "react-redux";
import { addCollection, addedToast } from "../redux/feature/collectionSlice";

const ResultCart = ({ item }) => {
  const dispatch = useDispatch();
  const addToCollection = (item) => {
    dispatch(addCollection(item))
    dispatch(addedToast())
  };
  return (
    <div className="w-[30vh] relative h-70 bg-white shadow-lg rounded-xl overflow-hidden">
      <a target="_blank" className="w-full" href={item.url}>
        {item.type == "photo" ? (
          <img className="h-full w-full object-cover" src={item.src} alt="" />
        ) : (
          ""
        )}
        {item.type == "video" ? (
          <video
            className="h-full w-full object-cover"
            autoPlay
            loop
            muted
            src={item.src}
          ></video>
        ) : (
          ""
        )}
        {item.type == "gif" ? (
          <img className="h-full w-full object-cover" src={item.src} alt="" />
        ) : (
          ""
        )}
      </a>
      <div
        id="bottom"
        className="absolute bottom-0 text-white  w-full px-4 py-5 gap-2 flex justify-between items-center"
      >
        <h2 className="text-lg font-semibold capitalize h-20 overflow-hidden">
          {item.title}
        </h2>
        <button
          onClick={() => {
            addToCollection(item);
          }}
          className="bg-green-400 active:scale-95 rounded px-3 py-1 cursor-pointer text-white font-medium"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ResultCart;
