import admin from 'firebase-admin';

export function initializeAdminApp() {
  if (admin.apps.length > 0) {
    return;
  }
  
  const projectId = process.env.GCLOUD_PROJECT || 'cs-compass';

  if (!projectId) {
    throw new Error('The GCLOUD_PROJECT environment variable is not set.');
  }

  admin.initializeApp({
    projectId: projectId,
  });
}
