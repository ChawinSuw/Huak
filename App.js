import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Preload from './pages/Preload';
import Timeline from './pages/Timeline'
import Gallery from './pages/Gallery';
import Prepost from './pages/Prepost';
import Post from './pages/Post';
import Login from './pages/Login';
import Register from './pages/Register';
import Favorite from './pages/Favorite'

const Stack = createNativeStackNavigator();

function PageStack() {
  return (
    <Stack.Navigator 
      initialRouteName='Preload'
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1b8057'
        },
        headerTintColor: '#ede9a3',
        headerTitleStyle: {
          fontWeight: 'bold',
        }
      }}
    >
      <Stack.Screen 
        name="Preload" 
        component={Preload} 
        options={{headerShown:false}}
      />
      <Stack.Screen 
        name="Timeline" 
        component={Timeline}
        options={{title: 'HUAK', headerBackVisible:false}} 
      />
      <Stack.Screen 
        name="Gallery" 
        component={Gallery}
        options={{title: 'Share Your Idea'}} 
      />
      <Stack.Screen 
        name="Prepost" 
        component={Prepost}
        options={{title: 'Share Your Idea'}} 
      />
      <Stack.Screen 
        name="Post" 
        component={Post}
        options={{title: 'HUAK'}} 
      />
      <Stack.Screen 
        name="Login" 
        component={Login}
        options={{headerShown:false}} 
      />
      <Stack.Screen 
        name="Register" 
        component={Register}
        options={{headerShown:false}} 
      />
      <Stack.Screen 
        name="Favorite" 
        component={Favorite}
        options={{title: 'Favorite', headerTitleAlign: 'center'}} 
      />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <PageStack/>
    </NavigationContainer>
  );
}