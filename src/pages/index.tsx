import { useState } from "react";
import Sidebar from "../components/Sidebar";
import MyImg from "../components/MyImg";

export default function App() {
  const [ images, setImages ] = useState<string[]>([])
  function handleSelectImage(path: string) {
    setImages([...images, path])
  }

  return (
    <div className="flex justify-center items-center w-[100vw] h-[100vh]">
      <Sidebar handleSelectImage={handleSelectImage} />
      <div className="bg-white w-[400px] h-[400px]">
        {images.map((image, index) => (
          <MyImg src={image} key={image} />
        ))}
      </div>
    </div>
  );
}
