import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
  // o select será por link de rotas
  // foi tirado o seletor por agora vai
  //quando queremos usar a tag em outro componete ai sim precisar ter o seletor(tag)
  /*
  como estamos trabalhando com rotas, o que vai ativar não é mais o seletor e sim a rota que
  vamos passar lá em cima no url
  */
  templateUrl: './couses-list.component.html'
})
export class CouseListComponet implements OnInit{

  filteredCourses: Course[] = [];

  _courses: Course[] = []; // array(lista) de cursos

  _filterBy: string;

  constructor(private courseService: CourseService){}

  ngOnInit(): void {
      this._courses = this.courseService.retrieveAll();
      this.filteredCourses = this._courses;

  }

  set filter(value:string){
      this._filterBy = value;
      this.filteredCourses =
      this._courses.filter((course: Course)=> course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) >-1);
  }

  get filter(){
    return this._filterBy;
  }

}
