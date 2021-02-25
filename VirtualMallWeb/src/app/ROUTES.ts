import {Route} from '@angular/router';

export const ROUTES: Route[] = [
  {
    path: 'products',
    loadChildren: () => import('./pages/product/product.module').then(m => m.ProductModule)
  }
];
