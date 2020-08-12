import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Index from '../pages/Index';
import Show from '../pages/Show';
import Page404 from '../pages/Page404';

export default function Routes() {
   return (
      <Switch>
         <Route exact path="/" component={Home} />
         <Route exact path="/products/:idcategory" component={Index} />
         <Route exact path="/products/:idcategory/:id" component={Show} />
         <Route exact path="/page404" component={Page404} />
         <Route path="*" component={Page404} />
      </Switch>
   );
}
