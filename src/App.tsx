import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">{count}</h1>
      <Button
        onClick={increment}
        className="bg-blue-500 text-white px-6 py-2 rounded-lg mb-2 hover:bg-blue-600"
      >
        +++
      </Button>
      <Button
        onClick={decrement}
        className="bg-red-500 text-white px-6 py-2 rounded-lg mt-2 hover:bg-red-600"
      >
        ---
      </Button>
    </div>
  );
}
