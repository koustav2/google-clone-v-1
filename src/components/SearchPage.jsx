/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "./customhooks/useGoogleSearch";
import Response from "../response";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RoomIcon from "@mui/icons-material/Room";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SettingsIcon from "@mui/icons-material/Settings";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";

import "./SearchPage.css";
import Search from "../pages/search/Search";

function SearchPage() {
  const [{ term = "" }, dispatch] = useStateValue();
  // Live API Call
  const {data} = useGoogleSearch(term);

  // Mock API Call
  //const data = Response;
 //console.log(data);

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt="Google Logo"
          />
        </Link>
        <div className="searchPage_headerBody">
          <Search hideButtons />
          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage__option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="searchPage__option">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className="searchPage__option">
                <OndemandVideoIcon />
                <Link to="/videos">Videos</Link>
              </div>
              <div className="searchPage__option">
                <RoomIcon />
                <Link to="/maps">Maps</Link>
              </div>
              <div className="searchPage__option">
                <MoreVertIcon />
                <Link to="/more">More</Link>
              </div>
            </div>
            <div className="searchPage__optionsRight">
              <div className="searchPage__option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchPage__option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {term && (
        <div className="searchPage_results">
          <p className="searchPage_resultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>
          {data?.items.map((item) => (
            <div className="searchPage_result">
              <a
                href={item.link}
                target="__blank"
                className="searchPage_resultName">
                {item.pagemap?.cse_image?.length > 0 && (
                    <img
                    className="searchPage_resultImage"
                    src={
                        item.pagemap?.cse_image[0]?.src
                    }
                    />
                )}
                {item.displayLink}
                
                
                <h2>{item.title}</h2>
              </a>
              <p className="result_snippt">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
