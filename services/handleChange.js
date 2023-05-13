export default handleChange = ({ target: { value } }) => target.type === 'checkbox' 
? target.checked : target.value;
