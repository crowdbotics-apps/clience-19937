import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial96619Navigator from '../features/Tutorial96619/navigator';
import NotificationList96591Navigator from '../features/NotificationList96591/navigator';
import Settings96590Navigator from '../features/Settings96590/navigator';
import Settings96582Navigator from '../features/Settings96582/navigator';
import UserProfile96580Navigator from '../features/UserProfile96580/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial96619: { screen: Tutorial96619Navigator },
NotificationList96591: { screen: NotificationList96591Navigator },
Settings96590: { screen: Settings96590Navigator },
Settings96582: { screen: Settings96582Navigator },
UserProfile96580: { screen: UserProfile96580Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
