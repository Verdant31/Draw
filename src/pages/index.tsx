import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { fabric } from 'fabric';
import { Canvas } from "fabric/fabric-impl";
import { Copy,
  ClipboardText,
  Trash,
  FastForward,
  Rewind } from 'phosphor-react'

export default function App() {
  const [ isContextMenuOPen, setIsContextMenuOpen ] = useState({isOpen: false, x: 0, y: 0})
  const [images, setImages ] = useState<string[]>([])
  const [ myCanvas, setMyCanvas ] = useState<Canvas>()

  function handleSelectImage(path: string) {
    if(myCanvas) {
      var imgElement = document.getElementById('my-image');
      var imgInstance = new fabric.Image(imgElement as any);
      myCanvas.add(imgInstance);
      setImages([...images, path])
      return;
    }
    var canvas = new fabric.Canvas('c', {
      fireRightClick: true, 
      fireMiddleClick: true, 
      stopContextMenu: true
    });
    canvas.setWidth(500)
    canvas.setHeight(500)
    setMyCanvas(canvas)
    var imgElement = document.getElementById('my-image');
    var imgInstance = new fabric.Image(imgElement as any);
    canvas.add(imgInstance);
    setImages([...images, path])
  }

  function handleAddText() {
    if(myCanvas) {
      myCanvas.add(new fabric.IText("Insira o texto aqui.", { left: 100, top: 100 }));
      return;
    }
    var canvas = new fabric.Canvas('c', {
      fireRightClick: true, 
      fireMiddleClick: true, 
      stopContextMenu: true
    });
    canvas.setWidth(500)
    canvas.setHeight(500)

    setMyCanvas(canvas)
    canvas.add(new fabric.IText("Insira o texto aqui.", { left: 100, top: 100 }));
  }
  if(myCanvas) {
    myCanvas.on('mouse:down', function(event) {
      if(event.button === 3 && event.target !== null) {
        if(event.pointer) setIsContextMenuOpen({isOpen: true, x: event.pointer.x, y: event.pointer.y})
      }else {
        setIsContextMenuOpen({isOpen: false, x: 0, y: 0})
      }
    });
  }
  
  return (
    <div className="flex justify-center items-center w-[100vw] h-[100vh]">
      <Sidebar handleSelectImage={handleSelectImage} handleAddText={handleAddText}/>
      <div id="wrapper" className="bg-white w-[500px] h-[500px] relative" onContextMenu={(e)=> e.preventDefault()}>
        <canvas id="c">
        </canvas>
        {isContextMenuOPen.isOpen && (
        <div className="flex space-y-2 flex-col w-60 h-48 p-4 shadow-md rounded-md shadow-gray-700 bg-white absolute" style={{left: isContextMenuOPen.x, top: isContextMenuOPen.y}}>
          <div className="flex opacity-70 hover:opacity-100 transition-all duration-300 cursor-pointer">
            <Copy size={24} />
            <p className="ml-2 ">Copiar</p>
          </div>
          <div className="flex opacity-70 hover:opacity-100 transition-all duration-300 cursor-pointer">
            <ClipboardText size={24} />
            <p className="ml-2  ">Colar</p>
          </div>
          <div className="flex opacity-70 hover:opacity-100 transition-all duration-300 cursor-pointer">
            <Trash size={24} />
            <p className="ml-2  ">Remover</p>
          </div>
          <div className="flex opacity-70 hover:opacity-100 transition-all duration-300 cursor-pointer">
            <FastForward size={24} />
            <p className="ml-2  ">Trazer para frente</p>
          </div>
          <div className="flex opacity-70 hover:opacity-100 transition-all duration-300 cursor-pointer">
            <Rewind size={24} />
            <p className="ml-2  ">Trazer para trás</p>
          </div>
        </div>
      )}    
      </div>
    </div>
  );
}

