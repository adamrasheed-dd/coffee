import { useEffect, useState } from "react";
import { Navigate, useMatch } from "react-location";
import styled from "styled-components";
import { supabase } from "../api";
import { fetchBrews } from "../api/fetchBrews";
import { useAppContext } from "../components/AppContext";
import BrewHistory from "../components/BrewHistory";
import Loading from "../components/Loading";
import { ROUTES } from "../constants";
import { Brew, CoffeePot as PotType } from "../types";
import { formatDate } from "../utils";

const LastBrewed = styled.p`
  margin: 1rem 0;
  font-size: 1.25rem;
  line-height: 1;
`;

const Button = styled.button`
  font-size: 1.5rem;
  line-height: 1;
  padding: 1rem 2rem;
  margin: 10vh auto;
  border: none;
  background: var(--color-yellow);
  border-radius: 0.25rem;
`;

const CoffeePot = () => {
  const {
    state: { userId },
  } = useAppContext();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [brewTimes, setBrewTimes] = useState<Brew[]>([]);

  const {
    data: { coffeePot },
    isLoading,
    error,
  } = useMatch();

  const { body } = coffeePot as { body: PotType[] };

  const pot = body[0];

  supabase
    .from("brews")
    .on("*", (payload) => {
      console.log({ payload });
    })
    .subscribe();

  useEffect(() => {
    const getBrewTimes = async () => {
      console.log("wat");
      if (!userId) {
        return <Navigate to={ROUTES.LOGIN} />;
      }

      const { data, error } = await fetchBrews(pot.id);

      if (data) {
        setBrewTimes(data);
      }

      if (error) {
        throw new Error(error.message);
      }
    };

    getBrewTimes();
  }, []);

  const handleBrew = async () => {
    setIsSubmitting(true);
    const createdAt = new Date().toISOString();
    const { data, error } = await supabase.from<Brew>("brews").upsert({
      pot: pot.id,
      created_at: createdAt,
    });

    if (error) {
      setIsSubmitting(false);
    }

    if (data) {
      setIsSubmitting(false);
      const { data: newData, error: newError } = await fetchBrews(pot.id);

      if (newData) {
        setBrewTimes(newData);
      }

      if (newError) {
        throw new Error(newError.message);
      }
    }
  };

  if (error) {
    throw new Error(error as any);
  }

  const lastBrew = !!brewTimes.length
    ? formatDate(brewTimes[0].created_at)
    : ``;

  return isLoading ? (
    <Loading />
  ) : (
    <div>
      <h1>{pot.name}</h1>

      <LastBrewed>
        <strong>Last brewed</strong>: {lastBrew}
      </LastBrewed>

      <Button disabled={isSubmitting} onClick={handleBrew}>
        Mark as Brewed
      </Button>

      <BrewHistory brewTimes={brewTimes.reverse()} />
    </div>
  );
};

export default CoffeePot;
