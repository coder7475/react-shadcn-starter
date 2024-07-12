import { Button } from "@/components/ui/button";

const App = () => {
  return (
    <main className="font-helve max-w-[1280px] mx-auto mt-3">
      <nav className="flex justify-between items-center text-base">
        <h2>accelPro</h2>
        <ul className="flex justify-between w-[60%] items-center">
          <li>lorem</li>
          <li>jipsum</li>
          <li>sajf</li>
          <li>dsafdf</li>
          <Button>Click me</Button>
        </ul>
      </nav>
    </main>
  );
};

export default App;
