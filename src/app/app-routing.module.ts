import { NgModule } from '@angular/core';

// routemodule hace que angular tome las rutas principales o rutas hijas.
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';

const app_routes : Routes = [
    { path: 'home', component: PortafolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'item', component: ItemComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }

];

// en los imports se colocan los modulos
@NgModule({
    imports: [
        RouterModule.forRoot(app_routes, { useHash: true})
    ],
    exports: [
        RouterModule
    ]
})

// se exporta porque se debe utilizar en otros lados.
export class AppRoutingModule{

}