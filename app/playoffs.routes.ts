import { provideRouter, RouterConfig } from '@angular/router';
import {GoogleSigningComponent} from "./google-signing/google-signing.component";

export const routes: RouterConfig = [
  { path: '/google-signing', component: GoogleSigningComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
