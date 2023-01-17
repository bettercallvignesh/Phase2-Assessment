import { createReducer, on } from "@ngrx/store";
import * as VegetableActions from './vegetable.actions';


import { initialState, VegetableState } from "./vegetable.state";

export const vegetableReducer = createReducer<VegetableState>(
  initialState,
  
  on(VegetableActions.setCurrentVegetable, (state, action): VegetableState => {
    return {
      ...state,
      currentVegetableId: action.currentVegetableId
    };
  }),
  on(VegetableActions.clearCurrentVegetable, (state): VegetableState => {
    return {
      ...state,
      currentVegetableId: null
    };
  }),
  on(VegetableActions.initializeCurrentVegetable, (state): VegetableState => {
    return {
      ...state,
      currentVegetableId: 0
    };
  }),
  on(VegetableActions.filterVegetablesSuccess, (state, action): VegetableState => {
    return {
      ...state,
      veges: action.veges,
      error: ''
    };
  }),
  on(VegetableActions.loadVegetablesFailure, (state, action): VegetableState => {
    return {
      ...state,
      veges: [],
      error: action.error
    };
  }),
  on(VegetableActions.updateVegetableSuccess, (state, action): VegetableState => {
    const updatedVegetables = state.veges.map(
      item1 => action.item.id === item1.id ? action.item : item1);
    return {
      ...state,
      veges: updatedVegetables,
      currentVegetableId: action.item.id,
      error: ''
    };
  }),
  on(VegetableActions.updateVegetableFailure, (state, action): VegetableState => {
    return {
      ...state,
      error: action.error
    };
  }),








  // After a create, the currentProduct is the new product.







/*   on(ProductActions.createProductSuccess, (state, action): VegetableState => {
    return {
      ...state,
      products: [...state.products, action.product],
      currentProductId: action.product.id,
      error: ''
    };
  }),
  on(ProductActions.createProductFailure, (state, action): ProductState => {
    return {
      ...state,
      error: action.error
    };
  }), */


  on(VegetableActions.createVegetablesSuccess, (state, action): VegetableState => {
    return {
      ...state,
      veges: [...state.veges, action.item],
      currentVegetableId: action.item.id,
      error: ''
    };
  }),
  on(VegetableActions.createVegetablesFailure, (state, action): VegetableState => {
    return {
      ...state,
      error: action.error
    };
  }),







  // After a delete, the currentProduct is null.
  on(VegetableActions.deleteVegetableSuccess, (state, action): VegetableState => {
    return {
      ...state,
      veges: state.veges.filter(item => item.id !== action.itemId),
      currentVegetableId: null,
      error: ''
    };
  }),
  on(VegetableActions.deleteVegetableFailure, (state, action): VegetableState => {
    return {
      ...state,
      error: action.error
    };
  })
);