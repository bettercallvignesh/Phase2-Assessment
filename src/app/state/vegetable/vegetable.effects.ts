import { Injectable } from '@angular/core';

import { mergeMap, map, catchError, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';


/* NgRx */
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as VegetableActions from './vegetable.actions';

import { VegetableService } from 'src/app/shared/vegetable.service';

@Injectable()
export class VegetableEffects {

  constructor(private actions$: Actions, private vegetableService: VegetableService) { }

  loadVegetables$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(VegetableActions.loadVegetables),
        mergeMap(() => this.vegetableService.getVegetables()
          .pipe(
            map(veges => VegetableActions.filterVegetablesSuccess({ veges })),
            catchError(error => of(VegetableActions.loadVegetablesFailure({ error })))
          )
        )
      );
  });

  updateVegetable$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(VegetableActions.updateVegetable),
        concatMap(action =>
          this.vegetableService.updateVegetable(action.item)
            .pipe(
              map(item => VegetableActions.updateVegetableSuccess({ item })),
              catchError(error => of(VegetableActions.updateVegetableFailure({ error })))
            )
        )
      );
  });

//   createProduct$ = createEffect(() => {
//     return this.actions$
//       .pipe(
//         ofType(VegetableActions.createProduct),
//         concatMap(action =>
//           this.productService.createProduct(action.product)
//             .pipe(
//               map(product => VegetableActions.createProductSuccess({ product })),
//               catchError(error => of(ProductActions.createProductFailure({ error })))
//             )
//         )
//       );
//   });

  deleteVegetable$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(VegetableActions.deleteVegetable),
        mergeMap(action =>
          this.vegetableService.deleteVegetable(action.itemId).pipe(
            map(() => VegetableActions.deleteVegetableSuccess({ itemId: action.itemId })),
            catchError(error => of(VegetableActions.deleteVegetableFailure({ error })))
          )
        )
      );
  });
}