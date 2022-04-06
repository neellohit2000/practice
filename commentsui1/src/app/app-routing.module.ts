import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeletesComponent } from './deletes/deletes.component';
import { DisplayComponent } from './display/display.component';
import { MenuComponent } from './menu/menu.component';
import { RecordaddedComponent } from './recordadded/recordadded.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path:'search',component:SearchComponent},
  {path:'menu',component:MenuComponent},
  {path:'register',component:RegisterComponent},
  {path:'deletes',component:DeletesComponent},
  {path:'display',component:DisplayComponent},
  {path:'recordadded',component:RecordaddedComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
