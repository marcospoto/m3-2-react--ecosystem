import React from "react";
import { useParams } from "react-router-dom";
import { items, sellers } from "../data";

const ItemDetails = () => {
  console.log(items);
  const { itemId } = useParams();
  let itemArray = Object.values(items);

  return itemArray
    .filter((item) => {
      if (item.id === itemId) {
        return true;
      }
    })
    .map((el) => {
      console.log(items);
      return (
        <div>
          <img src={el.imageSrc} alt="" />
          <p> {el.name}</p>
          <p>{el.latinName}</p>
          <p>{el.description}</p>
          <p>{el.countryOfOrigin}</p>
          <button>${el.price} Buy now</button>
          {/* {Object.values(sellers)
            .filter((seller) => {
              if (seller.id === items.sellerId) {
                return true;
              }
            })
            .map((seller) => {
              return (
                <div>
                  <img src={seller.avatarSrc} alt="" />
                  <p>
                    Sold by:{" "}
                    <a href={`/sellers/${seller.id}`}>{seller.storeName}</a>
                  </p>
                </div>
              );
            })} */}
        </div>
      );
    });
};

export default ItemDetails;
