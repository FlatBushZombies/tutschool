"use client"

import { useEffect, useRef, useState } from "react"

// Enhanced Type definitions for Yandex Maps
declare global {
  interface Window {
    ymaps: {
      ready: (callback: () => void) => void
      Map: new (element: HTMLElement | null, options: MapOptions) => YMap
      Placemark: new (
        coordinates: [number, number],
        properties?: PlacemarkProperties,
        options?: PlacemarkOptions
      ) => YPlacemark
      geoObjects: {
        add: (object: YPlacemark) => void
      }
    }
  }
}

interface MapOptions {
  center: [number, number]
  zoom: number
  controls: string[]
}

interface PlacemarkProperties {
  hintContent?: string
  balloonContent?: string
}

interface PlacemarkOptions {
  preset?: string
}

interface YMap {
  geoObjects: {
    add: (object: YPlacemark) => void
  }
}

interface YPlacemark {
  // Add placemark methods you use
}

const YandexMap = () => {
  const mapRef = useRef<HTMLDivElement>(null)
  const [mapError, setMapError] = useState<string | null>(null)
  const YANDEX_MAPS_API_KEY = "d082042e-7a81-435d-b874-a229b4c04466"

  useEffect(() => {
    const scriptId = 'yandex-maps-script'
    let script = document.getElementById(scriptId) as HTMLScriptElement | null
    let mounted = true

    const initMap = () => {
      if (!mounted || !mapRef.current) return

      try {
        window.ymaps.ready(() => {
          if (!mounted || !mapRef.current) return

          // Create map instance
          const map = new window.ymaps.Map(mapRef.current, {
            center: [55.894611, 37.374147],
            zoom: 15,
            controls: [
              'zoomControl',
              'fullscreenControl',
              'geolocationControl'
            ],
          })

          // Create placemark instance
          const placemark = new window.ymaps.Placemark(
            [55.894611, 37.374147],
            {
              hintContent: 'Tut School',
              balloonContent: 'Tut School - Foreign Language Courses',
            },
            {
              preset: 'islands#redDotIcon',
            }
          )

          // Add placemark to map
          map.geoObjects.add(placemark)
        })
      } catch (error) {
        if (mounted) {
          setMapError('Failed to initialize map')
          console.error('Map initialization error:', error)
        }
      }
    }

    if (!script) {
      script = document.createElement('script')
      script.id = scriptId
      script.src = `https://api-maps.yandex.ru/2.1/?apikey=${YANDEX_MAPS_API_KEY}&lang=en_US`
      script.async = true
      script.onload = initMap
      script.onerror = () => {
        if (mounted) setMapError('Failed to load Yandex Maps')
      }
      document.body.appendChild(script)
    } else if (window.ymaps) {
      initMap()
    }

    return () => {
      mounted = false
      script = document.getElementById(scriptId) as HTMLScriptElement | null
      if (script && document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <div className="relative w-full">
      <div 
        ref={mapRef} 
        className="w-full h-[400px] rounded-lg overflow-hidden shadow-md"
        aria-label="Interactive map showing Tut School location"
        role="application"
      />
      
      {mapError && (
        <div className="absolute inset-0 bg-red-50 flex items-center justify-center p-4">
          <p className="text-red-600">{mapError}</p>
        </div>
      )}

      <a
        href="https://yandex.ru/maps/?z=15&ll=37.374147,55.894611&l=map&rtext=~55.894611,37.374147"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-3 left-3 bg-white py-1 px-3 rounded-md text-sm shadow-sm hover:bg-gray-100 transition-colors flex items-center gap-1"
      >
        <svg width="16" height="16" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M128 24C70.562 24 24 70.562 24 128C24 185.438 70.562 232 128 232C185.438 232 232 185.438 232 128C232 70.562 185.438 24 128 24Z"
            fill="#FC3F1D"
          />
          <path d="M176.5 131.5H143.5V164.5H131.5V131.5H98.5V119.5H131.5V86.5H143.5V119.5H176.5V131.5Z" fill="white" />
        </svg>
        Open in Yandex Maps
      </a>
    </div>
  )
}

export default YandexMap