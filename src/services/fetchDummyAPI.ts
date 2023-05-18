import axios from 'axios';

import { IPeopleInfo } from '../interfaces/IPeopleInfo';
import { Alert } from 'react-native';

interface IGetUserProps {
  username: string;
  password: string;
}


export const getUser = async ({ username, password }: IGetUserProps): Promise<IPeopleInfo> => {
  try {
    const response = await axios.post('https://dummyjson.com/auth/login', {
      username,
      password,
      // expiresInMins: 60, // opcional
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    return response.data as IPeopleInfo;
  } catch (e) {
    throw e;
  }
};



export const fetchAPI = async ( url: string ) => (await fetch( url )).json();
