import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import React from 'react';
import ScreenWrapper from '../components/screenWrapper';
import { colors } from '../theme';
import EmptyList from '../components/emptyList';
import { useNavigation } from '@react-navigation/native';

const casas = [
  {
    id: 1,
    cliente: 'Casa de Raul',
    data: new Date().getDate(),
    localizacao: 'Avenia Gilvan Morais - 607',
    classificacao: 'Residencia unifamiliar',
    idadeRealEdificacao: '20 anos',
    area: '100m2',
    identificacao: 'Visual',
    equipamentos: 'Fissurometro',
    quantidadeComodos: 5,
    vistaEmLoco : require('../assets/images/casa.png'),
    vistaMaps : require('../assets/images/mapa.png'),
  },
  {
    id: 2,
    cliente: 'Casa de Ninha',
    data: new Date().getDate(),
    localizacao: 'Rua Pedro Segundo - 114',
    classificacao: 'Residencia unifamiliar',
    idadeRealEdificacao: '10 anos',
    area: '500m2',
    identificacao: 'Visual',
    equipamentos: 'Fissurometro',
    quantidadeComodos: 8,
    vistaEmLoco : require('../assets/images/casa.png'),
    vistaMaps : require('../assets/images/mapa.png'),
  },
  {
    id: 3,
    cliente: 'Casa de Ninha 2',
    data: new Date().getDate(),
    localizacao: 'Rua Pedro Segundo - 114',
    classificacao: 'Residencia unifamiliar',
    idadeRealEdificacao: '10 anos',
    area: '500m2',
    identificacao: 'Visual',
    equipamentos: 'Fissurometro',
    quantidadeComodos: 8,
    vistaEmLoco : require('../assets/images/casa.png'),
    vistaMaps : require('../assets/images/mapa.png'),
  },
  {
    id: 4,
    cliente: 'Casa de Ninha 3',
    data: new Date().getDate(),
    localizacao: 'Rua Pedro Segundo - 114',
    classificacao: 'Residencia unifamiliar',
    idadeRealEdificacao: '10 anos',
    area: '500m2',
    identificacao: 'Visual',
    equipamentos: 'Fissurometro',
    quantidadeComodos: 8,
    vistaEmLoco : require('../assets/images/casa.png'),
    vistaMaps : require('../assets/images/mapa.png'),
  },
]

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <ScreenWrapper className="flex-1">
      <View className="flex-row justify-between items-center p-4">
          <Text className="text-gray-700 font-bold text-3xl shadow-sm">Vistorias</Text>
          <TouchableOpacity className="p-2 shadow-sm bg-red-700 px-3 border border-gray-200 rounded-md">
              <Text className="font-bold text-white">Sair</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center items-center bg-white rounded-md mx-4 mb-4 mt-3">
            <Image source={require('../assets/images/home.png')} className="w-96 h-60" />
        </View>
        <View className="px-4 space-y-3">
            <View className="flex-row justify-between items-center">
                <Text className="text-gray-700 font-bold text-xl ">Vistorias Recentes</Text>
                <TouchableOpacity 
                    onPress={()=> navigation.navigate('AddCasa')}
                    className="p-2 px-3 shadow-sm bg-red-700 border border-gray-200 rounded-md">
                    <Text className="font-bold text-xl text-white">+</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={{height: 430, margin: 20}}>
                <FlatList 
                    data={casas}
                    numColumns={2}
                    ListEmptyComponent={<EmptyList message={'Nenhuma casa ainda foi Inspecionada.'} />}
                    keyExtractor={item=> item.id}
                    showsVerticalScrollIndicator={false}
                    columnWrapperStyle={{
                        justifyContent: 'space-between'
                    }}
                    className="mx-1"
                    renderItem={({item})=>{
                        return (
                            <TouchableOpacity onPress={()=> navigation.navigate('CasaExpenses', {...item})} className="bg-white p-3 rounded-2xl mb-3 shadow-sm">
                                <View>
                                    <Image source={item.vistaEmLoco ? item.vistaEmLoco : require('../assets/images/empty.png')} className="w-36 h-36 mb-2" />
                                    <Text className={`${colors.heading} font-bold`}>{item.cliente}</Text>
                                    <Text className={`${colors.heading} text-xs`}>{item.localizacao}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
    </ScreenWrapper>
  )
}