import React, { useEffect } from 'react'

const FirstComponent = () => 
{

    useEffect(() => 
    {
      console.log('first component mounted')
      return () => 
      {
        console.log('first component unmounted')
      }
    }) 

    return (
        <div>FirstComponent</div>
      )
}

export default FirstComponent;