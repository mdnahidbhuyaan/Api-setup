import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/feature/searchSlice";

const Tabs = () => {
  const tabs = ["photos", "videos", "gif"];
  const dispatch = useDispatch();
  const activeTab = useSelector((state)=>state.search.activeTab)
  return (
    <div className="flex gap-5 p-10">
      {tabs.map(function (elem, idx) {
        return (
          <button
            className={`${(activeTab == elem ? "bg-blue-700":"bg-gray-900")} transition  rounded-sm text-white py-2 px-5 cursor-pointer active:scale-95 text-xl`}
            key={idx}
            onClick={()=>{
                dispatch(setActiveTab(elem))
            }}
          >
            {elem}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
