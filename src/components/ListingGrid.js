import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FruitImage = styled.img`
  width: 180px;
  border-radius: 8px;
`;

const BigDivContainer = styled.div`
  display: inline-block;
  padding: 10px;
  border: none;
  margin: 30px;
  color: #4d4d4d;
`;

const NameContainer = styled.p`
  font-size: 20px;
  text-align: center;
  font-weight: bold;
`;

const LatinNameContainer = styled.p`
  font-size: 18px;
  text-align: center;
  font-weight: bold;
`;

const ListingGrid = ({ itemList }) => {
  return (
    <div>
      {itemList.map((item) => {
        return (
          <Link to={`/items/${item.id}`} key={item.id}>
            <BigDivContainer>
              <FruitImage src={item.imageSrc} alt="" />
              <NameContainer>{item.name}</NameContainer>
              <LatinNameContainer>{item.latinName}</LatinNameContainer>
            </BigDivContainer>
          </Link>
        );
      })}
    </div>
  );
};

ListingGrid.propTypes = {
  itemList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      latinName: PropTypes.string.isRequired,
      imageSrc: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ListingGrid;
