import { Routes, RouterModule } from '@angular/router';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { ChildrenComponent } from './children/children.component';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';
import { FormularioReactivoComponent } from './formulario-reactivo/formulario-reactivo.component';
import { InterpolacionComponent } from './interpolacion/interpolacion.component';
import { LoginformComponent } from './loginform/loginform.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { ValidacionComponent } from './validacion/validacion.component';

export const routes: Routes = [
    {
        path: 'classbinding',
        component: ClassbindingComponent
    },
    {
        path: 'children',
        component: ChildrenComponent
    },
    {
        path: 'formbuilder',
        component: FormbuilderComponent
    },
    {
        path: 'formulario-reactivo',
        component: FormularioReactivoComponent
    },
    {
        path: 'interpolacion',
        component: InterpolacionComponent
    },
    {
        path: 'loginform',
        component: LoginformComponent
    },
    {
        path: 'Propertybinding',
        component: PropertybindingComponent
    },
    {
        path: 'validacion',
        component: ValidacionComponent
    }
];
