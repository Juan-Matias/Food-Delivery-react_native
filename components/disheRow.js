import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { themeColors } from '../theme';
import * as Icon from 'react-native-feather';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, selectCartItemsById } from '../slices/cartSlice';
import { urlFor } from '../sanity';

export default function DisheRow({ item }) {
    const dispatch = useDispatch();

    // Asegúrate de que `selectCartItemsById` devuelva un array
    const totalItems = useSelector(state => selectCartItemsById(state, item._id))?.length || 0;

    const handleIncrease = () => {
        dispatch(addToCart({ ...item }));
    };

    const handleDecrease = () => {
        if (totalItems > 0) {
            dispatch(removeFromCart({ id: item.id }));
        }
    };

    return (
        <View className="flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2">
            <Image 
                className="rounded-3xl" 
                style={{ height: 100, width: 100 }} 
                source={{uri:urlFor(item.image).url()}} />

            <View className="flex-1 space-y-3 pl-3">
                <Text className="text-xl">{item.name}</Text>
                <Text className="text-gray-700">{item.description}</Text>
                <View className="flex-row justify-between items-center">
                    <Text className="text-gray-700 text-lg font-bold">
                        ${item.price}
                    </Text>
                    <View className="flex-row items-center">
                        <TouchableOpacity
                            onPress={handleDecrease}
                            disabled={totalItems === 0}
                            className="p-1 rounded-full"
                            style={{ backgroundColor: totalItems === 0 ? 'gray' : themeColors.bgColor(1) }}
                        >
                            <Icon.Minus strokeWidth={2} height={20} width={20} stroke={'white'} />
                        </TouchableOpacity>

                        <Text className="px-3">
                            {totalItems}
                        </Text>

                        <TouchableOpacity
                            onPress={handleIncrease}
                            className="p-1 rounded-full"
                            style={{ backgroundColor: themeColors.bgColor(1) }}
                        >
                            <Icon.Plus strokeWidth={2} height={20} width={20} stroke={'white'} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}