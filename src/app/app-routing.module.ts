import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './education/education.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PersonalComponent } from './personal/personal.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {path:"personal",component:PersonalComponent},
  {path:"education",component:EducationComponent},
  {path:"skills",component:SkillsComponent},
  {path:"" ,redirectTo:"personal" ,pathMatch:"full"},
  {path:"**",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
