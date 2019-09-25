import 'regenerator-runtime/runtime'
import React from 'react'
import ReactDOM from 'react-dom'
import { MapComponent } from 'r_map'

export const map = (mapItems, element) => {
  ReactDOM.render(<MapComponent services={mapItems} />, element)
}
