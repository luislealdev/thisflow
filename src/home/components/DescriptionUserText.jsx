import React from 'react'

export const DescriptionUserText = ({displayName, phrase}) => {
  return (
    <>
    <h2>{displayName}</h2>
    <p>{phrase}</p>
    </>
  )
}
