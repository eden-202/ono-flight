import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"onoflight-fb99a","appId":"1:306963294931:web:807220a6d32ed8ee3b8226","databaseURL":"https://onoflight-fb99a-default-rtdb.europe-west1.firebasedatabase.app","storageBucket":"onoflight-fb99a.firebasestorage.app","apiKey":"AIzaSyBVxX4RJQmq7Fv3oeL1Lw1T8LDcBrELrpM","authDomain":"onoflight-fb99a.firebaseapp.com","messagingSenderId":"306963294931"})), provideDatabase(() => getDatabase())]
};
