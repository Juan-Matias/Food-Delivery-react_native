import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as Icon from 'react-native-feather';
import { themeColors } from '../theme';
import DisheRow from '../components/disheRow';
import CartIcon from '../components/cartIcon';
import { StatusBar } from 'expo-status-bar';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../slices/restaurantSlice';
import { urlFor } from '../sanity';

export default function RestaurantScreen() {
  const { params } = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  let item = params;

  useEffect(() => {
    //console.log('Restaurant item:', item); // Verificar los datos

    if (item && item._id) {
      dispatch(setRestaurant({ ...item }));
    }
  }, [item]);

  if (!item) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-lg">Loading...</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-gray-100">
      <CartIcon />
      <StatusBar style="light" />
      <ScrollView>
        <View className="relative">
          <Image className="w-full h-72" source={{ uri: urlFor(item.image).url() }} />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-14 left-4 bg-gray-50 p-2 rounded-2xl ed-full shadow"
          >
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>

        <View
          style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
          className="-mt-12 pt-6 bg-white"
        >
          <View className="px-5">
            <Text className="text-3xl font-bold">{item.name}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <Image
                  source={require('../assets/images/fullStar.png')}
                  className="h-4 w-4"
                />
                <Text className="text-xs">
                  <Text className="text-green-700">{item.stars} </Text>
                  <Text className="text-gray-700">
                    ({item.stars} review) ·{' '}
                    <Text className="font-semibold">{item?.type?.name} </Text>
                  </Text>
                </Text>
              </View>
              <View className="flex-row items-center space-x-1">
                <Icon.MapPin color="gray" width={15} height={15} />
                <Text className="text-gray-700 text-xs">
                  Nearby · {item.address}
                </Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2">{item.description}</Text>
          </View>
        </View>

        <View className="bg-white pb-36">
          <Text className="px-4 py-4 text-2xl font-bold">Menu</Text>
          {item.dishes && item.dishes.length > 0 ? (
            item.dishes.map((dish, index) => (
              <DisheRow item={{ ...dish }} key={index} />
            ))
          ) : (
            <Text className="text-center py-4">No dishes available</Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
