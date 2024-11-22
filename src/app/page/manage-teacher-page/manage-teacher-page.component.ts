import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-teacher-page',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './manage-teacher-page.component.html',
  styleUrl: './manage-teacher-page.component.css'
})
export class ManageTeacherPageComponent {

  public teacherList:any = [];

  constructor(private http:HttpClient){
    this.loadTable();  
  }

  loadTable(){
    this.http.get("http://localhost:8080/teacher/get-all").subscribe(data=>{
      console.log(data);
      this.teacherList=data;
      
    })
  }

  deleteTeacherById(id:any){
      console.log(id);
      this.http.delete(`http://localhost:8080/teacher/delete-by-id/${id}`).subscribe(data=>{
        alert("Teacher deleted !!!!");
        this.loadTable();
      })
      
  }
public teacherTemp:any={}
  updateTeacher(teacher:any){
    console.log(teacher);
    this.teacherTemp=teacher;
    
  }

  saveTeacher(){
    this.http.put("http://localhost:8080/teacher/update-teacher",this.teacherTemp).subscribe(data=>{
      alert("teacher Updated!!!!!")
    })
  }
}
