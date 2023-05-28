import { useState, useEffect } from "react";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <div className="m-0 min-w-[320px] h-screen flex flex-col justify-center items-center">
        <h1 className="text-[30px] mb-5">Window Width</h1>
        <div className="text-2xl text-fuchsia-400">{windowWidth} px</div>
      </div>
    </>
  );
}

export default App
