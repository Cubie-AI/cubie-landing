import { Code, Github, Twitter } from "lucide-react";
import { RepoCard } from "./components/RepoCard";
import { Button } from "./components/ui/button";
import { CUBIE_SHOWCASE_REPOS } from "./data/repos";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="-mt-[9%]">
        <div className="flex items-center gap-4 mb-2">
          <img
            src="/favicon.png"
            alt="CubieAI Logo"
            className="w-32 h-32 mix-blend-difference"
          />
          <h1 className="text-5xl text-center">Cubie AI</h1>
        </div>
        <p className="text-sm italic text-center">
          Open source AI tools, frameworks and products
        </p>
        <p className="text-sm text-center mt-1 mb-[3em]">
          2MH8ga3TuLvuvX2GUtVRS2BS8B9ujZo3bj5QeAkMpump
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a href="https://x.com/cubieai" target="_blank">
            <Button className="w-full md:w-32">
              <Twitter className="w-4 h-4 mr-2" />
            </Button>
          </a>
          <a href="https://github.com/cubie-ai" target="_blank">
            <Button className="w-full md:w-32" variant="outline">
              <Github className="w-4 h-4 mr-2" />
            </Button>
          </a>
          <a href="https://code.cubie.fun" target="_blank">
            <Button className="w-full md:w-32" variant="secondary">
              <Code className="w-4 h-4 mr-2" />
            </Button>
          </a>
        </div>
      </div>
      <div className="grid grid-rows-1 md:grid-cols-2 auto-rows-fr gap-4 mt-[4em] max-w-5xl px-4">
        {CUBIE_SHOWCASE_REPOS.map((repo) => (
          <RepoCard key={repo.title} {...repo} />
        ))}
      </div>
    </div>
  );
}

export default App;
