import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './education/education.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PersonalComponent } from './personal/personal.component';
import { ProductComponent } from './product/product.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  { path: "personal", component: PersonalComponent },
  { path: "education", component: EducationComponent },
  { path: "skills", component: SkillsComponent },
  { path: 'product', component: ProductComponent },
  { path: 'productdetails', component: ProductdetailComponent },
  { path: 'productdetails/:id', component: ProductdetailComponent },
  { path: "", redirectTo: "personal", pathMatch: "full" },
  { path: "**", component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
