import { supabase } from "@/utils/supabase/server";

export default async function getPrompts() {
  const { data, error } = await supabase.from("prompts").select("*");
  if (error) {
    console.log(error);
    return error;
  }
  return data;
}

export async function addPrompt(prompt: string) {
  const { data, error } = await supabase.from("prompts").insert({ prompt });
  if (error) {
    console.log(error);
    return error;
  }
  return data;
}

export async function deletePrompt(id: string) {
  const { data, error } = await supabase.from("prompts").delete().eq("id", id);
  if (error) {
    console.log(error);
    return error;
  }
  return data;
}

export async function getPrompt(id: string) {
  const { data, error } = await supabase
    .from("prompts")
    .select("*")
    .eq("id", id);
  if (error) {
    console.log(error);
    return error;
  }
  return data;
}
export async function editedPrompt(id: string, prompt: string) {
  //check if prompt exists
  const savedPrompt = await getPrompt(id);
  if (!savedPrompt) {
    addPrompt(prompt);
    return;
  }

  const addNewPrompt = await addPrompt(prompt);

  const newPromptId = addNewPrompt?.data?.[0]?.id;
  if (!newPromptId) {
    console.error('Failed to get new prompt ID');
    return;
  }

  const { data, error } = await supabase
    .from("prompt_relations")
    .insert({ prompt_a: id, prompt_b: newPromptId});
    if(error){
        return error
    }
    return data
}
