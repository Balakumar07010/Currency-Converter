import { Currency } from "./components/currency/Currency";

function App() {
  return (
    <div className="w-full h-screen">
      <video
        src="./currency/89627-614703091_small.mp4"
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 h-screen w-full object-fill"
      ></video>
      <Currency />
    </div>
  );
}

export default App;
