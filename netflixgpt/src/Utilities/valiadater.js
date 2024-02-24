import React from 'react'

export const checkValiadater = (email,password) => {
    const isemailValidate = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
  const ispasswordValidate=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
  if(!isemailValidate) return "Email ID is not Valid"

  if(!ispasswordValidate) return "Password is not Valid"


    return null
}

