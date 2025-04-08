export const loadGoogleMapsAPI = () => {
    return new Promise<void>((resolve, reject) => {
      if (window.google) {
        resolve();  // If the API is already loaded, resolve immediately
      } else {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&libraries=places`;
        script.async = true;
        script.defer = true;
  
        script.onload = () => resolve();  // Resolve when the script is loaded
        script.onerror = () => reject("Google Maps API failed to load");
  
        document.head.appendChild(script);
      }
    });
  };