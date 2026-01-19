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
            className={`${(activeTab == elem ? "bg-green-600":"bg-gray-950")} transition capitalize  rounded-sm text-white py-1 px-5 cursor-pointer active:scale-95 text-xl`}
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
