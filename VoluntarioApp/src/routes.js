// src/routes.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserProvider } from './contexts/userContext';
import Home from './pages/home/index';
import FindOutMore from './pages/findOutMore';
import NavigatePages from './pages/navigatePages';
import Supporters from './pages/supporters';
import Event from './pages/event';
import RegisterEvent from './pages/registerEvent';
import EventDetails from './pages/eventDetails';
import UserEvents from './pages/userEvents';
import UserEdit from './pages/userEdit';

const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <UserProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="FindOutMore"
                        component={FindOutMore}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="NavigatePages"
                        component={NavigatePages}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Supporters"
                        component={Supporters}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Event"
                        component={Event}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="RegisterEvent"
                        component={RegisterEvent}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="EventDetails"
                        component={EventDetails}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="UserEvents"
                        component={UserEvents}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="UserEdit"
                        component={UserEdit}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </UserProvider>
    );
};

export default Routes;
