const React = require("react");

console.log("✅ React-Leaflet mock loaded"); // debug

module.exports = {
    MapContainer: ({ children }) => <div>{children}</div>,
    TileLayer: () => <div>TileLayer</div>,
    Marker: () => <div>Marker</div>,
    Popup: () => <div>Popup</div>,
    useMap: () => ({}),
    useMapEvent: () => ({}),
    useMapEvents: () => ({}),
};
