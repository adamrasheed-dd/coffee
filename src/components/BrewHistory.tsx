import { Brew } from "../types";
import { formatDate } from "../utils";

const BrewHistory: React.FC<{ brewTimes: Brew[] }> = ({ brewTimes }) => {
  return (
    <div>
      <h3>Brew History</h3>
      <ul>
        {!!brewTimes.length &&
          brewTimes.map((time) => (
            <li key={time.created_at}>{formatDate(time.created_at)}</li>
          ))}
      </ul>
    </div>
  );
};

export default BrewHistory;
