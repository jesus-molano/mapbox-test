'use client'
import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client';
import type { LngLatLike, Map, Marker as MarkerType } from 'mapbox-gl'
import mapboxgl from 'mapbox-gl'
import geoJSON from '@/utils/vessel-coords.json'
import Marker from './Marker'
import { Feature } from '../types';

type Props = {}

mapboxgl.accessToken =
  'pk.eyJ1IjoiamVzdXNtb2xhbm9wd2MiLCJhIjoiY2xpM2IwZWx4MDl5ZjNtb3p6bTVneTR5NCJ9.fOVQhEzYmKSddAaSNuQ3Bg'

const VesselMap = (props: Props) => {
  const mapContainer: MutableRefObject<HTMLDivElement | null> = useRef(null)
  const map: MutableRefObject<Map | null> = useRef(null)
  const customMarker = useRef<HTMLDivElement>()
  const [lng, setLng] = useState<number>(-70.9)
  const [lat, setLat] = useState<number>(42.35)
  const [zoom, setZoom] = useState<number>(2)

  useEffect(() => {
    if (map.current) return
    map.current = new mapboxgl.Map({
      container: mapContainer.current!,
      style: 'mapbox://styles/mapbox/light-v10',
      center: [lng, lat],
      zoom: zoom
    })

    geoJSON.features.map(feature => {
      const lngLat: LngLatLike = [
        feature.geometry.coordinates[0],
        feature.geometry.coordinates[1]
      ]

      customMarker.current! = document.createElement('div')
      createRoot(customMarker.current).render(
        <Marker onClick={() => console.log('hello')} feature={feature} />
      );

      new mapboxgl.Marker(customMarker.current)
        .setLngLat(lngLat)
        .addTo(map.current!)
      

    })
  })
  return <div ref={mapContainer} className='h-[350px] w-full max-w-[600px]' />
}

export default VesselMap
