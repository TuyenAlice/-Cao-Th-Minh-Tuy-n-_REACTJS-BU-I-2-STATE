import React from "react";

export const Model = ({ selectedGlass }) => {
  // const { dataClasses } = props;
  return (
    <div className="container">
      <div className="model-container">
        {/* Ảnh người mẫu */}
        <img
          src="../../public/images/model.jpg"
          alt="model"
          className="model-img"
          style={{ width: "300px", position: "relative" }}
        />

        {/* Hiển thị kính đã chọn */}
        {selectedGlass && (
          <img
            src={selectedGlass.url}
            alt={selectedGlass.name}
            className="glasses-img"
            style={{
              position: "absolute",
              top: "275px", // Điều chỉnh vị trí của kính trên người mẫu
              left: "60px",
              width: "180px",
              opacity: 0.8,
            }}
          />
        )}
      </div>
    </div>
  );
};
