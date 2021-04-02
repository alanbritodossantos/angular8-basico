import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course-list',// vai ser uma tag
  templateUrl: './couses-list.component.html'
})
export class CouseListComponet implements OnInit{

  courses: Course[] = []; // array(lista) de cursos

  constructor(private courseService: CourseService){}

  ngOnInit(): void {
      this.courses = this.courseService.retrieveAll();

  }



}
