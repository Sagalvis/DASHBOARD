import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Player } from "../Pages/Player";
import {Club} from "../Pages/Club";
import {StatusPlayer} from "../Pages/StatusPlayer";
import { MatchDay } from "../Pages/MatchDay";
import {StatusGeneral} from "../Pages/StatusGeneral";
import { Stadium } from "../Pages/Stadium";
import { Positions } from "../Pages/Positions";

export function MyRoutes() {
  return (
    
    
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/club" element={<Club />} />
          <Route path="/player" element={<Player />} />
          <Route path="/matchDay" element={<MatchDay/>} />
          <Route path="/statusplayer" element={<StatusPlayer />} />
          <Route path="/statusgeneral" element={<StatusGeneral />} />
          <Route path="/stadium" element={<Stadium />} />
          <Route path="/positions" element={< Positions/>} />
        </Routes>
    
  );
}