import { Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { AboutUsComponent } from './routes/about-us/about-us.component';
import { SolutionsComponent } from './routes/solutions/solutions.component';
import { ProjectsComponent } from './routes/projects/projects.component';
import { ExperienceComponent } from './routes/experience/experience.component';
import { ContactUsComponent } from './routes/contact-us/contact-us.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'about_us',
        component:AboutUsComponent
    },
    {
        path:'solutions',
        component:SolutionsComponent
    },
    {
        path:'projects',
        component:ProjectsComponent
    },
    {
        path:'experience',
        component:ExperienceComponent
    },
    {
        path:'contact_us',
        component:ContactUsComponent
    },

];
