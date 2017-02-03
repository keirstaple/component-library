import React, { Component } from 'react';
import { render } from 'react-dom';
import classNames from 'classnames/bind';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import styles from './MapView.styles.css';

const cx = classNames.bind(styles);

const className = cx({ base: true });


class MapView extends Component {
  render() {
    const position = [45.523452, -122.676207];
    return(
      <Map className={className} center={position} zoom={13}>
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
      </Map>
    );
  }
}

export default MapView;