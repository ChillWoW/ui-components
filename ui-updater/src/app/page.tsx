"use client";
import ComponentCard from "@/components/ComponentCard";
import { ColorPicker } from "@/components/ui";
import { useState } from "react";

export default function Home() {
  const [color, setColor] = useState("#000000");

  return (
    /*<div className="bg-dark-900 min-h-screen w-full">
            <div className="mx-auto">
                <div className="flex">
                    <main className="flex-1">
                        <ComponentCard />
                    </main>
                </div>
            </div>
        </div>*/
    <div className="bg-dark-900 min-h-screen w-full flex items-center justify-center">
      <div className="bg-dark-800 p-4 rounded-lg w-96 h-96">
        <ColorPicker
          value={color}
          onChange={setColor}
          classNames={{
            inputContainer: "w-full",
          }}
        />
      </div>
    </div>
  );
}
