import AstroPlanets from "./components/astro-planets";

function App() {
  return (
    <>
      <h1 className="bg-green-100 tamil-normal text-4xl text-teal-500 hover:text-teal-800 border-b-2 border-b-teal-500 hover:border-b-teal-800 text-center py-5 mb-5">
        ஜாதகம் கட்டம்
      </h1>
      <div className="container mx-auto px-4 mb-5">
        <AstroPlanets />
      </div>
    </>
  );
}

export default App;
