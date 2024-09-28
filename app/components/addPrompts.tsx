import { useState } from "react";
import { addPrompt } from "../actions/prompts";

export default function AddPrompts() {
    const [prompt, setPrompt] = useState('')

    const handleSubmit = async (event: React.FormEvent) {
        event.preventDefault()
        addPrompt(prompt)
        setPrompt('')
    }
    return (
        <div className="mb-4">
        <label htmlFor="prompt" className="block text-gray-700 font-bold mb-2">
          Enter Prompt:
        </label>
        <textarea
          id="prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          rows={5}
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2"
        >
          Add Prompt
        </button>
      </div>
    );
}