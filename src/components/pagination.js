import React from "react";
import "./Home/Home.css";


function Paginate({lastpage,currentpage,pages,url}) {
  return (
    <div className="p-3 m-4 text-center">
        <a href={`${url}/${((currentpage) - 1).toString()}`}>
          <div className="page">Previous</div>
        </a>

        <a href={`${url}/1`}>
          <div className="page">1</div>
        </a>
        {!(currentpage <= 6) && (
          <div className="page" style={{ pointerEvents: "none" }}>
            ...
          </div>
        )}
        {pages.map((i, index) => {
          return (
        
            <a href={`${url}/${i}`} key={index}>
              <div className="page" key={index}>
                {i}
              </div>
            </a>
          );
        })}
        {currentpage < (lastpage - 5) && (
          <div className="page" style={{ pointerEvents: "none" }}>
            ...
          </div>
        )}
        <a href={`${url}/${lastpage}`}>
          <div className="page">{lastpage}</div>
        </a>
         {currentpage < lastpage && (
          <a
            href={`${url}/${(currentpage + 1).toString()}`}
          >
            <div className="page">Next</div>
          </a>
        )}
      </div>
  )
}

export default Paginate
