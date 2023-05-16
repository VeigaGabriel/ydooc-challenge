import AsyncStorage from "@react-native-async-storage/async-storage"
import { Alert } from "react-native";

const ERROR_ALERT = (e: Error) => Alert.alert('Ocorreu um erro:', (e).message );

export const saveStorage = async ( storageName: string, value: string ) => {
  try {
    await AsyncStorage.setItem(`@${ storageName }`, value)
  } catch (e) {
    ERROR_ALERT(e as Error);
  }
}

export const loadStorage = async ( storageName: string ) => {
  try {
    let value = await AsyncStorage.getItem(`@${ storageName }`)
    if(value !== null) {
      return value;
    }
  } catch(e) {
    ERROR_ALERT(e as Error);
  }
}

export const removeStorage = async ( storageName: string ) => {
  try {
    await AsyncStorage.removeItem( `@${ storageName }`);
  } catch (e) {
    ERROR_ALERT(e as Error);
    }
};
