import React from "react";
import {
    View,
    Text,
    Button,
    Box,
  } from "native-base";

export const MainScreen:any = ({navigation}:any) => {

    return (
      <View flex="1" alignItems="center" justifyContent="center"> 
        <Text></Text>
        <Button height="20" width="200"
                onPress={() => navigation.navigate("Catalog")} 
        >Skin Catalog</Button>
        <Box height="10"></Box>
        <Button height="20" width="200"
                onPress={() => navigation.navigate("Photos")} 
        >Self Diagnose</Button>
  
        </View>
    )
  }