import * as React from 'react';
import { useEffect } from 'react'
import './dotlattice.css'

function initialise() {
    let wrapper = document.querySelector(".dot-lattice");
    let wrapper_grids = document.querySelectorAll('.dot-lattice .dot-effect-container');

    let columns = 0,
        rows = 0;

    createGrid(wrapper_grids);
}

function createTile(index) {
    const tile = document.createElement("div");
    
    tile.classList.add("tile");
    
    tile.style.opacity = 1;

    return tile;
}

function createTiles(quantity, wrapper_grid) {
  Array.from(Array(quantity)).map((tile, index) => {
    wrapper_grid.appendChild(createTile(index));
  });
}

function createGrid(wrapper_grids) {
  wrapper_grids.forEach(wrapper_grid => {
    wrapper_grid.innerHTML = "";
  })
  
  const size = (window.innerWidth * 0.25) > 800 ? 100 : 20;
  console.log(size);
  
  let columns = Math.floor(window.innerWidth * 0.20 / size);
  let rows = Math.floor(window.innerHeight * 0.25 / size);
  
  wrapper_grids.forEach(wrapper_grid => {
    wrapper_grid.style.setProperty("--columns", columns);
    wrapper_grid.style.setProperty("--rows", rows);
  })
  
  wrapper_grids.forEach(wrapper_grid => {
    createTiles(columns * rows, wrapper_grid);
  });
}

window.onresize = () => initialise();

function DotLattice() {
    useEffect(() => {

        initialise();
      
      }, [])
    return (
        <div className="dot-lattice">
            <div className="dot-effect-container" onLoad={initialise()}></div>
        </div>
    );
}
export default DotLattice;
