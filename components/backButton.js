import { TouchableOpacity } from 'react-native';
import React from 'react';
import {ChevronLeftIcon} from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';
export default function BackButton() {
    const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={()=> navigation.goBack()} className="items-center shadow-sm bg-red-700 border border-gray-200 rounded-md h-8 w-10">
      <ChevronLeftIcon size={30} color={'#FFFF'}/>
    </TouchableOpacity>
  )
}