import React from "react";

export const ClassPicker = ({ glassList, setSelectedGlass }) => {
  // console.log("props: ", props);
  // const { dataClasses } = props;
  return (
    <div>
      <div className="glass-picker mt-5">
        <div className="d-flex justify-content-center flex-wrap">
          {glassList.map((glass) => (
            <img
              key={glass.id}
              src={glass.url}
              alt={glass.name}
              className="glass-option m-2"
              onClick={() => setSelectedGlass(glass)} // Khi click vào kính sẽ chọn kính tương ứng
              style={{ width: "100px", cursor: "pointer" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
