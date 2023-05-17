import { create } from "zustand";

type InputState = {
  username: string;
  password: string;
  search: string;
  handleInput: (v: string, input: string) => void;
};

export const useHandleChange = create<InputState>((set) => ({
  username: '',
  password: '',
  search: '',
  handleInput: (v: string, input: string) => {
    if (input === 'username') { return set({ username: v }) };
    if (input === 'password') { return set({ password: v }) };
    if (input === 'search') { return set({ search: v })}
    else { console.warn('Parâmetro errado') };
  },
}))

// const [ handleInput, username, password ] = useHandleChange(state => [
//   state.handleInput, state.username, state.password, state.search ]);
