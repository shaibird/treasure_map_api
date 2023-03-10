import React, { Component } from "react";
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export const LocationCapture = ({ saveMarkers }) => {
    const map = useMapEvents({
        click: (e) => {
          const { lat, lng } = e.latlng;
          L.marker([lat, lng], { icon }).addTo(map);
          saveMarkers([lat, lng]);
        }
      });
      return null;
}