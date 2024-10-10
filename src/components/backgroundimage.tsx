
const BackgroundImage= () => {
  return (
    <div className="relative h-screen bg-cover bg-center shadow shadow-gray-100" style={{ backgroundImage: "url('/background.jpg')" }}>
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
        <h1 className="text-white text-8xl font-bold">Stylish Beauty Salon</h1>
      </div>
    </div>
  );
};

export default BackgroundImage;
