import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from "apollo-boost";


    function App() {
      const SCHEDULE_QUERY = gql`
    {
      schedule(type: "All", status: "completed", page: 0) { 
        matchID,
        seriesName,
        homeTeamName,
        awayTeamName,
        matchStatus,
        venue,
        matchResult,
        statusMessage,
    }
    }
    `;
    const { loading, error, data } = useQuery(SCHEDULE_QUERY);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.schedule.map(({ matchID, seriesName }) => (
      <div key={matchID}>
        <p>
          {matchID}: {seriesName}
        </p>
      </div>
    ));
    }

export default App;
