import React , { useEffect } from "react";
import {
    View,
    Text,
    Divider,
    Box,
    FlatList,
    Image,
    VStack,
    Spacer,
    Pressable,
    ScrollView,
    HStack,
    Center,
    Stack,
    Heading,
  } from "native-base";
import {
    createNativeStackNavigator,
  } from "@react-navigation/native-stack";
import { ItemClick } from "native-base/lib/typescript/components/composites/Typeahead/useTypeahead/types";

const CatalogStack = createNativeStackNavigator();

/*
const CatalogList = ({navigation}:any) => {
    return (
      <View>
          <Text>CatalogList</Text>
          <Button
                onPress={() => navigation.navigate("CatalogItem")} 
          >Go to Details</Button>
      </View>
    )
  }
  
  const CatalogItem = ({navigation}:any) => {
  
    return (
      <View>
        <Text>CatalogItem</Text>
        <Button onPress={() => navigation.reset({
                     index: 0,
                     routes: [{ name: 'Main' }]})}>Go to Home </Button>
        <Button onPress={() => navigation.goBack()}>Go back </Button>
      </View>
    )
  }
 */ 


const acne = require("../assets/catalog/acne.jpeg");
const eczema = require("../assets/catalog/eczema.jpeg");
const kp = require("../assets/catalog/kp.jpeg");
const hives = require("../assets/catalog/hives.jpeg");
const sunburn = require("../assets/catalog/sunburn.jpeg");

const data = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    img: acne,
    fullName: "Acne",
    recentText: "Hair follicles clogged with oil and\ndead skin cells",
    fullText: "FACTORS THAT CAN TRIGGER OR AGGRAVATE ACNE\n-Androgens\n-Humidity and heat\n-Stress\n-Diet",
    fullText2: "SYMPTOMS\n * Whiteheads (closed plugged pores)\n * Blackheads (open plugged pores)\n * Small red, tender bumps (papules)\n * Pimples (pustules), papules with pus at their tips\n * Large, solid, painful lumps under the skin (nodules)",
    fullText3: "TREATMENT\n * Skin cleansing\n * Moisturizing or using special creams\n * Using retonoids\n * Using sunscreen",
    fullText4: "STAGES\n * Mild\n * Moderate\n * Severe",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    img: eczema,
    fullName: "Eczema",
    recentText: "Rough and inflamed patches of skin",
    fullText: "SYMPTOMS\n-Eczematous inflammation\n-Acute\n-Oozing\n-severe pruritus\n-weeping\n-erythema\n-edema\n-vesculation\n-Subacute\n-Itching\n-Erythema\n-Papules and plaques\n-dryness\n-scaling\n-Chronic\n-Inflamed, itchy skin thickens, and surface of the skin markings become more prominent\n\n",
    fullText2: "SYMPTOMS\n* Inflammation\n* Oozing\n* Itching\n* Weeping\n* Redness\n* Swelling\n* Papules and plaques\n* Dryness\n* Scaling",
    fullText3: "TREATMENT\n* Topicals, medication applied to the skin\n* Systemic treatments\n* Pills\n* Moisturizers\n* Baths\n* Natural remedies",
    fullText4: "STAGES\n* Acute\n* Subacute\n* Chronic\nIRRITANTS\n* Soaps and detergents\n* Shampoos\nENVIRONMENTAL FACTORS OR ALLERGENS\n* Cold and dry weather\n* Dampness",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    img: kp,
    fullName: "Keratosis Pilaris",
    recentText: "Dry, rough patches and tiny bumps\non the skin",
    fullText: "SYMPTOMS\n* Painless tiny bumps, typically on the upper arms, thighs, cheeks or buttocks\n-Dry, rough skin in the areas with bumps\n-Worsening when seasonal changes cause low humidity and dry skin\n-Sandpaper like bumps\n\nTREATMENT\n-Humidifiers\n-Warm baths\n-Exfoliation\n-Hydrating lotion",
    fullText2: "SYMPTOMS\n* Painless tiny bumps, typically on the upper arms, thighs, cheeks or buttocks\n* Dry, rough skin in the areas with bumps\n* Worsening when seasonal changes cause low humidity and dry skin\n* Sandpaper like bumps",
    fullText3: "TREATMENT\n* Humidifiers\n* Warm baths\n* Exfoliation\n* Hydrating lotion\n* Chemical peels\n* Retinol creams\n* Microdermabrasion, an intense exfoliating treatment",
    fullText4: "COMMON IN PEOPLE WITH\n* dry skin\n* eczema\n* obesity\n* women\n* children or teenagers",
  },
  {
    id: "68694a0f-3da1-431f-bd56-142371e29d72",
    img: hives,
    fullName: "Hives",
    recentText: "Itchy, raised welts that are found on\nthe skin",
    fullText: "SYMPTOMS\n-Red, pink, or flesh colored\n-Sometimes sting or hurt\n\nTREATMENT\n-OTC antihistamines can be used to control itching\n-Soothing anti itch lotion or cream can give temporary relief",
    fullText2: "SYMPTOMS\n* Red, pink, or flesh colored\n* Sometimes sting or hurt",
    fullText3: "TREATMENT\n* Over the counter antihistamines can be used to control itching\n* Soothing anti itch lotion or cream can give temporary relief",
    fullText4: "TRIGGERS\n* Some food (especially peanuts, eggs, nuts and shellfish)\n* Medications, such as antibiotics\n* Insect stings or bugs\n* Infections (bacterial or viral)\n* Some plants\n* Pollen\n* Latex\n* Blood transfusions\n* Physical stimuli, such as pressure, cold, heat, exercise or sun exposure",
  },
  {
    id: "28694a0f-3da1-471f-bd96-142456e29d72",
    img: sunburn,
    fullName: "Sun Burns",
    recentText: "Inflammatory reaction to ultraviolet (UV)\nradiation damage to the skin's outermost\nlayers",
    fullText: "SYMPTOMS\n-Red, tender skin that is warm or sensitive to the touch\n-Blisters that develop hours or days later\n-Severe reactions, including chills, nausea, or rash\n-Peeling skin or sunburned areas several days after the sunburn",
    fullText2: "SYMPTOMS\n* Red, tender skin that is warm or sensitive to the touch\n* Blisters that develop hours or days later\n* Severe reactions, including chills, nausea, or rash\n* Peeling skin or sunburned areas several days after the sunburn",
    fullText3: "TREATMENT\n* Cool it down\n* Moisturize\n* Nonsteroidal anti inflammatory drug\n* Replenish fluids\n* Avoid additional sun exposure",
    fullText4: "RISK FACTORS\n* Having light skin, blue eyes, and red or blond hair\n* Living or vacationing somewhere sunny, warm or at high altitude\n* Working outdoors\n* Swimming or spraying your skin with water\n* Regularly exposing unprotected skin to UV light from sunlight or artificial sources",
  },
]

