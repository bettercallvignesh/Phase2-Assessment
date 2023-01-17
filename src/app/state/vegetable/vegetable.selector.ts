import { createFeatureSelector, createSelector, createReducer, on } from '@ngrx/store';


import * as AppState from '../../state/app.state';

import { VegetableState } from './vegetable.state';


// Selector functions
const getVegetableFeatureState = createFeatureSelector<VegetableState>('veges');

export const getCurrentVegetableId = createSelector(
  getVegetableFeatureState,
  state => state.currentVegetableId
);

export const getCurrentVegetable = createSelector(
  getVegetableFeatureState,
  getCurrentVegetableId,
  (state, currentVegetableId) => {

    if (currentVegetableId === 0) {
      return {
        id:0,
        name:'',
        category:'',
        imageUrl:'',
        price:0,
        quantity:0
   
        
      };
    } else {
      return currentVegetableId ? state.veges.find(p => p.id === currentVegetableId) : null;
    }
  }
);

export const getVegetables = createSelector(
  getVegetableFeatureState,
  state => state.veges
);

export const getError = createSelector(
  getVegetableFeatureState,
  state => state.error
);