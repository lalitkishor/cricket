import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from "apollo-boost";


function Completed() {
    const SCHEDULE_QUERY = gql`
    {
      schedule(type: "All", status: "completed", page: 0) { 
        matchID,
        seriesName,
        homeTeamName,
        awayTeamName,
        venue,
        matchResult,
        playerOfTheMatch
    }
    }
    `;
    const { loading, error, data } = useQuery(SCHEDULE_QUERY);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.schedule.map(({ matchID, seriesName ,venue,homeTeamName,awayTeamName,matchResult,playerOfTheMatch}) => (
      <div className ="fl-ns w-25-ns ph2" key={matchID}>
        <h3 className="bg-light-gray pa2 br2">{seriesName}</h3>
        <p className="pl2 gray">{venue}</p>
        <p className="pl4 black">{homeTeamName}</p>
        <p className="pl4 black">{awayTeamName}</p>
        <p>{matchResult}</p>
        <div className="bg-light-gray pa1">
            <p className="mb0 mt1">{playerOfTheMatch}</p>
            <p className="mt1 mb1 pv0 f7">Player of the Match</p>
        </div>
        
      </div>
    ));
    }

export default Completed;