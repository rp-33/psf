import React from 'react';
import {useSelector} from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/EvilIcons'
import Home from '../views/Home';
import Login from '../views/Login';
import Signup from '../views/Signup';
import Crowdfunding from '../views/Crowdfunding';
import Map from '../views/Map';
import Notifications from '../views/Notifications';
import MyProfile from '../views/MyProfile';
import MyProjects from '../views/MyProjects';
import CreateProjectStepOne from '../views/CreateProject/StepOne';
import CreateProjectStepTwo from '../views/CreateProject/StepTwo';
import CreateProjectStepThree from '../views/CreateProject/StepThree';
import InformationProject from '../views/InformationProject';
import CountryResidence from '../views/CountryResidence';
import EditAvatar from '../views/EditAvatar';
import WorkConfiguration from '../views/WorkConfiguration';
import EditProfessionStepOne from '../views/EditProfession/EditOne';
import EditProfessionStepTwo from '../views/EditProfession/EditTwo';
import EditPassword from '../views/EditPassword';
import EditPhone from '../views/EditPhone/';
import Comments from '../views/Comments';
import Contribute from '../views/Contribute';
import ThankMessage from '../views/ThankMessage';
import Staticts from '../views/Staticts';
import Suggestions from '../views/Suggestions'

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();


const HomeScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ 
        headerShown: false,
        gestureEnabled: false,
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
      />
      <Stack.Screen
        name="Login"
        component={Login}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
      />
    </Stack.Navigator>
  );
}

const CreateProjectScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName="CreateProjectStepOne"
      screenOptions={{ 
        headerShown: false,
        gestureEnabled: false,
      }}
    >
      <Stack.Screen
        name="CreateProjectStepOne"
        component={CreateProjectStepOne}
      />
      <Stack.Screen
        name="CreateProjectStepTwo"
        component={CreateProjectStepTwo}
      />
      <Stack.Screen
        name="CreateProjectStepThree"
        component={CreateProjectStepThree}
      />
    </Stack.Navigator>
  );
}

const EditProfessionScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName="EditProfessionStepOne"
      screenOptions={{ 
        headerShown: false,
        gestureEnabled: false,
      }}
    >
      <Stack.Screen
        name="EditProfessionStepOne"
        component={EditProfessionStepOne}
      />
      <Stack.Screen
        name="EditProfessionStepTwo"
        component={EditProfessionStepTwo}
      />
    </Stack.Navigator>
  );
}

const CrowdfundingScreen = ()=>{
  return(
    <Stack.Navigator
      initialRouteName="Crowdfunding"
      screenOptions={{ 
        headerShown: false,
        gestureEnabled: false,
      }}
    >
      <Stack.Screen
        name="Crowdfunding"
        component={Crowdfunding}
      />
      <Stack.Screen
        name="MyProjects"
        component={MyProjects}
      />
      <Stack.Screen
        name="CreateProject"
        component={CreateProjectScreen}
      />
      <Stack.Screen
        name="InformationProject"
        component={InformationProject}
      />
      <Stack.Screen
        name="Comments"
        component={Comments}
      />
      <Stack.Screen
        name="Contribute"
        component={Contribute}
      />
      <Stack.Screen
        name="ThankMessage"
        component={ThankMessage}
      />
      <Stack.Screen
        name="Staticts"
        component={Staticts}
      />
    </Stack.Navigator>
  )
}

const MapScreen = ()=>{
  return(
    <Stack.Navigator
      initialRouteName="Map"
      screenOptions={{ 
        headerShown: false,
        gestureEnabled: false,
      }}
    >
      <Stack.Screen
        name="Map"
        component={Map}
      />
      <Stack.Screen
        name="WorkConfiguration"
        component={WorkConfiguration}
      />
      <Stack.Screen
        name="EditProfession"
        component={EditProfessionScreen}
      />
    </Stack.Navigator>
  )
}


const ProfileScreen = ()=>{
  return(
    <Stack.Navigator
      initialRouteName="MyProfile"
      screenOptions={{ 
        headerShown: false,
        gestureEnabled: false,
      }}
    >
      <Stack.Screen
        name="MyProfile"
        component={MyProfile}
      />
      <Stack.Screen
        name="CountryResidence"
        component={CountryResidence}
      />
      <Stack.Screen
        name="EditAvatar"
        component={EditAvatar}
      />
      <Stack.Screen
        name="EditProfession"
        component={EditProfessionScreen}
      />
      <Stack.Screen
        name="EditPassword"
        component={EditPassword}
      />
      <Stack.Screen
        name="EditPhone"
        component={EditPhone}
      />
      <Stack.Screen
        name="Suggestions"
        component={Suggestions}
      />
    </Stack.Navigator>
  )
}

const DashboardScreen = ()=>{
  return(
      <Tab.Navigator
        initialRouteName="Crowdfunding"
        activeColor="black"
        inactiveColor="#c7c7c7"
        barStyle={{ backgroundColor: 'white' }}
        labeled  = {false}
      >
        <Tab.Screen
          name="Crowdfunding"
          component={CrowdfundingScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="star" color={color} size={26} />
            )
          }}
        />
        <Tab.Screen
          name="Map"
          component={MapScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="location" color={color} size={26} />
            )
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="bell" color={color} size={26} />
            )
          }}
        />
        <Tab.Screen
          name="MyProfile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="user" color={color} size={26} />
            )
          }}
        />
      </Tab.Navigator>
  )
} 

const RootScreen = ()=>{

  const {isAuthenticated} = useSelector(state => state.user);
  
  return(
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ 
        headerShown: false,
        gestureEnabled: false,
      }}
    >
      {!isAuthenticated ? (
        <Stack.Screen name="Home" component={HomeScreen} />
      ) : (
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
      )}

    </Stack.Navigator>
  )
}

const Navigator =()=> {
  return (
    <NavigationContainer>
      <RootScreen />
    </NavigationContainer>
  )
}

export default Navigator
