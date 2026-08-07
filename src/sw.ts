/// <reference lib="webworker" />
import { precacheAndRoute } from 'workbox-precaching';

// Workbox will inject the manifest array during the build step.
// The following line ensures the service worker precaches all assets.
precacheAndRoute(self.__WB_MANIFEST || []);
