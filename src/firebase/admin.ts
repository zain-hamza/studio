import admin from 'firebase-admin';

export function initializeAdminApp() {
  if (admin.apps.length > 0) {
    return;
  }
  
  if (!process.env.GCLOUD_PROJECT) {
    throw new Error('The GCLOUD_PROJECT environment variable is not set.');
  }

  admin.initializeApp({
    projectId: process.env.GCLOUD_PROJECT,
  });
}
