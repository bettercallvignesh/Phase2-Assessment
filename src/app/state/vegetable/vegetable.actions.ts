import { IVegetable } from "src/app/veges-list/veges";
import { createAction, props } from '@ngrx/store';
export const setCurrentVegetable = createAction(
    '[Vegetable] Set Current Vegetable',
    props<{ currentVegetableId: number }>()
  );
  
  export const clearCurrentVegetable = createAction(
    '[Vegetable] Clear Current Vegetable'
  );
  
  export const initializeCurrentVegetable = createAction(
    '[Vegetable] Initialize Current Vegetable'
  );
  
  export const loadVegetables = createAction(
    '[Vegetable] Load'
  );
  
  export const filterVegetablesSuccess = createAction(
    '[Vegetable] filter Success',
    props<{ veges: IVegetable[] }>()
  );
  
  export const loadVegetablesFailure = createAction(
    '[Vegetable] Load Fail',
    props<{ error: string }>()
  );
  
  export const updateVegetable = createAction(
    '[Vegetable] Update Vegetable',
    props<{ item: IVegetable}>()
  );
  
  export const updateVegetableSuccess = createAction(
    '[Vegetable] Update Vegetable to cart Success',
    props<{ item: IVegetable }>()
  );
  
  export const updateVegetableFailure = createAction(
    '[Vegetable] Update Vegetable Fail',
    props<{ error: string }>()
  );
  
 /*  export const createVegetable = createAction(
    '[Vegetable] Create Vegetable',
    props<{ item: IVegetable }>()
  );
  
  export const createVegetableSuccess = createAction(
    '[Vegetable] Create Vegetable Success',
    props<{ item: IVegetable }>()
  );
  
  export const createVegetableFailure = createAction(
    '[Vegetable] Create Vegetable Fail',
    props<{ error: string }>()
  ); */
  
  export const deleteVegetable = createAction(
    '[Vegetable] Delete Single Vegetable',
    props<{ itemId: number }>()
  );
  
  export const deleteVegetableSuccess = createAction(
    '[Vegetable] DeleteAll Vegetable Success',
    props<{ itemId: number }>()
  );
  
  export const deleteVegetableFailure = createAction(
    '[Vegetable] Delete Vegetable Fail',
    props<{ error: string }>()
  );
  export const createVegetable = createAction(
    '[Vegetable] Create Product',
    props<{ item: IVegetable }>()
  );
  
  export const createVegetablesSuccess = createAction(
    '[Vegetable] Create Vegetable Success',
    props<{ item: IVegetable }>()
  );
  
  export const createVegetablesFailure = createAction(
    '[Vegetable] Create Vegetable Fail',
    props<{ error: string }>()
  );
