const RandomShapes = () => {
  const shapes = Array.from({ length: 10 }); // Tạo 10 hình dạng

  return (
    <div className="relative w-screen h-screen bg-gray-100">
      {shapes.map((_, index) => {
        return (
          <div
            key={index}
            className="absolute bg-blue-500 rounded-full"
            style={{
              width: 100 + "px",
              height: 100 + "px",
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default RandomShapes;
