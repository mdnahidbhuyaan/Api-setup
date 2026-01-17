/* eslint-disable no-unused-vars */
import React from "react";
import { featchPhotos, featchVideos, featchGif } from "../api/mediaApi";
import {
  setQuery,
  setLoading,
  setError,
  setResults,
} from "../redux/feature/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ResultCart from "./ResultCart";

const ResultGrid = () => {
  const dispatch = useDispatch();
  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search
  );

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      try {
        dispatch(setLoading());
        let data = [];
        if (activeTab == "photos") {
          let response = await featchPhotos(query);
          data = response.results.map((item) => ({
            id: item.id,
            type: "photo",
            title: item.alt_description,
            thumbnail: item.urls.small,
            src: item.urls.full,
            url:item.links.html
          }));
        }
        if (activeTab == "videos") {
          let response = await featchVideos(query);
          data = response.videos.map((item) => ({
            id: item.id,
            type: "video",
            title: item.user.name || "video",
            thumbnail: item.image,
            src: item.video_files[0].link,
            url:item.url
          }));
        }
        if (activeTab == "gif") {
          let response = await featchGif(query);
          data = response.data.results.map((item) => ({
            id: item.id,
            type: "gif",
            title: item.title || "Gif",
            thumbnail: item.media_formats.tinygif.url,
            src: item.media_formats.gif.url,
            url:item.url
          }));
        }
        dispatch(setResults(data));
      } catch (err) {
        dispatch(setError(err.massage));
      }
    };
    getData();
  }, [query, activeTab,dispatch]);
  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="px-10  py-6 flex w-full flex-wrap gap-6 items-center">
      {results.map((item, idx) => {
        return (
          <div key={idx}>
            
              
              <ResultCart item={item} />
            
          </div>
        );
      })}
    </div>
  );
};

export default ResultGrid;
