import { LoginComponent} from './pages/login/login.component';
import { ListComponent } from './pages/list/list.component';
import { UserProfileComponent } from './pages/UserProfile/UserProfile.component';
import { AdminViewComponent} from './pages/AdminView/AdminView.component';
import { RestaurantProfileComponent } from './pages/RestaurantProfile/RestaurantProfile.component';
import { GroupProfileComponent } from './pages/GroupProfile/GroupProfileComponent';
import { TempNavigationComponent } from './pages/TempNavigation/TempNavigation.component';
import { RegisterComponent } from './pages/Register/Register.component';
import { HomeComponent } from './pages/Home/Home.component';
import { ManageAccountsComponent } from './pages/ManageAccounts/ManageAccounts.component';
import {ViewGroupsComponent} from './pages/ViewGroups/ViewGroups.component'
import { ManagePreferencesComponent } from './pages/ManagePreferences/ManagePreferences.component';
import { FeedbackComponent } from './pages/Feedback/Feedback.component';
import { RestaurantInfoComponent } from './pages/RestaurantInfo/RestaurantInfoComponent';
import { SearchRestaurantComponent } from './pages/SearchRestaurant/SearchRestaurant.component';

export const routes = [
{path: '',component: TempNavigationComponent},
{path: 'login',component: LoginComponent},
{path: 'list',component: ListComponent},
{path: 'UserProfile',component: UserProfileComponent},
{path: 'AdminView',component: AdminViewComponent},
{path: 'RestaurantProfile',component: RestaurantProfileComponent},
{path: 'GroupProfile',component: GroupProfileComponent},
{path: 'TempNavigation',component: TempNavigationComponent},
{path: 'ManageAccounts',component:ManageAccountsComponent},
{path: 'ViewGroups',component:ViewGroupsComponent},
{path: 'ManagePreferences',component:ManagePreferencesComponent},
{path: 'Feedback',component:FeedbackComponent},
{path: 'RestaurantInfo',component:RestaurantInfoComponent},
{path: 'Register',component:RegisterComponent},
{path: 'SearchRestaurant',component:SearchRestaurantComponent},


];
export const navigatableComponents = [
    TempNavigationComponent,
    LoginComponent,
    ListComponent,
    UserProfileComponent,
    AdminViewComponent,
    RestaurantProfileComponent,
    GroupProfileComponent,
    RegisterComponent,
    HomeComponent,
    ManageAccountsComponent,
    ViewGroupsComponent,
    ManagePreferencesComponent,
    FeedbackComponent,
    RestaurantInfoComponent,
    SearchRestaurantComponent,

    ] 
