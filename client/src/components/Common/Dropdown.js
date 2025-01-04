// src/components/Common/Dropdown.js
import React from 'react';

const Dropdown = ({ locations, onChange }) => {
    return (
        <select 
            className="mt-4 p-2 rounded-md border border-gray-300"
            onChange={(e) => onChange(e.target.value)}
        >
            <option value="">Select a location</option>
            {locations.map((location) => (
                <option key={location.id} value={location.name}>
                    {location.name}
                </option>
            ))}
        </select>
    );
};

export default Dropdown;