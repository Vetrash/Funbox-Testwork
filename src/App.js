import React from 'react';
import './App.scss';
import Cart from './components/Cart.js';

class App extends React.Component {
  render() {
    return (
      <div className="conteiner">
        <p className="mainTitle">Ты сегодня покормил кота?</p>
        <div className="cartGroup">
          <Cart
            taste="с фуа-гра"
            portions={10}
            gift={1}
            otherText=""
            weight="0,5"
            selectetUnderText="Печень утки разварная с артишоками."
            weightUnit="кг"
          />
          <Cart
            taste="с рыбой"
            portions={40}
            gift={2}
            otherText=""
            weight="2"
            selectetUnderText="Головы щучьи с чесноком да свежайшая сёмгушка."
            weightUnit="кг"
          />
          <Cart
            taste="с курой"
            portions={100}
            gift={5}
            otherText="заказчик доволен"
            weight="5"
            selectetUnderText="Филе из цыплят с трюфелями в бульоне."
            weightUnit="кг"
            isInStock={false}
          />
        </div>
      </div>
    );
  }
}

export default App;
