import { Github, Twitter } from "lucide-react";
import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="-mt-[20%]">
        <div className="flex items-center gap-4 mb-2">
          <img
            src="/favicon.png"
            alt="CubieAI Logo"
            className="w-32 h-32 mix-blend-difference"
          />
          <h1 className="text-5xl text-center">Cubie AI</h1>
        </div>
        <p className="text-sm  mb-[4em] italic">
          Open source AI tools, frameworks and products
        </p>

        <div className="flex justify-center gap-4">
          <a href="https://x.com/cubieai" target="_blank">
            <Button className="w-32">
              <Twitter className="w-4 h-4 mr-2" />
            </Button>
          </a>
          <a href="https://github.com/cubie-ai" target="_blank">
            <Button className="w-32" variant="outline">
              <Github className="w-4 h-4 mr-2" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
