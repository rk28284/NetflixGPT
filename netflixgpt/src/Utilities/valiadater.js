import React from 'react'

export const checkValiadater = (name,email,password) => {
    const isemailValidate = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
  const ispasswordValidate=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
  const isnameValidate=/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name)
  
  if(!isemailValidate) return "Email ID is not Valid"

  if(!ispasswordValidate) return "Password is not Valid"

  if(!isnameValidate) return "Name is not Valid"


    return null
}

