import {View, Text} from 'react-native';
import React, {createContext, useContext, useState} from 'react';
import * as CarListData from '../../assets/Cars.json';
const CarContext = createContext({});
export const CarProvider = ({children}) => {
  const [carlist, setCarList] = useState(CarListData.default);

  const addCar = car => {
    setCarList([...carlist, car]);
  };

  const deleteCarItem = id => {
    console.log('delete item for id=', id);
    const newcars = carlist.filter(item => item.id != id);
    setCarList(newcars);
    console.log('delete id', id);
  };
  const updateItem = data => {
    const newItem = carlist.map(item => (item.id == data.id ? data : item));
    setCarList(newItem);
  };
  return (
    <CarContext.Provider
      value={{
        cars: carlist,
        deleteCarItem,
        addCar,
        updateItem,
      }}>
      {children}
    </CarContext.Provider>
  );
};

export default function useCar() {
  return useContext(CarContext);
}
