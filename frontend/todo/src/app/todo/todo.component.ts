import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';
import { AUNTHENTICATED_USER } from '../app.constants';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id:number
  todo:Todo
  name=sessionStorage.getItem(AUNTHENTICATED_USER)

  constructor(private service:TodoDataService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {

    this.id=this.route.snapshot.params['id']
    this.todo=new Todo(this.id,this.name,'',false,null)
    if(this.id!=-1){
      this.service.retriveTodo(this.name,this.id).subscribe(
        data=>this.todo=data
        
      )
    }

    //console.log(`hey this is todo${this.todo}`)

  }

  saveService(){
    if(this.id===-1){
      this.service.creatTodo(this.name,this.todo).subscribe(
        data=>{
          console.log(data)
          this.router.navigate(['/todos'])
        }
      )
    }
    else{
      this.service.updateTodo("pritam",this.id,this.todo).subscribe(
        data=>{
          console.log(data)
          this.router.navigate(['/todos'])
        }
      )
    }
  }

}
