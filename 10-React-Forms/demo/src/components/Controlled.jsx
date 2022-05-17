import React, { useState } from 'react';

export default function Form() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function validateUser(value) {
    var regExp= /\S+@\S+\.\S+/
    if(!regExp.test(value)) {
      setError('el usuario tiene que ser un email');
    } else {
      setError('');
    }
    setUsername(value);
  }

  function validatePassword(value) {
    var regExp= /(?=.*[a-z])(?=.*\d)[A-Za-z\d]{6,}/;
    if (!regExp.test(value)){
      setError('La contraseña debe contener al menos un número');
    } else {
      setError('')
    }
    setPassword(value);
  }

  return (
      <form>
        <input className={error && 'danger'}
          name="username" value={username} placeholder="username" onChange={(e) => validateUser(e.target.value)}/>
        {!error ? null : <span>{error}</span>}
        <input name="password" value={password} placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)}/>
        <input type="submit" />
      </form>
    );
}