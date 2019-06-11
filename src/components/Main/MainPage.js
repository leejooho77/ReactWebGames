import React, { Component } from 'react';
import GridRow from './GridRow.js'
import './styles/style.css';

class MainPage extends Component {
    constructor() {
        super();
        this.state = {
            grids: [],
            neighbors: [[0, -1], [-1, 0], [-1, -1], [-1, 1], [1, -1], [1, 0], [0, 1], [1, 1]],
            intervalId: ''
        }
        this.initialize = this.initialize.bind(this);
        this.mark = this.mark.bind(this);
        this.next = this.next.bind(this);
        this.numAlive = this.numAlive.bind(this);
        this.isValid = this.isValid.bind(this);
    }
        
    componentDidMount() {
        const grids = this.initialize();
        this.setState({ grids })
        let intervalId = setInterval(this.next, 1000);
        this.setState({ intervalId });
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }

    initialize() {
        let grids = [];
        for (let i = 0; i < 50; i++) {
            let row = [];
            for (let j = 0; j < 50; j++) {
                let status = '';
                if (Math.floor(Math.random() * 10) < 3) status = "alive";
                else status = "dead";
                row.push(status);
            }
            grids.push(row);
        }
        return grids;
    }

    mark() {
        let newGrids = [];
        this.state.grids.forEach((row, i) => {
            const rows = row.map((status, j) => {
                if(status === "alive" && (this.numAlive(i, j) < 2 || this.numAlive(i, j) > 3)) {
                    return "alive-dead"
                } else if (status === "dead" && this.numAlive(i, j) === 3) {
                    return "dead-alive"
                } else return status;
            });
            newGrids.push(rows);
        });
        return newGrids;
    }

    next() {
        let newGrids = [];
        this.mark().forEach(row => {
            const rows = row.map((status, i) => {
                if(status === "alive-dead") {
                    return "dead";
                } else if (status === "dead-alive") {
                    return "alive"
                } else return status;
            });
            newGrids.push(rows);
        });
        this.setState({ grids: newGrids });
    }

    numAlive(i, j) {
        let count = 0;
        const { neighbors } = this.state; 
        for (let neighbor in neighbors) {
            if(this.isValid(i + neighbors[neighbor][0], j + neighbors[neighbor][1])) count++;
        }
        return count;
    }
    
    isValid(x, y) {
        const { grids } = this.state;
        if(x >= 0 && y >= 0 && x < 50 && y < 50 && grids[x][y].includes("alive")) return true;
        return false;
    }

    render() {
        let grids = [];
        this.state.grids.forEach((row, i) => {
            const rows = row.map((grid) => grid);
            grids.push(<GridRow key={i} grids={rows} />)
        })
        return (
            <div className="grid-container">
                {grids}
            </div>
        );
    };
}

export default MainPage;