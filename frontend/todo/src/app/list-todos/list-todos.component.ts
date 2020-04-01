import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import {  Router } from '@angular/router';


export class Todo{
  constructor(
    public id:number,
    public username:string,
    public description:string,
    public done:boolean,
    public targetDate:Date
  ){
    

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {


  message:string
  todos:Todo[]
  // =[
  //   new Todo(1,'learn to code',false,new Date()),
  //   new Todo(2,'become an expert',false,new Date()),
  //   new Todo(3,'rock the world',false,new Date()),
  // ]

  // todo={
  //   id:1,
  //   description:'learn to code'
  // }
  constructor(
    private service:TodoDataService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.refreshTodo()
  }

  refreshTodo(){
    this.service.retriveAllTodo("Pritam").subscribe(
      response=>{

        //console.log("deleted")
        this.todos=response

      }
    )
  }

  deleteTodo(id){

    this.service.deleteTodo("Pritam",id).subscribe(
      respons=>{
        this.refreshTodo()
        this.message=`Todo ${id} deleted`
      }
      
    )
    
    this.refreshTodo()

  }

  updateTodo(id){
    this.router.navigate(['/todos',id])
  }
  saveTodo(){
    this.router.navigate(['/todos',-1])
  }

}
