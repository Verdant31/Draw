import { Image, TextT, Pencil, Stack, Faders } from "phosphor-react";
import { useState } from "react";

interface SidebarProps {
  handleSelectImage: (path: string) => void;
}

export default function Sidebar({ handleSelectImage }: SidebarProps) {
  const [isSelectingImage, setIsSelectingImage] = useState(false);
  return (
    <div className="flex">
      <div className="h-[100vh] w-28 bg-gray-200 flex flex-col items-center gap-y-8 pt-8 absolute left-0 top-0">
        <button
          className="flex flex-col items-center"
          onClick={() => setIsSelectingImage(!isSelectingImage)}
        >
          <Image size={32} alt="Icone de um quadro" />
          <p>Imagens</p>
        </button>
        <button
          className="flex flex-col items-center"
          onClick={() => console.log("opa")}
        >
          <TextT size={32} />
          <p>Texto</p>
        </button>
        <button
          className="flex flex-col items-center"
          onClick={() => console.log("opa")}
        >
          <Pencil size={32} />
          <p>Caneta</p>
        </button>
        <button
          className="flex flex-col items-center"
          onClick={() => console.log("opa")}
        >
          <Stack size={32} alt="Icone de um quadro" />
          <p>Camadas</p>
        </button>
        <button
          className="flex flex-col items-center"
          onClick={() => console.log("opa")}
        >
          <Faders size={32} alt="Icone de um quadro" />
          <p>Ajustes</p>
        </button>
      </div>
      {isSelectingImage && (
        <div className="w-96 h-96 bg-white absolute left-28 top-0">
          <img
            src="/house.png"
            alt="Hehe"
            className="w-16 h-12"
            onClick={() => handleSelectImage("/house.png")}
          />
        </div>
      )}
    </div>
  );
}
