import React from "react";
import { useState } from "react";
import { Model } from "./Model";
import { ClassPicker } from "./ClassPicker";
import glassesData from "./glassesData.json";

export const BTGlass = () => {
  console.log("glassesData:", glassesData);
  const [selectedGlass, setSelectedGlass] = useState(null);
  return (
    <div className="BTGlass container">
      <header className="bg-dark text-white text-center p-4">
        <h1>THỬ KÍNH ONLINE</h1>
      </header>

      <div className="container d-flex justify-content-between mt-4">
        {/* Thành phần Model hiển thị kính trên người mẫu */}
        <Model selectedGlass={selectedGlass} />

        {/* Mô tả kính */}
        {selectedGlass && (
          <div className="description p-3 bg-light rounded">
            <h3>{selectedGlass.name}</h3>
            <p>{selectedGlass.desc}</p>
            <p>Giá: ${selectedGlass.price}</p>
          </div>
        )}
      </div>

      {/* Thành phần Glass Picker để chọn kính */}
      <ClassPicker
        glassList={glassesData}
        setSelectedGlass={setSelectedGlass}
      />
    </div>
  );
};
