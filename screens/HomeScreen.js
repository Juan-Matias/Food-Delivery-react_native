import { View, Text, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import * as Icon from 'react-native-feather';
import { themeColors } from '../theme';
import { ScrollView } from 'react-native-gesture-handler';
import Categories from '../components/categories';
import FeatureRow from '../components/featureRow';
import { getFeaturedRestaurants } from '../api';

export default function HomeScreen() {
  const [featuredRestaurants, setFeaturedRestaurants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getFeaturedRestaurants();
        //console.log('Fetched restaurants data:', data); // Añadir console.log aquí
        if (Array.isArray(data) && data.length > 0) {
          setFeaturedRestaurants(data);
        } else {
          console.error('No restaurants found or data is not an array');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <SafeAreaView className="bg-white">
      <StatusBar barStyle="dark-content" />

      {/* search bar */}
      <View className="flex-row items-center space-x-2 px-4 pb-2">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
          <Icon.Search height="25" width="25" stroke="gray" />
          <TextInput placeholder="Restaurants" className="ml-2 flex-1" />
          <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
            <Icon.MapPin height="20" width="20" stroke="gray" />
            <Text className="text-gray-600">New York, NYC</Text>
          </View>
        </View>
        <View style={{ backgroundColor: themeColors.bgColor(1) }} className="p-3 rounded-full">
          <Icon.Sliders height="20" width="20" strokeWidth={2.5} stroke="white" />
        </View>
      </View>

      {/* main */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {/* Categories */}
        <Categories />

        {/* Featured */}
        <View className="mt-5">
          {featuredRestaurants.map((item, index) => (
            <FeatureRow
              key={index}
              title={item.name}
              restaurants={item.restaurants}
              description={item.description}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
