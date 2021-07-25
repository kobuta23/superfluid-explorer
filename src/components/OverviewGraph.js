import React from "react";
import { ForceGraph3D } from "react-force-graph";
import { currencies, tokens, explorers } from "../assets/directory";

const OverviewGraph = props => {
  const fgRef = React.useRef();
  const [state] = React.useState({ id: null, anchor: null });

  // zoom view
  const viewZoom = React.useCallback(
    node => {
      // save state
      if (!state.anchor) {
        state.anchor = fgRef.current.cameraPosition();
      }
      state.id = node.id;
      // move camera
      const distRatio = 1 + 50 / Math.hypot(node.x, node.y, node.z);
      fgRef.current.cameraPosition(
        { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio },
        { x: node.x, y: node.y, z: node.z },
        1000
      );
      props.emitter.emit("viewNode", node.details);
    },
    [fgRef, props, state]
  );

  // reset view
  const viewReset = React.useCallback(() => {
    if (state.anchor) {
      // reset camera
      fgRef.current.cameraPosition(
        { x: state.anchor.x, y: state.anchor.y, z: state.anchor.z },
        state.anchor.lookAt,
        1000
      );
      // reset state
      state.anchor = null;
      state.id = null;
      props.emitter.emit("viewNode", null);
    }
  }, [fgRef, props, state]);

  // handler
  const handleClick = React.useCallback(
    node => {
      console.log(node.id);
      if (!node || node.id === state.id) {
        viewReset(node);
      } else {
        viewZoom(node);
      }
    },
    [state, viewZoom, viewReset]
  );

  const handleRightClick = React.useCallback(node => {
    const url = explorers[props.network] + "/address/" + node.id;
    console.log(url);
    window.open(url);
  }, []);

  return (
    <ForceGraph3D
      ref={fgRef}
      graphData={props.data}
      enableNodeDrag={false}
      nodeLabel={n => n.id + " => " + n.streams + " streams"}
      nodeVal={1}
      nodeColor={n => (n.hasOwnProperty("color") ? n.color : "#fff")}
      // nodeAutoColorBy                   = { n => n.group }
      nodeOpacity={1}
      nodeResolution={16}
      linkCurvature={l => l.curvature}
      linkRotation={l => l.rotation}
      // linkWidth                         = { l => Math.log(1+l.flowRate) }
      linkColor={l => {
        if (typeof l.flowRate == "undefined") return "#111";
        if (typeof tokens[currencies[props.network][l.token]] == "undefined") {
          return "#ff0000";
        } else if (l.flowRate == "0") {
          return tokens[currencies[props.network][l.token]].color + "11";
        } else return tokens[currencies[props.network][l.token]].color;
      }}
      linkLabel={l =>
        ((l.flowRate * 3600 * 24 * 30) / 1e18).toFixed(2) +
        "/mo of " +
        (typeof currencies[props.network][l.token] === "undefined"
          ? l.token
          : currencies[props.network][l.token])
      }
      linkOpacity={1}
      linkDirectionalParticles={l => (l.flowRate == "0" ? 0 : 2)}
      linkDirectionalParticleWidth={l =>
        Math.log(0.1 + Math.log(1 + l.flowRate))
      }
      linkDirectionalParticleResolution={8}
      onNodeClick={node => handleClick(node)}
      onNodeRightClick={node => handleRightClick(node)}
      onLinkClick={link => handleClick(null)}
      onBackgroundClick={() => handleClick(null)}
      backgroundColor="#111111"
    />
  );
};

export default OverviewGraph;
