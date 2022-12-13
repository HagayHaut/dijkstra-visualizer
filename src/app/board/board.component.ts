import { Component } from '@angular/core';
import { GraphNode } from '../core/models';
import { DijkstraService } from '../services/dijkstra.service';

const BOARD_WIDTH = 30;
const BOARD_HEIGHT = 50;

const START_ROW = 12;
const START_COL = 15;
const FINISH_ROW = 38;
const FINISH_COL = 15;

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  grid: GraphNode[][];
  _dijkstraService: DijkstraService;

  constructor() {
    this._dijkstraService = new DijkstraService(
      START_ROW,
      START_COL,
      FINISH_ROW,
      FINISH_COL
    );

    this.grid = this._dijkstraService.getInitialGrid(BOARD_WIDTH, BOARD_HEIGHT);
  }

  handleNodeClick(eventData: { coordinates: number[] }) {
    const [r, c] = eventData.coordinates;
    const node = this.grid[r][c];
    if (!node.isStart && !node.isFinish) {
      this.grid = this._dijkstraService.getGridWithNewWall(this.grid, r, c);
    }
  }
}
