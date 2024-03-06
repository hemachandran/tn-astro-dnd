import { useState } from "react";

function AstroBox() {
  const [box1Planets, setBox1Planets] = useState<string[]>([]);
  const [box2Planets, setBox2Planets] = useState<string[]>([]);
  const [box3Planets, setBox3Planets] = useState<string[]>([]);
  const [box4Planets, setBox4Planets] = useState<string[]>([]);
  const [box5Planets, setBox5Planets] = useState<string[]>([]);
  const [box6Planets, setBox6Planets] = useState<string[]>([]);
  const [box7Planets, setBox7Planets] = useState<string[]>([]);
  const [box8Planets, setBox8Planets] = useState<string[]>([]);
  const [box9Planets, setBox9Planets] = useState<string[]>([]);
  const [box10Planets, setBox10Planets] = useState<string[]>([]);
  const [box11Planets, setBox11Planets] = useState<string[]>([]);
  const [box12Planets, setBox12Planets] = useState<string[]>([]);
  const enableDropping = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    const id = event.dataTransfer.getData("text");
    const domId = event.currentTarget.id;
    console.log(`You've dropped an element with id: ${id}`);
    switch (domId) {
      case "Box1":
        setBox1Planets([...box1Planets, `${id}`]);
        break;
      case "Box2":
        setBox2Planets([...box2Planets, `${id}`]);
        break;
      case "Box3":
        setBox3Planets([...box3Planets, `${id}`]);
        break;
      case "Box4":
        setBox4Planets([...box4Planets, `${id}`]);
        break;
      case "Box5":
        setBox5Planets([...box5Planets, `${id}`]);
        break;
      case "Box6":
        setBox6Planets([...box6Planets, `${id}`]);
        break;
      case "Box7":
        setBox7Planets([...box7Planets, `${id}`]);
        break;
      case "Box8":
        setBox8Planets([...box8Planets, `${id}`]);
        break;
      case "Box9":
        setBox9Planets([...box9Planets, `${id}`]);
        break;
      case "Box10":
        setBox10Planets([...box10Planets, `${id}`]);
        break;
      case "Box11":
        setBox11Planets([...box11Planets, `${id}`]);
        break;
      case "Box12":
        setBox12Planets([...box12Planets, `${id}`]);
        break;

      default:
        break;
    }
  };

  return (
    <section className="w-10/12 mx-auto text-center">
      <div className="grid grid-cols-4 gap-0 border-solid border border-indigo-600">
        <div
          id="Box1"
          className="border-solid border border-indigo-600 h-24 sm:h-36 md:h-40 border-b-0"
          onDragOver={enableDropping}
          onDrop={handleDrop}
        >
          {box1Planets.join(" ")}
        </div>
        <div
          id="Box2"
          className="border-solid border border-indigo-600 h-24 sm:h-36 md:h-40"
          onDragOver={enableDropping}
          onDrop={handleDrop}
        >
          {box2Planets.join(" ")}
        </div>
        <div
          id="Box3"
          className="border-solid border border-indigo-600 h-24 sm:h-36 md:h-40"
          onDragOver={enableDropping}
          onDrop={handleDrop}
        >
          {box3Planets.join(" ")}
        </div>
        <div
          id="Box4"
          className="border-solid border border-indigo-600 h-24 sm:h-36 md:h-40 border-b-0"
          onDragOver={enableDropping}
          onDrop={handleDrop}
        >
          {box4Planets.join(" ")}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-0">
        <div
          id="Box5"
          className="border-solid border border-indigo-600 h-24 sm:h-36 md:h-40"
          onDragOver={enableDropping}
          onDrop={handleDrop}
        >
          {box5Planets.join(" ")}
        </div>
        <div className="h-24 sm:h-36 md:h-40"></div>
        <div className="h-24 sm:h-36 md:h-40"></div>
        <div
          id="Box6"
          className="border-solid border border-indigo-600 h-24 sm:h-36 md:h-40"
          onDragOver={enableDropping}
          onDrop={handleDrop}
        >
          {box6Planets.join(" ")}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-0">
        <div
          id="Box7"
          className="border-solid border border-indigo-600 h-24 sm:h-36 md:h-40"
          onDragOver={enableDropping}
          onDrop={handleDrop}
        >
          {box7Planets.join(" ")}
        </div>
        <div className="h-24 sm:h-36 md:h-40"></div>
        <div className="h-24 sm:h-36 md:h-40"></div>
        <div
          id="Box8"
          className="border-solid border border-indigo-600 h-24 sm:h-36 md:h-40"
          onDragOver={enableDropping}
          onDrop={handleDrop}
        >
          {box8Planets.join(" ")}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-0 border-solid border border-indigo-600">
        <div
          id="Box9"
          className="border-solid border border-indigo-600 h-24 sm:h-36 md:h-40 border-t-0"
          onDragOver={enableDropping}
          onDrop={handleDrop}
        >
          {box9Planets.join(" ")}
        </div>
        <div
          id="Box10"
          className="border-solid border border-indigo-600 h-24 sm:h-36 md:h-40"
          onDragOver={enableDropping}
          onDrop={handleDrop}
        >
          {box10Planets.join(" ")}
        </div>
        <div
          id="Box11"
          className="border-solid border border-indigo-600 h-24 sm:h-36 md:h-40"
          onDragOver={enableDropping}
          onDrop={handleDrop}
        >
          {box11Planets.join(" ")}
        </div>
        <div
          id="Box12"
          className="border-solid border border-indigo-600 h-24 sm:h-36 md:h-40 border-t-0"
          onDragOver={enableDropping}
          onDrop={handleDrop}
        >
          {box12Planets.join(" ")}
        </div>
      </div>
    </section>
  );
}

export default AstroBox;
