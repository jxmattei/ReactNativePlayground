import Main from './src/screens/Main.js';
import NavigationSample from './src/screens/navigation/NavigationSample.js';
import {StackNavigator} from 'react-navigation';

/*
  Link all your pages StackNavigator.
  First item will become the default screen view.
*/

const Navigation = StackNavigator({
  Main:{screen:Main},
  NavigationSample:{screen:NavigationSample},
});

/* Set Navigation as the default component */
export default Navigation;
