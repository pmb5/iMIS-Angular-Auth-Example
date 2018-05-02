import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

// enableProdMode(); //TODO this should only be enabled when we
// are ready to release, while we are testing, even on CI images, we should not call this
platformBrowserDynamic().bootstrapModule(AppModule);
  // .then(success => console.log(`Bootstrap success`))
 // .catch(error => console.log(error));
