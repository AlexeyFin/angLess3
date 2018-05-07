import { Component, OnInit } from '@angular/core';
import { JsonplaceholderService } from "../../services/jsonplaceholder.service";

import { Task } from "../../models/Task";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  tasks: Task[];

  constructor(
    public server: JsonplaceholderService
  ) { }

  ngOnInit() {
    // Get all tasks
    this.server.getTasks().subscribe(data => {
      if (data) {
        this.tasks = data;
      }
    }, error => {
      console.log(error);
    })
  }

  deleteTask(id) {
    this.server.deleteTask(id).subscribe(data => {
      this.tasks = this.tasks.filter(task => task.id !== id);
    });
  }
  changeStatusOfTask(obj) {
    console.log(obj);
    this.server.changeStatusOfTask(obj).subscribe(data => {
      this.tasks = this.tasks.filter(task => {
        if (task.id === data.id) {
          task.completed = data.completed;
          return task
        }
        return task
      })
    })

  }

  identify(index) {
    return index;
  }
}
