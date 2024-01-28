import { AuthProvider } from "./context/AuthContext";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from "./screens/LoginScreen";
import { Dashboard } from "./screens/Dashboard";
import { View } from "react-native";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <View className='flex h-full p-8 bg-white'>
      <AuthProvider>
        <NavigationContainer>
          <Stack.Navigator >
            <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="dashboard" component={Dashboard} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </AuthProvider>
    </View>
  );
}

