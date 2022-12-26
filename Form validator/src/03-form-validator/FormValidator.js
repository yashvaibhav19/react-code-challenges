import { useState } from 'react'

export default function FormValidator () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const [msg,setMsg] = useState('');
  function validated() {
    let countAt = 0;
    for(let i=0;i<email.length;i++)
      if(email[i] === '@') countAt++;
    if(countAt != 1) return false;
    if(password.length < 8 || password != passwordConfirm) return false;
    return true;
  }
  return (
    <form>
      <h2>Sign Up!</h2>
      <label htmlFor='email'>Email</label>
      <input
        type='text' name='email'
        onChange={e => setEmail(e.target.value)}
      />
      <label htmlFor='password'>Password</label>
      <input
        type='password' name='password'
        onChange={e => setPassword(e.target.value)}
      />
      <label htmlFor='password-confirm'>Confirm Password </label>
      <input
        type='password' name='password-confirm'
        onChange={e => setPasswordConfirm(e.target.value)}
      />
      <p>{msg}</p>
      <input type='submit' value='Submit' onClick={(e)=>{
        e.preventDefault();
        if(validated()) setMsg("Account Created!");
        else setMsg("An email must have one @ sign. Password must be 8 characters or longer.");
      }}/>
    </form>
  )
}
