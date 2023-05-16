import { create } from "zustand";

type InputState = {
  username: string;
  password: string;
  handleInput: (v: string, input: string) => void;
};

export const useHandleChange = create<InputState>((set) => ({
  username: '',
  password: '',
  handleInput: (v: string, input: string) => {
    if (input === 'username') { return set({ username: v }) };
    if (input === 'password') { return set({ password: v }) }
    else { console.warn('Parâmetro errado') };
  },
}))

// const [ handleInput, username, password ] = useHandleChange(state => [
//   state.handleInput, state.username, state.password ]);
