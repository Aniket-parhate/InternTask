import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

//Screens
import HomeScreen from './Screens/HomeScreen';
import BoxesScreen from './Screens/BoxesScreen';
import BooksScreen from './Screens/BooksScreen';
import MoreScreen from './Screens/MoreScreen';

const homeName = 'Home';
const boxesName = 'Boxes';
const booksName = 'Books';
const moreName = 'More';

const Tab = createBottomTabNavigator();
const Maincontainer = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let rn = route.name;
            if (rn === homeName) {
              iconName = 'home';
            } else if (rn === boxesName) {
              iconName = 'inbox';
            } else if (rn === booksName) {
              iconName = 'book';
            } else if (rn === moreName) {
              iconName = 'dotchart';
            }

            return <AntDesign name={iconName} size={size} />;
          },
          headerShown: false,
        })}>
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={boxesName} component={BoxesScreen} />
        <Tab.Screen name={booksName} component={BooksScreen} />
        <Tab.Screen name={moreName} component={MoreScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Maincontainer;

const styles = StyleSheet.create({});
