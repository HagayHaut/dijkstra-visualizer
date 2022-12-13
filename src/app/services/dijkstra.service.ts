import { Injectable } from '@angular/core';
import { GraphNode } from '../core/models';

Injectable({
  providedIn: 'root',
});
export class DijkstraService {
  private START_ROW: number;
  private START_COL: number;
  private FINISH_ROW: number;
  private FINISH_COL: number;

  constructor(
    start_row: number,
    start_col: number,
    finish_row: number,
    finish_col: number
  ) {
    this.START_ROW = start_row;
    this.START_COL = start_col;
    this.FINISH_ROW = finish_row;
    this.FINISH_COL = finish_col;
  }

  createNode(row: number, col: number): GraphNode {
    const isStart = row === this.START_ROW && col === this.START_COL;
    const isFinish = row === this.FINISH_ROW && col === this.FINISH_COL;
    const isWall = !!~~Math.random() && !isStart && !isFinish;

    return {
      row,
      col,
      isStart,
      isFinish,
      distance: Infinity,
      isVisited: false,
      isWall,
      previousNode: null,
    };
  }

  getInitialGrid(width: number, height: number): GraphNode[][] {
    const grid: GraphNode[][] = [];

    for (let r = 0; r < height; r++) {
      grid.push(
        Array(width)
          .fill({})
          .map((_, c) => this.createNode(r, c))
      );
    }

    return grid;
  }

  getGridWithNewWall(
    grid: GraphNode[][],
    row: number,
    col: number
  ): GraphNode[][] {
    const updatedGrid = [...grid];
    const node = grid[row][col];
    const updatedNode = {
      ...node,
      isWall: !node.isWall,
    };
    updatedGrid[row][col] = updatedNode;
    return updatedGrid;
  }
}
