import { create } from "zustand";
import { IPeopleInfo } from "../models/IPeopleInfo";

type State = {
  user: IPeopleInfo;
  addPeopleInfo: ( state: IPeopleInfo ) => void;
}

const infos = {
  id: 0,
  username: '',
  email: '',
  firstName: '',
  lastName: '',
  gender: '',
  image: '',
  token: '',
}

export const usePeopleInfo = create<State>((set) => ({
  user: {
    ...infos
  },
    addPeopleInfo: ( user: IPeopleInfo ) => {
    set(( state: State ) => ( { user }))
  }
}))


// interface UserType {
//   name: string;
//   email: string;
// }

// type State = {
//   users: UserType[];
//   addUser: (user: UserType) => void;
// }

// export const useTest = create<State>((set) => ({
//   users: [],

//   addUser: ( user: UserType ) => {
//     set(state => ( { users: [ ...state.users, user ]}))
//   }
// }))