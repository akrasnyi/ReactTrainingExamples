import * as React from 'react';
import Inline from './Inline';
import Obj from './Object';
import Styled from './Styled';
import { Route, Switch } from 'react-router-dom';
import NavigationPanel, {
  NavigationLink
} from '../common/NavigationPanel/NavigtionPanel';

const formlinks: NavigationLink[] = [
  { name: 'Inline', path: '/styling/inline' },
  { name: 'Object', path: '/styling/object' },
  { name: 'Styled-Components', path: '/styling/styled' }
];

const Forms: React.FunctionComponent<null> = () => {
  return (
    <div>
      <h1>
        Examples for <b>Styling</b> presentation
      </h1>
      <NavigationPanel links={formlinks} />

      <Switch>
        <Route path='/styling/inline' component={Inline} />
        <Route path='/styling/object' component={Obj} />
        <Route path='/styling/styled' component={Styled} />
      </Switch>
    </div>
  );
};

export default Forms;
