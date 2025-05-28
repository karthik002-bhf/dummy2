'use client'
import { useEffect, useRef, useState } from 'react';
import { Container, Row, Col, Alert, Button, ListGroup } from 'react-bootstrap';

function Maps() {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [locations, setLocations] = useState([]);
  const [sortedLocations, setSortedLocations] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const initializeMap = () => {
      const google = window.google;
      const mapInstance = new google.maps.Map(mapRef.current, {
        center: { lat: 20.5937, lng: 78.9629 },
        zoom: 5,
      });

      mapInstance.addListener('click', (e) => {
        if (locations.length < 4) {
          const clickedLocation = {
            lat: e.latLng.lat(),
            lng: e.latLng.lng(),
          };

          new google.maps.Marker({
            position: clickedLocation,
            map: mapInstance,
          });

          setLocations((prev) => [...prev, clickedLocation]);
        } else {
          setError('Maximum of 4 locations allowed. Refresh to try again.');
        }
      });

      setMap(mapInstance);
    };

    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}&libraries=places`;
      script.async = true;
      script.onload = initializeMap;
      document.head.appendChild(script);
    } else {
      initializeMap();
    }
  }, []);

  const toRad = (val) => (val * Math.PI) / 180;

  const getDistance = (loc1, loc2) => {
    const R = 6371;
    const dLat = toRad(loc2.lat - loc1.lat);
    const dLng = toRad(loc2.lng - loc1.lng);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(loc1.lat)) *
        Math.cos(toRad(loc2.lat)) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
  };

  const handleSort = () => {
    if (locations.length < 4) {
      setError('Please select exactly 4 locations.');
      return;
    }

    const base = locations[3];
    const distances = locations.slice(0, 3).map((loc, idx) => ({
      index: idx + 1,
      location: loc,
      distance: getDistance(base, loc),
    }));

    distances.sort((a, b) => a.distance - b.distance);
    setSortedLocations(distances);
    setError('');
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h3>Google Maps Location Sorter</h3>
          <div
            ref={mapRef}
            style={{ width: '100%', height: '500px', marginBottom: '1rem' }}
          ></div>

          <Button onClick={handleSort} disabled={locations.length < 4}>
            Sort First 3 Locations by Distance from 4th
          </Button>

          {error && <Alert variant="danger" className="mt-3">{error}</Alert>}

          {sortedLocations.length > 0 && (
            <ListGroup className="mt-4">
              <h5>Sorted Locations:</h5>
              {sortedLocations.map((loc, i) => (
                <ListGroup.Item key={i}>
                  #{i + 1}: Lat: {loc.location.lat}, Lng: {loc.location.lng}, Distance: {loc.distance.toFixed(2)} km
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Maps;
