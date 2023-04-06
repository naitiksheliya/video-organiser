import React from "react";
import deleteIcon from "../assets/svg/deleteIcon.svg";
import editIcon from "../assets/svg/editIcon.svg";
import movieMoveIcon from "../assets/svg/movieMoveIcon.svg";
import watchingMovieIcon from "../assets/svg/watchingMovieIcon.svg";

function Card({ title, link }) {
  return (
    <div className="card m-4 p-0 box-shadow d-inline col-lg-3">
      <div className="card-header">
        <h4 className="my-0 font-weight-normal">{title}</h4>
      </div>
      <div className="card-body text-center">
        <div>
          <button onClick={() =>  navigator.clipboard.writeText(link)} className="btn btn-outline-secondary card-title pricing-card-title text-center">
            copy-link
          </button>
        </div>
        <ul className="list-unstyled mt-3 mb-4 text-center"></ul>
        <div className="row">
          <div className="col-3 p-0">
            <img
              className="h-80 w-80"
              style={{ width: 50, height: 50 }}
              src={editIcon}
              alt="bed0"
            />
          </div>
          <div className="col-3 p-0">
            <img
              src={deleteIcon}
              style={{ width: 45, height: 45 }}
              className="h-80 w-80"
              alt="bed0"
            />
          </div>
          <div className="col-3 p-0">
            <img
              src={watchingMovieIcon}
              style={{ width: 42, height: 42 }}
              className="h-80 w-80"
              alt="bed0"
            />
          </div>
          <div className="col-3 p-0">
            <img
              className="h-80 w-80"
              style={{ width: 45, height: 45 }}
              src={movieMoveIcon}
              alt="bed0"
            />
          </div>
        </div>
        <button
          type="button"
          className=" btn btn-lg btn-block btn-outline-primary"
        >
          Preview
        </button>
      </div>
    </div>
  );
}

export default Card;
