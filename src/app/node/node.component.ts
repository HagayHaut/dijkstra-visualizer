import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss'],
})
export class NodeComponent {
  @Input() coordinates: number[] = [];
  @Input() isFinish: boolean = false;
  @Input() isStart: boolean = false;
  @Input() isWall: boolean = false;

  @Output() onNodeClick = new EventEmitter<{ coordinates: number[] }>();

  getClassName([isStart, isFinish, isWall]: boolean[]): string {
    const subClass = isStart ? 'start' : isFinish ? 'finish' : '';
    return `node ${isWall ? 'wall' : subClass}`;
  }
}
