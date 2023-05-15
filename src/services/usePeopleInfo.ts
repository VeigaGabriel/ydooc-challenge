import { create } from "zustand";
import { IPeopleInfo } from "../interfaces/IPeopleInfo";

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
