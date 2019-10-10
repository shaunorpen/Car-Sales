import * as types from './actionTypes';

const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    store: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

export function vehicleReducer(state = initialState, action) {
  switch (action.type) {
    case types.BUY_ITEM:
      return {
          ...state,
          additionalPrice: state.additionalPrice + action.payload.item.price,
          car: {
              ...state.car,
              features: state.car.features.concat(action.payload.item)
          },
          store: state.store.filter(item => item.id !== action.payload.item.id),
      };
    case types.REMOVE_FEATURE:
      return {
          ...state,
          additionalPrice: state.additionalPrice - action.payload.item.price,
          car: {
            ...state.car,
            features: state.car.features.filter(feature => feature.id !== action.payload.item.id)
          },
          store: state.store.concat(action.payload.item),
      };
    default:
      return state;
  }
}