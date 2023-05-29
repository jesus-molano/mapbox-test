'use client'
import mapboxgl from 'mapbox-gl'
import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import type { Map } from 'mapbox-gl'

type Props = {}

mapboxgl.accessToken =
  'pk.eyJ1IjoiamVzdXNtb2xhbm9wd2MiLCJhIjoiY2xpM2IwZWx4MDl5ZjNtb3p6bTVneTR5NCJ9.fOVQhEzYmKSddAaSNuQ3Bg'

const VesselMap = (props: Props) => {
  const mapContainer: MutableRefObject<HTMLDivElement | null> = useRef(null)
  const map: MutableRefObject<Map | null> = useRef(null)
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
  })
  return <div ref={mapContainer} className='h-[400px] w-full max-w-[600px]' />
}

export default VesselMap
