interface IHandleChange {
  value: string;
  checked: boolean;
  type: string;
}

type handleType = { target: IHandleChange };

export const handleChange = ({ target: { value, checked, type }}: handleType ) => type === 'checkbox' 
? checked : value;
