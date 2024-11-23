import React, { useState } from 'react';
import ComboList from './components/ComboList';
import './App.css'; 
const App = () => {
  const [selectedCombos, setSelectedCombos] = useState([]);
  const [orders, setOrders] = useState([]);
  const [tableNumber, setTableNumber] = useState("");

  const handleAddCombo = (combo) => {
    setSelectedCombos([...selectedCombos, { ...combo, quantity: 1 }]);
  };

  const handleRemoveCombo = (id) => {
    setSelectedCombos(selectedCombos.filter(combo => combo.id !== id));
  };

  const handleAddMoreCombo = (combo) => {
    const updatedCombos = selectedCombos.map(c =>
      c.id === combo.id ? { ...c, quantity: c.quantity + 1 } : c
    );
    setSelectedCombos(updatedCombos);
  };

  const handleConfirmOrder = () => {
    setOrders([...orders, { combos: selectedCombos, tableNumber }]);
    setSelectedCombos([]);
    setTableNumber("");
  };

  const totalAmount = selectedCombos.reduce((total, combo) => total + combo.price * combo.quantity, 0);

  return (
    <div>
      <h1>APP MOZOEXPRESS</h1>

      
      <ComboList
        handleAddCombo={handleAddCombo}
        handleAddMoreCombo={handleAddMoreCombo}
      />

      {/* Resumen del Pedido */}
      <div className="section">
        <h2>Resumen del Pedido</h2>
        <input
          type="text"
          placeholder="Número de mesa"
          value={tableNumber}
          onChange={(e) => setTableNumber(e.target.value)}
        />
        {selectedCombos.map(combo => (
          <div key={combo.id}>
            <span>{combo.name} - ${combo.price} x {combo.quantity}</span>
            <button onClick={() => handleRemoveCombo(combo.id)}>Eliminar</button>
          </div>
        ))}
        <h3>Total: ${totalAmount}</h3>
        <button onClick={handleConfirmOrder}>Confirmar Pedido</button>
      </div>

      {/* Pedidos Confirmados */}
      <div className="orders-section">
        <h2>Pedidos Confirmados</h2>
        {orders.map((order, index) => (
          <div key={index}>
            <h3>Mesa: {order.tableNumber}</h3>
            <ul>
              {order.combos.map(combo => (
                <li key={combo.id}>{combo.name} x {combo.quantity} - ${combo.price * combo.quantity}</li>
              ))}
            </ul>
            <h4>Total: ${order.combos.reduce((total, combo) => total + combo.price * combo.quantity, 0)}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
