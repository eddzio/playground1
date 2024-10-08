
import ComponentDescription from "./components/componentDescription";
import HappyComponent from "./components/happyComponent";

export default function Home() {
  return (
   
      <main className="flex flex-col gap-6 place-content-top min-h-screen max-w-4xl mx-auto">
        
        <div className="flex flex-col gap-3 h-[128px] place-content-center">
          <h1 className="label-primary">Playground 1</h1>
          <p className="label-secondary">This is a playground for testing new ideas and concepts.</p>
        </div>


        <div className="flex flex-row gap-10">
          <div className="place-content-center">
          <ComponentDescription title="Hello" description="This is a description of the first item." />
          </div>

          <div className="border-dashed place-content-center content-center p-8 grow">
            <HappyComponent />
          </div>
        </div>

    </main>
  );
}
