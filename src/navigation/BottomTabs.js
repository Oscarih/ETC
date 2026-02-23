import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CalendarScreen from '../screens/CalendarScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'InicioTab') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Calendario') {
                        iconName = focused ? 'calendar' : 'calendar-outline';
                    } else if (route.name === 'Perfil') {
                        iconName = focused ? 'person' : 'person-outline';
                    }

                    // Return the icon component
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#0056B3', // Primary Blue
                tabBarInactiveTintColor: '#94A3B8', // Slate Gray
                tabBarStyle: {
                    borderTopWidth: 1,
                    borderTopColor: '#E2E8F0',
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 60,
                    paddingBottom: 8,
                    paddingTop: 8,
                },
                tabBarLabelStyle: {
                    fontSize: 10,
                    fontWeight: '600',
                }
            })}
        >
            <Tab.Screen
                name="InicioTab"
                component={HomeStack}
                options={{ title: 'Inicio' }}
            />
            <Tab.Screen
                name="Calendario"
                component={CalendarScreen}
            />
            <Tab.Screen
                name="Perfil"
                component={ProfileScreen}
            />
        </Tab.Navigator>
    );
}
