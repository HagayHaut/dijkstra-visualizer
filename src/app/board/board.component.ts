import { Component } from '@angular/core';
import { GraphNode } from '../core/models';
import { DijkstraService } from '../services/dijkstra.service';

const BOARD_WIDTH = 50;
const BOARD_HEIGHT = 30;

const START_NODE_ROW = 10;
const START_NODE_COL = 15;
const FINISH_NODE_ROW = 10;
const FINISH_NODE_COL = 35;

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  grid: GraphNode[][];
  _dijkstraService: DijkstraService;
  mouseIsPressed: boolean;

  constructor() {
    this._dijkstraService = new DijkstraService(
      START_NODE_ROW,
      START_NODE_COL,
      FINISH_NODE_ROW,
      FINISH_NODE_COL
    );

    this.grid = this._dijkstraService.getInitialGrid(BOARD_HEIGHT, BOARD_WIDTH);
    this.mouseIsPressed = false;
  }
}
