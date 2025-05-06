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
      <div className="relative z-10 w-full h-screen overflow-y-auto">
        <div className="flex justify-center w-full min-h-full">
          <div className="w-full max-w-md px-4 py-8">
            <Todo />
          </div>
        </div>
      </div>
  </div>
 )
}

export default App