import React from "react";
import {
    View,
    Text,
    Button,
  } from "native-base";
import {
    createNativeStackNavigator,
  } from "@react-navigation/native-stack";

const PhotosStack = createNativeStackNavigator();

import { CommonActions } from '@react-navigation/native';
        
const PhotoList = ({navigation}:any) => {
  return (
    <View>
        <Text>Photo List</Text>
        <Button
              onPress={() => navigation.navigate("Photo")} 
        >Go to Details</Button>
      <Button onPress={() => navigation.navigate("NewPhoto")}>Add Photo </Button>
    </View>
  )
}

const Photo = ({navigation}:any) => {

  return (
    <View>
      <Text>Photo</Text>
      <Button onPress={() => navigation.reset({
                   index: 0,
                   routes: [{ name: 'Main' }]})}>Go to Home </Button>
      <Button onPress={() => navigation.goBack()}>Go back </Button>
    </View>
  )
}

const NewPhoto = ({navigation}:any) => {

  return (
    <View>
      <Text>Photo Taking ...</Text>
      <Button onPress={() => navigation.reset({
                   index: 0,
                   routes: [{ name: 'Main' }]})}>Go to Home </Button>
      <Button onPress={() => navigation.goBack()}>Go back </Button>
    </View>
  )
}


export const PhotosScreen = () => {
  return (
    <PhotosStack.Navigator screenOptions={{headerShown: false }}  initialRouteName='CatalogList'>
      <PhotosStack.Screen name="PhotosList" component={PhotoList} /> 
      <PhotosStack.Screen name="Photo" component={Photo} /> 
      <PhotosStack.Screen name="NewPhoto" component={NewPhoto} /> 
    </PhotosStack.Navigator>  
  )
}