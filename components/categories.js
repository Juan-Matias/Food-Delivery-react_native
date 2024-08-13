import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { getCategories } from '../api.js';
import { urlFor } from '../sanity.js';

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState(null);
  let [categories, setCategories] = useState([]);
  useEffect(()=>{
    getCategories().then(data=>{
      setCategories(data);
    })
  },)

  return (
    <View className="mt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {categories.map((category, index) => {
          const isActive = category._id === activeCategory;
          const btnClass = isActive ? 'bg-gray-600' : 'bg-gray-200';
          const textClass = isActive ? 'font-semibold text-gray-800' : 'text-gray-500';
          
          return (
            <View key={index} className="flex justify-center items-center mr-6">
              <TouchableOpacity
                onPress={() => setActiveCategory(category._id)}
                className={`p-1 rounded-full shadow ${btnClass}`}
              >
                <Image style={{ width: 45, height: 45 }}
                source={{uri: urlFor(category.image).url()}} />
              </TouchableOpacity>
              <Text className={`text-sm ${textClass}`}>{category.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
