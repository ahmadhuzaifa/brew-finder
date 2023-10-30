import React from 'react';
import '../styles/CoffeeShopList.css';

const CoffeeShopList = ({ coffeeShops }) => {
  return (
    <div className="coffee-shop-list">
      {coffeeShops.length > 0 ? (
        coffeeShops.map((shop, index) => (
          <div key={index} className="coffee-shop-item">
            <h2>{shop.name}</h2>
            <p>{shop.address}</p>
          </div>
        ))
      ) : (
        <p>No coffee shops found. Try different locations.</p>
      )}
    </div>
  );
};

export default CoffeeShopList;