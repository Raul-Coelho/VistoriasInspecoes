import { View, Text, Image } from 'react-native';
import React from 'react';

export default function EmptyList({mensagem}) {
  return (
    <View className="flex justify-center items-center my-5 space-y-3">
        <Image className="w-36 h-36 rounded-lg" source={require('../assets/images/empty.png')} />
        <Text className="font-bold text-gray-400">{mensagem || 'Não foram encontrados dados'}</Text>
    </View>
  )
}