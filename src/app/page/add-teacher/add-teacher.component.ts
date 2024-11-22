import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-add-teacher',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './add-teacher.component.html',
  styleUrl: './add-teacher.component.css'
})
export class AddTeacherComponent {
  public teacher:any={
    teacherName:"",
    teacherAddress:"",
    teacherEmail:""
  };

  constructor(private http:HttpClient){}

  public addTeacher(){
    this.http.post("http://localhost:8080/teacher/add-teacher",this.teacher).subscribe((data)=>{
        alert("Teacher Added!!!!");
    })
  }
}
