import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { MapComponent, Legend } from 'r_map';

export const map = (params, element) => {
    ReactDOM.render(<MapComponent zoom={params.zoom} lat={params.lat} lon={params.lon} crs={params.crs} services={params.mapItems} />, element);
};

export const legend = (url, element) => {
    ReactDOM.render(<Legend legendUrl={url} />, element);
};