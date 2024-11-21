import React from 'react';
import ComboItem from './ComboItem';

const ComboList = ({ handleAddCombo, handleAddMoreCombo }) => {
  const combos = [
    { id: 1, name: "Combo Americano", price: 100 },
    { id: 2, name: "Combo Doble Cheedar", price: 150 },
    { id: 3, name: "Combo Junior Simple", price: 200 },
    { id: 4, name: "Combo Junior Big", price: 200 },
    { id: 5, name: "Combo The Big", price: 200 },
    { id: 6, name: "Combo MegaL", price: 200 },
    { id: 7, name: "Combo MegaXL", price: 200 },
    { id: 8, name: "Combo Tosti XL", price: 200 },
    { id: 9, name: "Combo Chicken Simple", price: 200 },
    { id: 10, name: "Combo Chicken XL", price: 200 },
    { id: 11, name: "Combo Ceasar Salad", price: 200 },
    { id: 13, name: "Combo Tuna Salad", price: 200 },
    { id: 14, name: "Combo Crispy Salad", price: 200 },
    { id: 15, name: "Ice Ball", price: 200 },
    { id: 16, name: "Big Ice", price: 200 },
    { id: 17, name: "Chocolate Ice", price: 200 },
  ];

  return (
    <div className="menu-section">
      <h2>Menu</h2>
      {combos.map(combo => (
        <ComboItem
          key={combo.id}
          combo={combo}
          handleAddCombo={handleAddCombo}
          handleAddMoreCombo={handleAddMoreCombo}
        />
      ))}
    </div>
  );
};

export default ComboList;
