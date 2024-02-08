import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";

export default function ExploringPage() {
  const array = ["A", "B", "C", "D", "E", "F", "G", "H"];

  return (
    <div className="col">
      <div className="row h-fit items-center justify-between p-2 space-x-4">
        <Input placeholder="Digita indirizzo, città o zipcode" />
        <div className="outlined flex h-full w-1/5 px-2 py-1 text-xs font-medium items-center">
          Categoria
        </div>
        <div className="outlined flex h-full w-1/5 px-2 py-1 text-xs font-medium items-center">
          Subcategoria
        </div>
        <div className="outlined flex h-full w-1/5 px-2 py-1 text-xs font-medium items-center">
          Camere
        </div>
        <div className="outlined flex h-full w-1/5 px-2 py-1 text-xs font-medium items-center">
          Bagni
        </div>
        <div className="outlined flex h-full w-1/5 px-2 py-1 text-xs font-medium items-center">
          Mq
        </div>
        <div className="outlined flex h-full w-1/5 px-2 py-1 text-xs font-medium items-center">
          Prezzo
        </div>
        <Button>Cerca</Button>
      </div>

      {/* LEFT SIDE - */}
      <div className="col space-y-1 p-4">
        {array.map((item) => (
          <div className="bg-purple-100 w-1/4 h-10">{item}</div>
        ))}
      </div>

      {/* RIGHT SIDE - */}
    </div>
  );
}
