import React from 'react'

const StateFulForm = () => {


const initialState ={
    username: "",
    email:"",
    error: false,
    loading: false,
};

  return (
    <form onSubmit={handleSubmit}></form>
  )
}

export default StateFulForm
