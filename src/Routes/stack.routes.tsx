import { createStackNavigator } from '@react-navigation/stack';
import GalleryScreen from '../screens/GalleryScreen';
import HomeScreen from '../screens/homeScreen';

const { Screen, Navigator } = createStackNavigator();

export function StackRoutes() {
  return (
    <Navigator>
      <Screen name='Home' component={HomeScreen} options={{headerShown: false}}/>
      <Screen name='Gallery' component={GalleryScreen} options={{title: 'Galeria', }} />
    </Navigator>
  );
}
