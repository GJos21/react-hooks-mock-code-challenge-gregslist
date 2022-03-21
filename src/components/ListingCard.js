import React, { useState } from "react";

function ListingCard({ item, onDeleteListing }) {
  const { id, description, image, location } = item;
  const [like, setLike] = useState(false);

  function likeClickHandler() {
    console.log("like button clicked", like)
    setLike(() => !like);
  }

  function handleClickDelete() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE"
    })
      .then((resp) => resp.json())
      .then(() => onDeleteListing(id));
  }

  console.log("render like", like);

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {like
          ? (<button
            onClick={likeClickHandler}
            className="emoji-button favorite active"
          >★</button>)
          : (<button
            onClick={likeClickHandler}
            className="emoji-button favorite"
          >☆</button>)
        }
        <strong>{description}</strong>
        <span> · {location}</span>
        <button
          className="emoji-button delete"
          onClick={handleClickDelete}
        >🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
