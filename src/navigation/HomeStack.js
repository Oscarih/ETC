import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import PatientDetailScreen from '../screens/PatientDetailScreen';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ title: 'Inicio' }}
            />
            <Stack.Screen
                name="PatientDetail"
                component={PatientDetailScreen}
                options={{ title: 'Detalle del Paciente' }}
            />
        </Stack.Navigator>
    );
}
