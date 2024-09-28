"use client"

import AddPrompts from './components/addPrompts';


const ChatGPTInterface = () => {

  const addFollowUp = (promptId: number, followUpText: string) => {
    setPrompts(
      prompts.map((prompt) =>
        prompt.id === promptId ? { ...prompt, followUps: [...prompt.followUps, followUpText] } : prompt
      )
    );
  };

  return (
    <div className="container mx-auto p-4">
      <AddPrompts/>
      <div>
        {prompts.map((prompt) => (
          <div key={prompt.id} className="mb-4 border rounded p-4">
            <p className="font-bold">Prompt:</p>
            <p>{prompt.text}</p>
            {prompt.followUps.length > 0 && (
              <div>
                <p className="font-bold mt-2">Follow-ups:</p>
                <ul>
                  {prompt.followUps.map((followUp, index) => (
                    <li key={index}>{followUp}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className="mt-2">
              <label htmlFor={`followUp-${prompt.id}`} className="block text-gray-700 font-bold mb-2">
                Add Follow-up:
              </label>
              <input
                type="text"
                id={`followUp-${prompt.id}`}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    addFollowUp(prompt.id, event.target.value);
                    event.target.value = '';
                  }
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatGPTInterface;