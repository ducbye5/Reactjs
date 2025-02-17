/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './pages/__root'
import { Route as LoginImport } from './pages/login'
import { Route as HomeImport } from './pages/home'
import { Route as UserIndexImport } from './pages/user/index'
import { Route as UserUserIdIndexImport } from './pages/user/$userId/index'
import { Route as UserUserIdUpdateImport } from './pages/user/$userId.update'
import { Route as UserUserIdEditImport } from './pages/user/$userId/edit'
import { Route as UserUserIdDeleteImport } from './pages/user/$userId/delete'

// Create/Update Routes

const LoginRoute = LoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const HomeRoute = HomeImport.update({
  id: '/home',
  path: '/home',
  getParentRoute: () => rootRoute,
} as any)

const UserIndexRoute = UserIndexImport.update({
  id: '/user/',
  path: '/user/',
  getParentRoute: () => rootRoute,
} as any)

const UserUserIdIndexRoute = UserUserIdIndexImport.update({
  id: '/user/$userId/',
  path: '/user/$userId/',
  getParentRoute: () => rootRoute,
} as any)

const UserUserIdUpdateRoute = UserUserIdUpdateImport.update({
  id: '/user/$userId/update',
  path: '/user/$userId/update',
  getParentRoute: () => rootRoute,
} as any)

const UserUserIdEditRoute = UserUserIdEditImport.update({
  id: '/user/$userId/edit',
  path: '/user/$userId/edit',
  getParentRoute: () => rootRoute,
} as any)

const UserUserIdDeleteRoute = UserUserIdDeleteImport.update({
  id: '/user/$userId/delete',
  path: '/user/$userId/delete',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/home': {
      id: '/home'
      path: '/home'
      fullPath: '/home'
      preLoaderRoute: typeof HomeImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/user/': {
      id: '/user/'
      path: '/user'
      fullPath: '/user'
      preLoaderRoute: typeof UserIndexImport
      parentRoute: typeof rootRoute
    }
    '/user/$userId/delete': {
      id: '/user/$userId/delete'
      path: '/user/$userId/delete'
      fullPath: '/user/$userId/delete'
      preLoaderRoute: typeof UserUserIdDeleteImport
      parentRoute: typeof rootRoute
    }
    '/user/$userId/edit': {
      id: '/user/$userId/edit'
      path: '/user/$userId/edit'
      fullPath: '/user/$userId/edit'
      preLoaderRoute: typeof UserUserIdEditImport
      parentRoute: typeof rootRoute
    }
    '/user/$userId/update': {
      id: '/user/$userId/update'
      path: '/user/$userId/update'
      fullPath: '/user/$userId/update'
      preLoaderRoute: typeof UserUserIdUpdateImport
      parentRoute: typeof rootRoute
    }
    '/user/$userId/': {
      id: '/user/$userId/'
      path: '/user/$userId'
      fullPath: '/user/$userId'
      preLoaderRoute: typeof UserUserIdIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/home': typeof HomeRoute
  '/login': typeof LoginRoute
  '/user': typeof UserIndexRoute
  '/user/$userId/delete': typeof UserUserIdDeleteRoute
  '/user/$userId/edit': typeof UserUserIdEditRoute
  '/user/$userId/update': typeof UserUserIdUpdateRoute
  '/user/$userId': typeof UserUserIdIndexRoute
}

export interface FileRoutesByTo {
  '/home': typeof HomeRoute
  '/login': typeof LoginRoute
  '/user': typeof UserIndexRoute
  '/user/$userId/delete': typeof UserUserIdDeleteRoute
  '/user/$userId/edit': typeof UserUserIdEditRoute
  '/user/$userId/update': typeof UserUserIdUpdateRoute
  '/user/$userId': typeof UserUserIdIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/home': typeof HomeRoute
  '/login': typeof LoginRoute
  '/user/': typeof UserIndexRoute
  '/user/$userId/delete': typeof UserUserIdDeleteRoute
  '/user/$userId/edit': typeof UserUserIdEditRoute
  '/user/$userId/update': typeof UserUserIdUpdateRoute
  '/user/$userId/': typeof UserUserIdIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/home'
    | '/login'
    | '/user'
    | '/user/$userId/delete'
    | '/user/$userId/edit'
    | '/user/$userId/update'
    | '/user/$userId'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/home'
    | '/login'
    | '/user'
    | '/user/$userId/delete'
    | '/user/$userId/edit'
    | '/user/$userId/update'
    | '/user/$userId'
  id:
    | '__root__'
    | '/home'
    | '/login'
    | '/user/'
    | '/user/$userId/delete'
    | '/user/$userId/edit'
    | '/user/$userId/update'
    | '/user/$userId/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  HomeRoute: typeof HomeRoute
  LoginRoute: typeof LoginRoute
  UserIndexRoute: typeof UserIndexRoute
  UserUserIdDeleteRoute: typeof UserUserIdDeleteRoute
  UserUserIdEditRoute: typeof UserUserIdEditRoute
  UserUserIdUpdateRoute: typeof UserUserIdUpdateRoute
  UserUserIdIndexRoute: typeof UserUserIdIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  HomeRoute: HomeRoute,
  LoginRoute: LoginRoute,
  UserIndexRoute: UserIndexRoute,
  UserUserIdDeleteRoute: UserUserIdDeleteRoute,
  UserUserIdEditRoute: UserUserIdEditRoute,
  UserUserIdUpdateRoute: UserUserIdUpdateRoute,
  UserUserIdIndexRoute: UserUserIdIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/home",
        "/login",
        "/user/",
        "/user/$userId/delete",
        "/user/$userId/edit",
        "/user/$userId/update",
        "/user/$userId/"
      ]
    },
    "/home": {
      "filePath": "home.tsx"
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/user/": {
      "filePath": "user/index.tsx"
    },
    "/user/$userId/delete": {
      "filePath": "user/$userId/delete.tsx"
    },
    "/user/$userId/edit": {
      "filePath": "user/$userId/edit.tsx"
    },
    "/user/$userId/update": {
      "filePath": "user/$userId.update.tsx"
    },
    "/user/$userId/": {
      "filePath": "user/$userId/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
