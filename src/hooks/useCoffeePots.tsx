import { PostgrestError } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

import { supabase } from "../api";
import { CoffeePot } from "../types";

const useCoffeePots = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [coffeePots, setCoffeePots] = useState<CoffeePot[]>([]);
  const [error, setError] = useState<PostgrestError | null>(null);

  useEffect(() => {
    const getPots = async () => {
      setIsLoading(true);
      const { data, statusText, error } = await supabase
        .from<CoffeePot>("pots")
        .select("*");

      if (data) {
        setCoffeePots(data);
        setIsLoading(false);
      }

      if (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    getPots();
  }, []);

  return { isLoading, coffeePots, error };
};

export default useCoffeePots;
