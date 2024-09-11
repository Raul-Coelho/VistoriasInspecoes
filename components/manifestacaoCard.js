import { View, Text } from 'react-native';
import React from 'react';
import { categoryBG, colors } from '../theme';

export default function ManifestacaoCard({item}) {
  return (
    <View style={{backgroundColor: categoryBG[item.grauDeRisco]}} className="flex-row justify-between items-center p-3 px-5 mb-3 rounded-2xl">
      <View>
        <Text className={`${colors.heading} font-bold`}>Problema: {item.problema}</Text>
        <Text className={`${colors.heading} font-bold`}>Risco: {item.grauDeRisco}</Text>
        <Text className={`${colors.heading} font-bold`}>Local: {item.local}</Text>
      </View>
      <View>
        <Text className="font-bold">Pontuação: {item.gravidade + item.urgencia + item.tendencia}</Text>
      </View>
    </View>
  )
}