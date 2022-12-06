import { Image, TextT, Pencil, Stack, Faders } from "phosphor-react";
import { useState } from "react";
interface SidebarProps {
  handleSelectImage: (path: string) => void;
  handleAddText: () => void;
}
interface ImagesListProps {
  handleSelectImage: (path: string) => void;
}
interface TextProps {
  handleAddText: () => void;
}

export default function Sidebar({ 
  handleSelectImage, 
  handleAddText 
}: SidebarProps) {
  const [ modal , setModal ] = useState({isOpen: false, children: <></>});

  return (
    <div className="flex">
      <div className="h-[100vh] w-28 bg-gray-200 flex flex-col items-center gap-y-8 pt-8 absolute left-0 top-0">
        <button
          className="flex flex-col items-center"
          onClick={() => setModal({isOpen: !modal.isOpen, children: (<ImagesList handleSelectImage={handleSelectImage}/>)})}
        >
          <Image size={32} alt="Icone de um quadro" />
          <p>Imagens</p>
        </button>
        <button
          className="flex flex-col items-center"
          onClick={() => setModal({isOpen: !modal.isOpen, children: (<AddText handleAddText={handleAddText}/>)})}
        >
          <TextT size={32} />
          <p>Texto</p>
        </button>
        <button
          className="flex flex-col items-center"
          onClick={() => setModal({isOpen: !modal.isOpen, children: (<Draw  />)})}
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
        {modal.isOpen && (
          modal.children
        )}
      </div>
    </div>
  );
}

const Draw = () => (
  <div className="w-96 h-96 bg-gray-200 absolute left-28 top-0">
    <div className="mt-8 ml-12 gap-y-2 flex flex-col">
      <p>Stroke</p>
      <input type="color" id="stroke" className="w-44 h-8 outline-none"/>
    </div>
    <div className="mt-2 ml-12 gap-y-2 flex flex-col">
      <p>Line width</p>
      <input type="number" id="stroke" className="w-44 h-8  outline-none pl-2"/>
    </div>
  </div>
)

const ImagesList = ({handleSelectImage}: ImagesListProps) => (
  <div className="w-96 h-96 bg-gray-200 absolute left-28 top-0">
    <p className="mt-4 ml-4">Lista de Imagens</p>
    <div className="flex ">
      <img
        id="my-image"
        src="/house.png"
        alt="Hehe"
        className="w-12 h-10 m-6 hover:opacity-70 hover:scale-105 duration-300"
        onClick={() => handleSelectImage("/house.png")}
      />
      <img
        id="my-image"
        src="/house.png"
        alt="Hehe"
        className="w-12 h-10 m-6 hover:opacity-70 hover:scale-105 duration-300"
        onClick={() => handleSelectImage("/house.png")}
      />
      <img
        id="my-image"
        src="/house.png"
        alt="Hehe"
        className="w-12 h-10 m-6 hover:opacity-70 hover:scale-105 duration-300"
        onClick={() => handleSelectImage("/house.png")}
      />
    </div>
  </div>
)

const AddText = ({handleAddText}: TextProps) => (
  <div className="w-96 h-32 bg-gray-200 absolute left-28 top-0 flex rounded-r-sm">
    <p className="mt-4 ml-4">Texto</p>
    <button onClick={handleAddText} className="h-8 w-60 bg-black text-white mt-16">Inserir texto</button>
  </div>
)