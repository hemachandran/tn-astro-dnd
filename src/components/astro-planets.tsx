import AstroBox from "./astro-box";

function AstroPlannets() {
  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData("text", event.currentTarget.id);
  };

  return (
    <>
      <section className="w-10/12 mx-auto grid grid-cols-3 gap-1 md:grid-cols-9 mb-5 text-center">
        <div
          id="ல"
          draggable="true"
          onDragStart={handleDragStart}
          className="rounded-full cursor-grab bg-slate-300 p-1"
        >
          லக்கினம்
        </div>
        <div
          id="சூ"
          draggable="true"
          onDragStart={handleDragStart}
          className="rounded-full cursor-grab bg-slate-300 p-1"
        >
          சூர்யன்
        </div>
        <div
          id="சந்"
          draggable="true"
          onDragStart={handleDragStart}
          className="rounded-full cursor-grab bg-slate-300 p-1"
        >
          சந்திரன்
        </div>
        <div
          id="பு"
          draggable="true"
          onDragStart={handleDragStart}
          className="rounded-full cursor-grab bg-slate-300 p-1"
        >
          புதன்
        </div>
        <div
          id="சுக்"
          draggable="true"
          onDragStart={handleDragStart}
          className="rounded-full cursor-grab bg-slate-300 p-1"
        >
          சுக்ரன்
        </div>
        <div
          id="செவ்"
          draggable="true"
          onDragStart={handleDragStart}
          className="rounded-full cursor-grab bg-slate-300 p-1"
        >
          செவ்வாய்
        </div>
        <div
          id="கு"
          draggable="true"
          onDragStart={handleDragStart}
          className="rounded-full cursor-grab bg-slate-300 p-1"
        >
          குரு
        </div>
        <div
          id="ரா"
          draggable="true"
          onDragStart={handleDragStart}
          className="rounded-full cursor-grab bg-slate-300 p-1"
        >
          ராகு
        </div>
        <div
          id="கே"
          draggable="true"
          onDragStart={handleDragStart}
          className="rounded-full cursor-grab bg-slate-300 p-1"
        >
          கேது
        </div>
      </section>
      <AstroBox />
    </>
  );
}

export default AstroPlannets;
