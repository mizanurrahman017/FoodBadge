import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const districts = [
  { name: "Dhaka", coords: [23.8103, 90.4125] },
  { name: "Chattogram", coords: [22.3569, 91.7832] },
  { name: "Sylhet", coords: [24.8949, 91.8687] },
  { name: "Rajshahi", coords: [24.3745, 88.6042] },
  { name: "Khulna", coords: [22.8456, 89.5403] },
  { name: "Barishal", coords: [22.7010, 90.3535] },
  { name: "Rangpur", coords: [25.7439, 89.2752] },
];

// 🔥 Button click করলে map move করবে
function FlyToLocation({ selected }) {
  const map = useMap();

  React.useEffect(() => {
    if (!selected) return;

    map.flyTo(selected.coords, 10, {
      duration: 1.5,
    });
  }, [selected, map]);

  return null;
}

const Districts = () => {
  const [search, setSearch] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  const handleSearch = () => {
    const found = districts.find((d) =>
      d.name.toLowerCase().includes(search.toLowerCase())
    );

    if (found) {
      setSelectedDistrict(found);
    } else {
      alert("District not found!");
    }
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-green-700 mb-3">
          📍 We are available in 64 Districts
        </h2>

        <p className="text-gray-600 mb-8">
          Our food donation coverage spans every corner of Bangladesh —
          search and explore our active areas.
        </p>

        {/* 🔎 Search Box + Button */}
        <div className="flex justify-center mb-10 gap-2">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search district name..."
            className="w-full md:w-1/3 px-4 py-3 rounded-lg border 
                       focus:outline-none focus:ring-2 focus:ring-green-500
                       shadow-sm"
          />

          <button
            onClick={handleSearch}
            className="bg-green-600 text-white px-6 py-3 rounded-lg
                       hover:bg-green-700 transition duration-300 shadow-md"
          >
            Search
          </button>
        </div>

        {/* 🗺️ Map */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <MapContainer
            center={[23.6850, 90.3563]}
            zoom={7}
            style={{ height: "500px", width: "100%" }}
          >
            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <FlyToLocation selected={selectedDistrict} />

            {districts.map((d, index) => (
              <Marker key={index} position={d.coords}>
                <Popup>{d.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Districts;
