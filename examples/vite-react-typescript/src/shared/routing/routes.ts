import { createRoute, createRoutesMap } from "orbite/router";

/**
 * This is the main routes list bound to paths.
 * These should be used as `currentRoute` and returned from `+route.ts` files.
 */
export const routes = {
  home: createRoute(),
  users: {
    list: createRoute(),
    view: createRoute<{ userId: string }>(),
    posts: {
      list: createRoute<{ userId: string }>(),
      view: createRoute<{ userId: string; postId: string }>(),
    },
  },
  settings: createRoute(),
};

/**
 * These routes is used to activate the correct section in the sidebar/header/etc.
 * They are usually bound not to a single path.
 * Header/Navigation/Sidebar do not need to import all routes for section, just one abstract.
 */
export const sections = {
  home: createRoute(),
  users: createRoute(),
  posts: createRoute<{ userId: string }>(),
  settings: createRoute(),
};

/**
 * This is the main routes map bound to paths.
 */
export const routesMap = createRoutesMap([
  { path: "/", route: [routes.home, sections.home] },
  { path: "/users", route: [routes.users.list, sections.users] },
  { path: "/user/:userId", route: [routes.users.view, sections.users] },
  { path: "/settings", route: [routes.settings, sections.settings] },
]);
