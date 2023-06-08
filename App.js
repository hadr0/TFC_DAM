import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuScreen from "./src/navigation/MenuScreen";
import CardLv1Screen from './src/navigation/CardLv1Screen';
import CardLv2Screen from './src/navigation/CardLv2Screen';
import CardLv3Screen from './src/navigation/CardLv3Screen';
import MathLv1Screen from './src/navigation/MathLv1Screen';
import MathLv2Screen from './src/navigation/MathLv2Screen';
import MathLv3Screen from './src/navigation/MathLv3Screen';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={MenuScreen} options={{ title: "Menú", headerTitleAlign: 'center' }}/>
        <Stack.Screen name="CardLv1" component={CardLv1Screen} options={{ title: "Memorama", headerTitleAlign: 'center' }} />
        <Stack.Screen name="CardLv2" component={CardLv2Screen} options={{ title: "Memorama", headerTitleAlign: 'center' }} />
        <Stack.Screen name="CardLv3" component={CardLv3Screen} options={{ title: "Memorama", headerTitleAlign: 'center' }} />
        <Stack.Screen name="MathLv1" component={MathLv1Screen} options={{ title: "Calculo mental", headerTitleAlign: 'center' }} />
        <Stack.Screen name="MathLv2" component={MathLv2Screen} options={{ title: "Calculo mental", headerTitleAlign: 'center' }} />
        <Stack.Screen name="MathLv3" component={MathLv3Screen} options={{ title: "Calculo mental", headerTitleAlign: 'center' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )

}
