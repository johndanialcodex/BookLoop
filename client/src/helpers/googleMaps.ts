export const loadGoogleMapsAPI = () => {
    return new Promise<void>((resolve, reject) => {
      if (window.google) {
        resolve()
      } else {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&libraries=places`
        script.async = true
        script.defer = true
  
        script.onload = () => resolve()
        script.onerror = () => reject("Google Maps API failed to load")
  
        document.head.appendChild(script)
      }
    })
  }