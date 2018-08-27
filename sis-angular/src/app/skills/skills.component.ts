import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills = ['Системный администратор с большим опытом, знаю, как что работает, как организовать сеть и т.д.',
    'Несколько пробных проектов в разработке, в том числе и на  Angular',
    'C#, TypeScript, SQL, ADO.NET, Angular - это то, с чем я имел дело',
    'Общий опыт в IT сфере более 5 лет. Я понимаю, как многое работает, и усвоение новых знаний для меня не составляет сложностей'];

  interests= ['Чтение технической и художественной литературы',
    'Warhammer в виде настольной игры и все, что с этим связано',
    'Разработка ПО и повышение знаний и навыков',
    'Отдых на свежем воздухе',
    'Фехтование на ножах, мечах',
    'Музыка'];

  addInterest(newInterest: string) {
    if (newInterest) {
      this.interests.push(newInterest);
    }};
  addSkill(newSkill: string) {
    if (newSkill) {
      this.skills.push(newSkill);
    }
  };


  constructor() {

  }

  ngOnInit() {
  }

}