const CatalogList = ({ navigation }:any) => {
  return (
    <Box
      w={{
        base: "100%",
        md: "100%",
      }}
      h={{
        base: "100%",
        md: "100%",
      }}
    >
      <FlatList
        data={data}
        renderItem={({ item }) => (
         <Pressable
         onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('CatalogItem', {
            fullName: item.fullName, 
            fullText: item.fullText,
            recentText: item.recentText,
            img: item.img,
            fullText2: item.fullText2,
            fullText3: item.fullText3,
            fullText4: item.fullText4,
          });
          }}
         >
          <Box
            borderBottomWidth="1"
            _dark={{
              borderColor: "gray.600",
            }}
            borderColor="coolGray.200"
            pl="4"
            pr="5"
            py="2"
          >
            <HStack space={3} justifyContent="space-between">
              <Image
                size={100}
                resizeMode={"contain"}
                source={item.img}
                alt="item.img"
              />
              <VStack>
                <Text
                  _dark={{
                    color: "warmGray.50",
                  }}
                  color="coolGray.800"
                  bold
                >
                  {item.fullName}
                </Text>
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: "warmGray.200",
                  }}
                >
                  {item.recentText}
                </Text>
              </VStack>
              <Spacer />
              <Spacer />
            </HStack>
          </Box>
          </Pressable>
        )}
        keyExtractor={(item) => item.id}
      />
    </Box>
  )
}

const CatalogItem = ({ route, navigation }:any) => {
  const { fullName, fullText, recentText, img, fullText2, fullText3, fullText4 } = route.params;
  //navigation.setOptions({ title: fullName });

  useEffect(() => {
    navigation.setOptions({ title: fullName });
  });

  return (
    <Box>
    <ScrollView>    
            <Divider my = "2" />
            <Center flex={2} px="3">
              <Image
                style={{width: 350, height: 250}}
                borderRadius={25}
                source={img}
                alt="Alternate Text"
                size="xl"
              />
          </Center>
          <Divider my = "2" />
          <Stack p="4" space={3}>
            <Stack space={2}>
              <Heading size="md" ml="-1">
                 {fullName}
              </Heading>
              <Box
                fontSize="md"
                 bg="primary.500"
                 borderRadius="5"
                fontWeight="500"
                ml="-0.5"
                mt="-1"
              >
                <Center>
                <Text 
                color="white">
                {recentText}
                </Text>
                </Center>
              </Box>
              <Box
                fontSize="md"
                 bg="#E3E6E7"
                 borderRadius="5"
                fontWeight="500"
                ml="-0.5"
                mt="-1"
              >
       
                <Text 
                color="black">
                {fullText2}
                </Text>
             
              </Box>
              <Box
                fontSize="md"
                 bg="#E3E6E7"
                 borderRadius="5"
                fontWeight="500"
                ml="-0.5"
                mt="-1"
              >
      
                <Text 
                color="black">
                {fullText3}
                </Text>
        
              </Box>
              <Box
                fontSize="md"
                 bg="#E3E6E7"
                 borderRadius="5"
                fontWeight="500"
                ml="-0.5"
                mt="-1"
              >
             
                <Text 
                color="black">
                {fullText4}
                </Text>
              
              </Box>
            </Stack>
            </Stack>
      </ScrollView>
      </Box>
    )
  }
  
  export const CatalogScreen = ({route, navigation}:any) => {
    return (
      <CatalogStack.Navigator screenOptions={{headerShown: false }}  initialRouteName='CatalogList'>
        <CatalogStack.Screen name="CatalogList" component={CatalogList} /> 
        <CatalogStack.Screen name="CatalogItem" component={CatalogItem} /> 
      </CatalogStack.Navigator>  
    )
  }