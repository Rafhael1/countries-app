import React from 'react'

import './Loader.scss'

export default function Loader() {
  return (
    <div className="Loader">
      <div class="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
