import Todo from "./components/Todo"
import backgroundVideo from '/bg-vid.mp4'

const App = () => {
 return (
  <div className="relative overflow-hidden w-full h-screen">
    <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 z-10 overflow-y-auto">
        <div className="flex justify-center items-start min-h-full w-full py-8 px-2 sm:px-4">
          <div className="w-full max-w-md px-2 sm:px-4 mt-10">
            <h1 className="text-white text-2xl sm:text-3xl font-bold text-center mb-4">
            What’s on Your <br />Agenda Today?
            </h1>
            <Todo />
          </div>
        </div>
      </div>
  </div>
 )
}

export default App