import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import ScreenWrapper from '../components/screenWrapper';
import BackButton from '../components/backButton';
import { Image } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../theme';
import EmptyList from '../components/emptyList';
import { Casa } from '../model/casa.model';
import ManifestacaoCard from '../components/manifestacaoCard';

export default function CasaExpensesScreen(props) {

  const items = [
    {
        id: 1,
        problema: 1,
        elemento: 'LAJE',
        local: 'Garagem',
        manifestacao: 'Fissura',
        grauDeRisco: 'Crítico',
        possivelCausa: 'Falha na execução',
        medida: 'Fazer direito',
        gravidade: 3,
        urgencia: 2,
        tendencia: 2,
      },
      {
        id: 2,
        problema: 2,
        elemento: 'LAJE',
        local: 'Sala',
        manifestacao: 'Rachadura do caralho',
        grauDeRisco: 'Médio',
        possivelCausa: 'Falha na execução',
        medida: 'Fazer direito',
        gravidade: 3,
        urgencia: 2,
        tendencia: 2,
      },
      {
        id: 3,
        problema: 3,
        elemento: 'LAJE',
        local: 'Quarto',
        manifestacao: 'Rachadura do caralho',
        grauDeRisco: 'Mínimo',
        possivelCausa: 'Falha na execução',
        medida: 'Fazer direito',
        gravidade: 3,
        urgencia: 2,
        tendencia: 2,
      },
  ];

  const navigation = useNavigation();
  const casa = props.route.params;

  return (
    <ScreenWrapper className="flex-1">
        <View className="px-4">
            <View className="relative mt-5">
                    <View className="absolute top-2 left-0 z-10">
                        <BackButton />
                    </View>
                    <View>
                        <Text className={`${colors.heading} text-xl font-bold text-center`}>{casa.cliente}</Text>
                        <Text className={`${colors.heading} text-xs text-center`}>{casa.localizacao}</Text>
                    </View>
                    
            </View>
            <View className="flex-row flex-nowrap mt-3">
              <Text className={`${colors.heading} text-base font-bold text-center`}>Classificação: </Text><Text className="text-base">{casa.classificacao}</Text>
              <Text className={`${colors.heading} text-base font-bold text-center ml-2`}>Data: </Text><Text className="text-base">{casa.data}</Text>
            </View>
            <View className="flex-row flex-nowrap mt-3">
              <Text className={`${colors.heading} text-base font-bold text-center`}>Idade Real: </Text><Text className="text-base">{casa.idadeRealEdificacao}</Text>
              <Text className={`${colors.heading} text-base font-bold text-center ml-2`}> Área: </Text><Text className="text-base">{casa.area}</Text>
              <Text className={`${colors.heading} text-base font-bold text-center ml-2`}> Qnt Cômodos: </Text><Text className="text-base">{casa.quantidadeComodos}</Text>
            </View>
            <View className="flex-row flex-nowrap mt-3">
              <Text className={`${colors.heading} text-base font-bold text-center`}>Identificação: </Text><Text className="text-base">{casa.identificacao}</Text>
              <Text className={`${colors.heading} text-base font-bold text-center ml-2`}>Equipamentos: </Text><Text className="text-base">{casa.equipamentos}</Text>
            </View>

            <View className="flex-row justify-center items-center rounded-md mb-4">
                <Image source={require('../assets/images/home.png')} className="w-96 h-60" />
            </View>
            <View className=" space-y-3">
                <View className="flex-row justify-between items-center">
                    <Text className={`${colors.heading} font-bold text-xl`}>Manifestações</Text>
                    <TouchableOpacity
                        className="p-2 px-3 bg-red-700 border border-gray-200 rounded-md">
                        <Text className="text-white">Add Manifestação</Text>
                    </TouchableOpacity>
                </View>
                <View style={{height: 430}}>
                    <FlatList 
                        data={items}
                        ListEmptyComponent={<EmptyList message={"You haven't recorded any expenses yet"} />}
                        keyExtractor={item=> item.id}
                        showsVerticalScrollIndicator={false}
                        className="mx-1"
                        renderItem={({item})=>{
                          return (
                              <ManifestacaoCard item={item} />
                          )
                      }}
                    />
                </View>
            </View>
        </View>
        
    </ScreenWrapper>
  )
}