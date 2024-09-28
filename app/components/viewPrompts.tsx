import getPrompts from "../actions/prompts";
import ViewFollowups from "./viewFollowups";

export default async function ViewPrompts() {
    const prompts = await getPrompts()
    if(prompts?.data){
        return (
            <div>
            {prompts.map((prompt: {id: number, text: string}) => (
              <div key={prompt.id} className="mb-4 border rounded p-4">
                <p className="font-bold">Prompt:</p>
                <p>{prompt.text}</p>
                <ViewFollowups id={prompt.id} />
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
        );
    }
    return (
        <div>
            <br />
        </div>
    )
    
}