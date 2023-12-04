import React from "react";
import classes from "../assets/Styles/properties.module.css";
import PropertyCard from "../components/PropertyCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useLoaderData } from "react-router-dom";

const ShowProperties = ({ type }) => {
  const properties = useLoaderData();

  return (
    <main className={classes.spMain}>
      <header>
        <div className={classes.headerClass}>
          <h1>Search Properties</h1>
          <p>dash properties available for {type} </p>

          <div className={classes.searchBar}>
            <input id="searchLocation1" type="text" name="" />
            <button>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>

          <div className={classes.searchBarExtended}>
            <input id="searchLocation" type="text" placeholder="Search..." />
            <button>View Properties</button>
          </div>
        </div>
      </header>
      <div className={classes.filters}>
        <h3>Filters:</h3>
        <select name="beds" id="beds">
          <option value="">Number of bedrooms</option>
          <option value="1">1 Bedroom</option>
          <option value="2">2 Bedrooms</option>
          <option value="3">3 Bedrooms</option>
          <option value="4">4 Bedroom</option>
        </select>
        <select name="property-type" id="propertyType">
          <option value="">property Type</option>
          <option value="Flat">Flat/Apartment</option>
          <option value="villa">Villa</option>
          <option value="penthouse">Penthouse</option>
          <option value="office">Commercial office Space</option>
        </select>

        <select name="orderBy" id="price">
          <option value="">Sort by price</option>
          <option value="lh">Price :Low to high</option>
          <option value="hl">Price :high to low</option>
        </select>

        <button>+Apply filters</button>
      </div>

      <div className={classes.filtersMinimized}>
        <h3>Filters:</h3>

        <div>
          <select name="beds" id="beds1">
            <option value="">Number of bedrooms</option>
            <option value="1">1 Bedroom</option>
            <option value="2">2 Bedrooms</option>
            <option value="3">3 Bedrooms</option>
            <option value="4">4 Bedrooms</option>
          </select>
          <select name="property-type" id="propertyType1">
            <option value="">property Type</option>
            <option value="Flat">Flat/Apartment</option>
            <option value="villa">Villa</option>
            <option value="penthouse">Penthouse</option>
            <option value="office">Comercial office Space</option>
          </select>
        </div>

        <div>
          <select name="orderBy" id="price1">
            <option value="">Sort by price</option>
            <option value="lh">Price :Low to high</option>
            <option value="hl">Price :high to low</option>
          </select>
        </div>

        <button>+Apply filters</button>
      </div>

      <section className={classes.propertiesContainer}>
        {properties.map((property) => (
          <PropertyCard key={property._id} property={property} />
        ))}
      </section>
    </main>
  );
};

export default ShowProperties;
