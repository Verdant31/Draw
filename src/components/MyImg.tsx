import { useEffect, useState } from "react";

interface MyImgProps {
    src: string;
}
export default function MyImg({src}: MyImgProps) {
    const [ isEditing, setIsEditing ] = useState(true);
    const [size, setSize] = useState({ x: 100, y: 100 });

    useEffect(() => {
      window.addEventListener('click', function(e: any){   
        if (document){
          const el = document.getElementById('clickbox');
          if(el && !el.contains(e.target)) {
            setIsEditing(false)
          }
        }
      });
    }, [])

    const sizeHandler = (mouseDownEvent: any) => {
      const startSize = size;
      const startPosition = { x: mouseDownEvent.pageX, y: mouseDownEvent.pageY };
      
      function onMouseMove(mouseMoveEvent : any) {
        setSize({ 
          x: startSize.x - startPosition.x + mouseMoveEvent.pageX, 
          y: startSize.y - startPosition.y + mouseMoveEvent.pageY 
        });
      }
      function onMouseUp() {
        document.body.removeEventListener("mousemove", onMouseMove);
      }
      
      document.body.addEventListener("mousemove", onMouseMove);
      document.body.addEventListener("mouseup", onMouseUp, { once: true });
    };

    const positionHandler = (mouseDownEvent: any) => {
      const startSize = size;
      const startPosition = { x: mouseDownEvent.pageX, y: mouseDownEvent.pageY };
      
      function onMouseMove(mouseMoveEvent : any) {
        setSize({ 
          x: startSize.x - startPosition.x + mouseMoveEvent.pageX, 
          y: startSize.y - startPosition.y + mouseMoveEvent.pageY 
        });
      }
      function onMouseUp() {
        document.body.removeEventListener("mousemove", onMouseMove);
      }
      
      document.body.addEventListener("mousemove", onMouseMove);
      document.body.addEventListener("mouseup", onMouseUp, { once: true });
    };


    return (
        <div 
          id="clickbox" 
          onBlur={() => setIsEditing(false)} 
          onClick={() => setIsEditing(true)} 
          className={`absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] border-[1px] ${isEditing ? "border-blue-500" : "border-transparent"}`} 
          style={{ width: size.x, height: size.y}}
        >
            <img src={src} alt="" style={{width: '100%', height: '100%'}}/>
            {isEditing && (<div>
              <button onMouseDown={sizeHandler}  className="h-[10px] w-[10px] absolute bg-blue-500 rounded-[9800px] top-0 -translate-y-1/2 -left-1" />
              <button onMouseDown={sizeHandler} className="h-[10px] w-[10px] absolute bg-blue-500 rounded-[9800px] top-0 -translate-y-1/2 -right-1" />
              <button onMouseDown={sizeHandler} className="h-[10px] w-[10px] absolute bg-blue-500 rounded-[9800px] bottom-0 translate-y-1/2 -left-1" />
              <button onMouseDown={sizeHandler} className="h-[10px] w-[10px] absolute bg-blue-500 rounded-[9800px] bottom-0 translate-y-1/2 -right-1" />
            </div>)}
        </div>
    );
}