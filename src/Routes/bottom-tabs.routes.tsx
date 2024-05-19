import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/homeScreen';
import GalleryScreen from '../screens/GalleryScreen';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

function BottomTabsRoutes() {
    return (
        <Tab.Navigator >
            <Tab.Screen name='Home' component={HomeScreen}
                options={{
                    title: 'Menu Principal',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name='home'
                            color='blue'
                            size={size}
                        />
                    )
                }} />
            <Tab.Screen name='Gallery' component={GalleryScreen}
                options={{
                    title: 'Galeria',
                    tabBarIcon: ({ color, size }) => (
                        <Feather
                            name='video'
                            color='blue'
                            size={size}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTabsRoutes;