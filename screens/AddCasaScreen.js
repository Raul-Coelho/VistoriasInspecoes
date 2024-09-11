import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, StyleSheet, StatusBar, Platform, Button } from 'react-native';
import React, { useState } from 'react';
import { colors } from '../theme';
import BackButton from '../components/backButton';
import ScreenWrapper from '../components/screenWrapper';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Casa } from '../model/casa.model';
import DatePicker from 'react-native-date-picker';
import ptBR from 'date-fns/locale/pt-BR';

export default function AddCasaScreen() {
  const [casa, setCasa] = useState(
    new Casa(
        0,                 // id
        '',                // cliente
        '',                // data
        '',                // localizacao
        '',                // classificacao
        '',                // idadeRealEdificacao
        '',                // area
        '',                // identificacao
        '',                // equipamentos
        0,                 // quantidadeComodos
        '',                // vistaEmLoco
        ''                 // vistaMaps
    )
  );
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

    // const {user} = useSelector(state=> state.user);

    const navigation = useNavigation();

    const handleAddCasa = async ()=>{
        if(casa){
            // good to go
            navigation.navigate('Home');
        }
      }
  return (
    <ScreenWrapper>
      <View className="flex justify-between h-full mx-4 p-3">
        <View>
            <View className="relative mt-5">
                <View className="absolute top-0 left-0 z-10 ">
                    <BackButton />
                </View>
                
                <Text className={`${colors.heading} text-xl font-bold text-center`}>NOVA CASA</Text>
            </View>
            <SafeAreaView 
                forceInset={{ top: 'always', bottom: 'never' }}
              >
              <ScrollView contentContainerStyle={{ paddingBottom: 100 }} className="space-y-2 mx-2 scroll-pb-10" showsVerticalScrollIndicator={false}>

                  <View className="flex-row justify-center  my-3 mt-5">
                      <Image className="h-40 w-40 rounded-md" source={require('../assets/images/casa.png')} />
                  </View>
          
                <Text className={`${colors.heading} text-mds font-bold`}>Cliente</Text>
                <TextInput value={casa.cliente} onChangeText={value=> setCasa(value)} className="p-1 bg-white rounded-md mb-3" />

                <Text className={`${colors.heading} text-mds font-bold`}>Data</Text>
                <TouchableOpacity color={colors.button} className="rounded-md bg-red-700" title="Selecionar data" onPress={() => setOpen(true)} >
                    <Text className="text-center text-white font-bold m-2">{date ? (date.getDay() + 1).toString().padStart(2,'0') + '/' + (date.getMonth() + 1).toString().padStart(2,'0') + '/' + date.getFullYear() : 'Selecionar data'}</Text>
                </TouchableOpacity>

                <DatePicker
                  modal
                  mode="date"
                  title={'Selecione a data'}
                  confirmText="Confirmar"
                  cancelText="Cancelar"
                  buttonColor={colors.button}
                  dividerColor={colors.button}
                  locale="pt-BR"
                  open={open}
                  date={date}
                  onConfirm={(date) => {
                    setOpen(false);
                    setCasa(casa.data);
                  }}
                  onCancel={() => {
                    setOpen(false);
                  }}
                />

                <Text className={`${colors.heading} text-mds font-bold`}>Localização</Text>
                <TextInput value={casa.localizacao} onChangeText={value=> setCasa(value)} className="p-1 bg-white rounded-md mb-3" />
                <Text className={`${colors.heading} text-mds font-bold`}>Classificação</Text>
                <TextInput value={casa.classificacao} onChangeText={value=> setCasa(value)} className="p-1 bg-white rounded-md mb-3" />
                <Text className={`${colors.heading} text-mds font-bold`}>Idade real da edificação</Text>
                <TextInput value={casa.idadeRealEdificacao} onChangeText={value=> setCasa(value)} className="p-1 bg-white rounded-md mb-3" />
                <Text className={`${colors.heading} text-mds font-bold`}>Área</Text>
                <TextInput value={casa.area} onChangeText={value=> setCasa(value)} className="p-1 bg-white rounded-md mb-3" />
                <Text className={`${colors.heading} text-mds font-bold`}>Identificação</Text>
                <TextInput value={casa.identificacao} onChangeText={value=> setCasa(value)} className="p-1 bg-white rounded-md mb-3" />
                <Text className={`${colors.heading} text-mds font-bold`}>Equipamentos</Text>
                <TextInput value={casa.equipamentos} onChangeText={value=> setCasa(value)} className="p-1 bg-white rounded-md mb-3" />
                <Text className={`${colors.heading} text-mds font-bold`}>Quantidade de Cômodos</Text>
                <TextInput value={casa.quantidadeComodos} onChangeText={value=> setCasa(value)} className="p-1 bg-white rounded-md mb-3" />
                <Text className={`${colors.heading} text-mds font-bold`}>Vista em Loco</Text>
                <TextInput value={casa.vistaEmLoco} onChangeText={value=> setCasa(value)} className="p-1 bg-white rounded-md mb-3" />
                <Text className={`${colors.heading} text-mds font-bold`}>Vista do Maps</Text>
                <TextInput value={casa.vistaMaps} onChangeText={value=> setCasa(value)} className="p-1 bg-white rounded-md mb-3" />
                
                <View>
                  <TouchableOpacity onPress={handleAddCasa} style={{backgroundColor: colors.button}} className="my-6 rounded-md p-3 shadow-sm mx-2">
                    <Text className="text-center text-white text-lg font-bold">Salvar</Text>
                  </TouchableOpacity>
                </View>

                {/* <View style={{height:100}} /> */}
              </ScrollView>
              
            </SafeAreaView>
                
        </View>
      </View>
    </ScreenWrapper>
  );
}
