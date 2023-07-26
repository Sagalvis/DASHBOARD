import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Player } from "../pages/Player";
import {Club} from "../pages/Club";
import {StatusPlayer} from "../pages/StatusPlayer";
import { MatchDay } from "../pages/MatchDay";
import {StatusGeneral} from "../pages/StatusGeneral";
import { Stadium } from "../pages/Stadium";
import { Positions } from "../pages/Positions";

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