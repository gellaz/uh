import UploadMediaDiv from "@/src/components/uploadMediaDiv";

export default function MediaPage() {
  const divStyle = "row w-full h-full space-x-6";
  const gridPicStyle = "grid grid-cols-4 gap-2 overflow-scroll w-full";

  return (
    <div className={divStyle}>
      {/* PICTURE DIV */}
      <div className="col space-y-1 h-fit bg-red-100">
        <p className="text-sm gap-x-4">Foto</p>
        <div className={gridPicStyle}>
          {Array.from({ length: 12 }, (_, index) => {
            return (
              <button
                key={index}
                className="col h-[124px] w-[160px] p-2 items-center justify-center border rounded-sm text-sm font-medium space-y-1  hover:border-black"
              >
                <p>{`Foto ${index + 1}`}</p>
                <p className="text-xs font-normal ">Carica immagine</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* VIDEO DIV */}
      <div className="col space-y-1 h-fit bg-green-100">
        <p className="text-sm">Video</p>
        <div className={gridPicStyle}>
          {Array.from({ length: 4 }, (_, index) => (
            <UploadMediaDiv key={index} type={1} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
