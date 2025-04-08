import { useEffect, useRef, useState } from "react"
import { loadGoogleMapsAPI } from "../helpers/googleMaps"

const GooglePlacesAutocomplete = ({ onPlaceSelected }: { onPlaceSelected: (place: string) => void }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const loadAPI = async () => {
      try {
        await loadGoogleMapsAPI();
        setLoaded(true)
      } catch (error) {
        console.error(error)
      }
    }
    loadAPI()
  }, [])

  useEffect(() => {
    if (loaded && window.google) {
      const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current!, {
        types: ["(cities)"], // Filter for city names
      })

      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace()
        if (place && place.formatted_address) {
          onPlaceSelected(place.formatted_address)
        }
      })
    }
  }, [loaded, onPlaceSelected])

  return <input ref={inputRef} type="text" placeholder="Enter your city" />
}

export default GooglePlacesAutocomplete