import { supabase } from "../api";
import { CoffeePot } from "../types";

const fetchCoffeePot = (id: string) =>
  supabase.from<CoffeePot>("pots").select("*").eq("id", Number(id));

export default fetchCoffeePot;
