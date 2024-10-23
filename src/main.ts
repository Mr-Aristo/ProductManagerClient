import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HttpClientModule, provideHttpClient ,} from '@angular/common/http';
import { routes } from './app/app.routes'
import { provideRouter } from '@angular/router';;

// const applicationConfig = {
//   providers: [
//     provideHttpClient()
//   ]
// };
const applicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
};

bootstrapApplication(AppComponent, applicationConfig)
  .catch((err) => console.error(err));