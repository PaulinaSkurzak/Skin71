import React from "react";
import {
    View,
    Text,
    Button,
  } from "native-base";

export const MainScreen:any = ({navigation}:any) => {

    return (
      <View flex="1" alignItems="center" justifyContent="center"> 
        <Text>Welcome to Skin Diag App</Text>
        <Button
                onPress={() => navigation.navigate("Catalog")} 
        >Open Catalog</Button>
        
        <Button
                onPress={() => navigation.navigate("Photos")} 
        >Self Diagnose</Button>
  
        </View>
    )
  }