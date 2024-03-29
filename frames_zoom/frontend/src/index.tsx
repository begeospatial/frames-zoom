import React from "react"
import { createRoot } from 'react-dom/client';
import FramesZoom from "./FramesZoom"


const root = createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <FramesZoom />
  </React.StrictMode>
);