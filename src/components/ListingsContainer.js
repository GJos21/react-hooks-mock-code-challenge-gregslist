import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ filter }) {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((resp) => resp.json())
      .then((items) => setListings(items));
  }, []);

  function handleDeleteListing(id) {
    const newListings = listings.filter((listing) =>
      listing.id !== id);
    setListings(newListings);
  }

  function handleLikeListing() {

  }

  return (
    <main>
      <ul className="cards">
        {listings
          .filter((listing) =>
            filter === "" ? true : listing.description.toUpperCase().includes(filter.toUpperCase())
        )
          .map((listing) =>
        <ListingCard
          key={listing.id}
          item={listing}
          onDeleteListing={handleDeleteListing}
          onLikeListing={handleLikeListing}
        />
          )}
      </ul>
    </main>
  );
}

export default ListingsContainer;
