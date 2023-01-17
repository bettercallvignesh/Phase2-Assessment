
import { IVegetable } from 'src/app/veges-list/veges';
import * as AppState from '../../state/app.state';
// Extends the app state to include the product feature.
// This is required because products are lazy loaded.
// So the reference to ProductState cannot be added to app.state.ts directly.


export interface State extends AppState.State {
  veges: VegetableState;
}
export interface VegetableState{
  currentVegetableId:number | null;
  veges:IVegetable[];
  error:string;
}

export const initialState:VegetableState={
  currentVegetableId:null,
  veges:[],
  error:''
}