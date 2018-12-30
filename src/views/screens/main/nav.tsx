import { createMaterialTopTabNavigator } from 'react-navigation'
import { RestoListScreen } from '../resto-list'
import { RestoListFavoriteScreen } from '../resto-list-favorite'

export const MainScreenNav = createMaterialTopTabNavigator(
  {
    RestoList: {
      screen: RestoListScreen,
      navigationOptions: {
        title: '⚓ Resto'
      }
    },
    RestoListFavorite: {
      screen: RestoListFavoriteScreen,
      navigationOptions: {
        title: '❤️ Favorite'
      }
    }
  },
  {
    initialRouteName: 'RestoList'
  }
)
