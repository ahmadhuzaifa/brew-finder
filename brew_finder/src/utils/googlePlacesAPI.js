import axios from 'axios';

const getPlaces = async (midPoint) => {
  const { lat, lng } = midPoint;
  const radius = 5000; // 5km radius
  const type = 'cafe';
  const keyword = 'coffee';
  const API_KEY = 'YOUR_GOOGLE_PLACES_API_KEY'; // replace with your Google Places API key

  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=${radius}&type=${type}&keyword=${keyword}&key=${API_KEY}`;

  try {
    const response = await axios.get(url);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};

export default getPlaces;