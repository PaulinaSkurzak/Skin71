import React from "react";
import {
    View,
    Text,
    Button,
    Box,
    Center,
  } from "native-base";
import { ImageBackground, StyleSheet } from "react-native";
import { style } from "styled-system";

const bkgImg = require("../assets/treatment.jpeg");

export const MainScreen:any = ({navigation}:any) => {

    return (
      <View style={styles.container}> 
        <ImageBackground source={bkgImg} style={styles.image}> 
        <Center>
        <Text></Text>
        <Button height="20" width="200"
                onPress={() => navigation.navigate("Catalog")} 
        >Skin Catalog</Button>
        <Box height="10"></Box>
        <Button height="20" width="200"
                onPress={() => navigation.navigate("Photos")} 
        >Self Diagnose</Button>
        </Center>
        </ImageBackground>
        </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: "center"
    },
  });