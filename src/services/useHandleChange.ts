import { create } from "zustand";

type InputState = {
  username: string;
  password: string;
  handleInput: (v: string, intputName: string) => void;
};

export const useHandleChange = create<InputState>((set) => ({
  username: '',
  password: '',
  handleInput: (v: string, intputName: string) => {
    if (intputName === 'username') { return set({ username: v }) };
    if (intputName === 'password') { return set({ password: v }) }
    else { console.warn('Parâmetro errado') };
  },
}))

// const [ handleInput, username, password ] = useHandleChange(state => [
//   state.handleInput, state.username, state.password ]);
