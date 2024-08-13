import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { featured } from '../constants/index.js';
import { themeColors } from '../theme';
import * as Icon from 'react-native-feather';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../slices/restaurantSlice.js';
import { removeFromCart, selectCartItems, selectCartTotal } from '../slices/cartSlice.js';
import { urlFor } from '../sanity.js';

export default function CartScreen() {
  // Verificar que 'featured' no esté vacío y que contenga un array
  if (!Array.isArray(featured) || featured.length === 0) {
    return (
      <View className="bg-white flex-1 justify-center items-center">
        <Text>No featured items available</Text>
      </View>
    );
  }

  // Verificar que el primer elemento de 'featured' tenga la propiedad 'restaurants' y que sea un array
  const firstFeaturedItem = featured[0];
  if (!firstFeaturedItem.restaurants || !Array.isArray(firstFeaturedItem.restaurants) || firstFeaturedItem.restaurants.length === 0) {
    return (
      <View className="bg-white flex-1 justify-center items-center">
        <Text>No restaurants available</Text>
      </View>
    );
  }

  // Acceder al primer restaurante
  const restaurant = useSelector(selectRestaurant);

  const navigation = useNavigation();

  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const [groupedItems, setGroupedItems] = useState({})
  const dispatch = useDispatch();
  const deliveryFeed =2;

  useEffect(()=>{
    const items = cartItems.reduce((group, item)=>{
        if(group[item.id]){
          group[item.id].push(item);
        }else{
          group[item.id]=[item];
        }
        return group;
    },{})
      setGroupedItems(items);
  },[cartItems])

  return (
    <View className="bg-white flex-1">
      {/* back button */}
      <View className="relative py-4 shadow-sm">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{backgroundColor: themeColors.bgColor(1)}}
          className="absolute z-10 rounded-full p-1 shadow top-5 left-2"
        >
          <Icon.ArrowLeft strokeWidth={3} stroke="white" />
        </TouchableOpacity>
        <View>
          <Text className="text-center font-bold text-xl">Your Cart</Text>
          <Text className="text-center text-gray-500">{restaurant.name}</Text>
        </View>
      </View>
      {/* delivery time */}
      <View style={{backgroundColor: themeColors.bgColor(0.2)}}
        className="flex-row px-4 items-center">
        <Image source={require('../assets/images/bikeGuy.png')} className="w-20 h-20 rounded-full"/>
        <Text className="flex-1 pl-4">Delivery in 20-30 Minutes</Text>
        <TouchableOpacity>
          <Text className="font-bold" style={{color: themeColors.text}}>
            Change  
          </Text>
        </TouchableOpacity>
      </View>
      {/* delivery time */}
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 50
        }}
        className="bg-gray-50 pt-5"
      >
        {Object.entries(groupedItems).map(([key, items]) => {
          let dish = items[0];
          return (
            <View key={key}
              className="flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-lg">
              <Text className="font-bold" style={{color: themeColors.text}}>
                {items.length} x
              </Text>
              <Image className="h-14 w-14 rounded-full" source={{uri: urlFor(dish.image).url()}}/>
              <Text className="flex-1 font-bold text-gray-700">{dish.name}</Text>
              <Text className="font-semibold text-base">${dish.price}</Text>
              <TouchableOpacity 
                className="p-1 rounded-full"
                onPress={()=> dispatch(removeFromCart({id: dish.id}))}
                style={{backgroundColor: themeColors.bgColor(1)}}
              >
                <Icon.Minus strokeWidth={2} height={20} width={20} stroke="white"/>
              </TouchableOpacity>
            </View>
          )
        })}
      </ScrollView>

      {/* Total */}
      <View style={{backgroundColor: themeColors.bgColor(0.2)}} className="p-6 px-8 rounded-t-3xl space-y-4"> 
        <View className="flex-row justify-between"> 
          <Text className="text-gray-700">SubTotal</Text>
          <Text className="text-gray-700">${cartTotal}</Text>
        </View>
        <View className="flex-row justify-between"> 
          <Text className="text-gray-700">Delivery free</Text>
          <Text className="text-gray-700">${deliveryFeed}</Text>
        </View>
        <View className="flex-row justify-between"> 
          <Text className="teFxt-gray-700 font-extrabold">Order Total</Text>
          <Text className="text-gray-700 font-extrabold">${deliveryFeed + cartTotal}</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={()=> navigation.navigate('OrderPrepairing')}
            style={{backgroundColor: themeColors.bgColor(1)}}
            className="p-3 rounded-full"
          >
            <Text className="text-white text-center font-bold text-lg">Place Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
