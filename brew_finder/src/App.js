```javascript
import React, { useState } from 'react';
import InputField from './components/InputField';
import SubmitButton from './components/SubmitButton';
import CoffeeShopList from './components/CoffeeShopList';
import { calculateDistance } from './utils/distanceCalculator';
import { getPlaces } from './utils/googlePlacesAPI';
import './styles/App.css';

function App() {
  const [location1, setLocation1] = useState('');
  const [location2, setLocation2] = useState('');
  const [coffeeShops, setCoffeeShops] = useState([]);

  const handleSubmit = async () => {
    const midpoint = calculateDistance(location1, location2);
    const places = await getPlaces(midpoint);
    setCoffeeShops(places);
  };

  return (
    <div className="App">
      <h1>Brew Finder</h1>
      <InputField id="location1" value={location1} onChange={setLocation1} />
      <InputField id="location2" value={location2} onChange={setLocation2} />
      <SubmitButton onClick={handleSubmit} />
      <CoffeeShopList shops={coffeeShops} />
    </div>
  );
}

export default App;
```