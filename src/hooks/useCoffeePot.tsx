import { PostgrestError } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

import { supabase } from "../api";
import { CoffeePot } from "../types";

type Props = {
  id: number;
};
const useGetCoffeePot = ({ id }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [coffeePot, setCoffeePot] = useState<CoffeePot | null>(null);
  const [error, setError] = useState<PostgrestError | null>(null);

  useEffect(() => {
    const getPots = async () => {
      setIsLoading(true);
      const { data, statusText, error } = await supabase
        .from<CoffeePot>("pots")
        .select("*")
        .eq("id", id);

      if (data) {
        setCoffeePot(data[0]);
        setIsLoading(false);
      }

      if (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    getPots();
  }, []);

  return { isLoading, coffeePot, error };
};

export default useGetCoffeePot;
