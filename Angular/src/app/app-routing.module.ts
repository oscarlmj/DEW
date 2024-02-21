import { ModuleWithProviders, NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ProfileComponent } from "./components/profile/profile.component";
import { AboutComponent } from "./components/about/about.component";

const routes: Routes = [
    { path: '', component: ProfileComponent },
    { path: 'about', component: AboutComponent }
];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes);

@NgModule({
    imports: [routing],
    exports: [RouterModule]
})
export class AppRoutingModule{}