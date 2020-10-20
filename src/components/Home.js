import React from "react";
import { items } from "../data";
import ListingGrid from "./ListingGrid.js";

const Home = (props) => {
  let itemArray = Object.values(items);
  return (
    <div>
      <p>Fruit emporium sells the finest fruits from this world and beyond.</p>
      <ListingGrid itemList={itemArray}></ListingGrid>
    </div>
  );
};

export default Home;
