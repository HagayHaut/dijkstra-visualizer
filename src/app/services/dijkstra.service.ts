import { Injectable } from '@angular/core';
import { GraphNode } from '../core/models';

Injectable({
  providedIn: 'root',
});
export class DijkstraService {
  private START_NODE_ROW: number;
  private START_NODE_COL: number;
  private FINISH_NODE_ROW: number;
  private FINISH_NODE_COL: number;

  constructor(
    start_row: number,
    start_col: number,
    finish_row: number,
    finish_col: number
  ) {
    this.START_NODE_ROW = start_row;
    this.START_NODE_COL = start_col;
    this.FINISH_NODE_ROW = finish_row;
    this.FINISH_NODE_COL = finish_col;
  }

  createNode(row: number, col: number): GraphNode {
    return {
      row,
      col,
      isStart: row === this.START_NODE_ROW && col === this.START_NODE_COL,
      isFinish: row === this.FINISH_NODE_ROW && col === this.FINISH_NODE_COL,
      distance: Infinity,
      isVisited: false,
      isWall: false,
      previousNode: null,
    };
  }

  getInitialGrid(rows: number, cols: number): GraphNode[][] {
    const grid: GraphNode[][] = [];

    for (let r = 0; r < rows; r++) {
      grid.push(
        Array(cols)
          .fill({})
          .map((_, c) => this.createNode(r, c))
      );
    }

    return grid;
  }
}
