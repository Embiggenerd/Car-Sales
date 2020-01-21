import React, { useCallback } from 'react';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { BUY_ITEM, REMOVE_ITEM} from './redux/constants'
const App = () => {
  const car = useSelector(state => state.car)
  const additionalFeatures = useSelector(state => state.additionalFeatures)
  const additionalPrice = useSelector(state => state.additionalPrice)
  const dispatch = useDispatch()
  // const state = {
  //   additionalPrice: 0,
  //   car: {
  //     price: 26395,
  //     name: '2019 Ford Mustang',
  //     image:
  //       'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
  //     features: []
  //   },
  //   additionalFeatures: [
  //     { id: 1, name: 'V-6 engine', price: 1500 },
  //     { id: 2, name: 'Racing detail package', price: 1500 },
  //     { id: 3, name: 'Premium sound system', price: 500 },
  //     { id: 4, name: 'Rear spoiler', price: 250 }
  //   ]
  // };

  const removeFeature = item => {

  }
  const buyItem = item => {
    dispatch({ type: BUY_ITEM, payload: { item } })
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} />
      </div>
      <div className="box">
        <AdditionalFeatures handleAddFeature={buyItem} additionalFeatures={additionalFeatures} />
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  );
};

export default App

