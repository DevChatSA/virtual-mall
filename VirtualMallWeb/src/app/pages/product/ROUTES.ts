import {Route} from '@angular/router';
import {ProductComponent} from './product.component';
import {ProductOverviewComponent} from './product-overview/product-overview.component';

export const ROUTES: Route[] = [
  {
    path: '',
    component: ProductComponent,
    children: [
      {
        path: '',
        redirectTo: 'product-overview'
      },
      {
        path: 'product-overview',
        component: ProductOverviewComponent
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  }
];
