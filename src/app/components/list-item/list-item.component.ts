import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { JsonplaceholderService } from "../../services/jsonplaceholder.service";

import { Task } from "../../models/Task";

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() task: Task;
  @Output() delete = new EventEmitter();
  @Output() change = new EventEmitter();

  constructor(
    public server: JsonplaceholderService
  ) { }

  ngOnInit() {
  }

  deleteOneTask() {
    // Generate event
    this.delete.emit(this.task.id);
  }

  changeStatusOfTask() {
    this.task.completed = !this.task.completed;
    this.change.emit({id: this.task.id, status: this.task.completed});
  }

}
