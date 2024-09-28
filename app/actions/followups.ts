import { supabase } from "@/utils/supabase/server";

export  async function getFollowups (id: number){
    const {data, error} = await supabase.from('followups').select("*");
    if(error){
        return error
    }
    return data
}

export  async function addFollowups (id: number, followups: string){
    const {data, error} = await supabase.from('followups').insert({id, followups})

    if(error){
        return error
    }
    return data
}

export async function viewFollowups (id: number){
    const {data, error} = await supabase.from("followups").select("*").eq("prompt_id",id);

    if(error){
        return error
    }

    return data
}