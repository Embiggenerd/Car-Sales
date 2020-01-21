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

  const removeFeature = item => {
    console.log('removeFeature invoked', item)
  }

  const buyItem = item => {
    dispatch({ type: BUY_ITEM, payload: { item } })
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures handleRemoveFeature={removeFeature} car={car} />
      </div>
      <div className="box">
        <AdditionalFeatures handleAddFeature={buyItem} additionalFeatures={additionalFeatures} />
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  );
};

export default App

