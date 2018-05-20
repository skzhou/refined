import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'; // Version can be specified in package.json
import TabviewScreen from '../Containers/TabviewScreen'
import LaunchScreen from '../Containers/LaunchScreen'
import ChartScreen from '../../ChartScreen'
import HomeScreen from '../../HomeScreen'
import LoanScreen from '../../LoanScreen'
import CardScreen from '../../CardScreen'
import SettingScreen from '../../SettingScreen'


import React, { Component } from 'react'
import { Button,
  StyleSheet,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  View,} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './Styles/NavigationStyles'

// // Manifest of possible screens
// const PrimaryNav = StackNavigator({
//   TabviewScreen: { screen: TabviewScreen },
//   LaunchScreen: { screen: LaunchScreen }
// }, {
//   // Default config for all screens
//   headerMode: 'none',
//   initialRouteName: 'TabviewScreen',
//   navigationOptions: {
//     headerStyle: styles.header
//   }
// })
//
// export default PrimaryNav
//
//

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details!</Text>
      </View>
    );
  }
}

const SettingsStack = StackNavigator({
  Settings: { screen: SettingScreen },
  Details: { screen: DetailsScreen },
});

const PrimaryNav =  TabNavigator(
  {
    Home: { screen: HomeScreen },
    Stats: { screen: ChartScreen },
    Loans: { screen: LoanScreen },
    Friends: { screen: CardScreen },
    Settings: { screen: SettingsStack },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-person-add${focused ? '' : '-outline'}`;
        } else if (routeName === 'Stats') {
          iconName = `ios-stats${focused ? '' : '-outline'}`;
        } else if (routeName === 'Loans') {
          iconName = `ios-paper${focused ? '' : '-outline'}`;
        } else if (routeName === 'Friends') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        } else if (routeName === 'Settings') {
          iconName = `ios-settings${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Icon name={iconName} size={25} color={tintColor} />;
      },


    }),

    lazy: false,
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: '#194d33',
      showLabel: false,
      activeBackgroundColor: '#388e3c',
      inactiveBackgroundColor: '#dde6dd',
      style: {
        height: 60
      }
    },
    animationEnabled: true,
    swipeEnabled: false,
  }
)

export default PrimaryNav
