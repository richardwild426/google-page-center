'use strict';

self.window = self;
self.IS_MV3_BACKGROUND = true;

importScripts(
  '/js/polyfill.js',
  '/js/toolbox.js',
  '/js/msg.js',
  '/js/prefs.js',
  '/js/storage-util.js',
  '/js/sections-util.js',
  '/js/worker-util.js',
  '/js/cmpver.js',

  '/background/common.js',

  '/background/db.js',
  '/background/icon-manager.js',
  '/background/navigation-manager.js',
  '/background/style-search-db.js',
  '/background/style-via-api.js',
  '/background/sync-manager.js',
  '/background/tab-manager.js',
  '/background/token-manager.js',
  '/background/update-manager.js',
  '/background/usercss-install-helper.js',
  '/background/usercss-manager.js',
  '/background/usw-api.js',

  '/background/style-manager.js',
  '/background/background.js'
);
