import { supabase } from "../api";
import { Brew } from "../types";

export const fetchBrews = async (potId: number) => {
  const { data, error } = await supabase
    .from<Brew>("brews")
    .select("*")
    .eq("pot", potId);

  return { data, error };
};

export const getBrewsCount = async (potId: number) => {
  const { data, error } = await supabase
    .from<Brew>("brews")
    .select("*", { count: "exact" })
    .eq("pot", potId);

  return { data, error };
};
