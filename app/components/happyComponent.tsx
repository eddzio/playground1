// React
import { motion } from "framer-motion"

export default function HappyComponent() {
    return (
    <div
      className="cursor-pointer w-[200px] flex flex-col gap-3 mx-auto
      bg-slate-900 p-4 rounded-xl 
      border-slate-800 border
      hover:-translate-y-1
      transition-all duration-150
      ease-out
      shadow-lg shadow-slate-900/80
      ">
        
        <div className="flex flex-row justify-between">
            <div className="bg-emerald-950 text-emerald-300 px-3 py-1 rounded-full inline">10h</div>
        </div>

        <div>
            <h2 className="label-primary">Happy component</h2>
            <p className="label-secondary">I'm having fun</p>
        </div>

     

      </div>
    );
  }
