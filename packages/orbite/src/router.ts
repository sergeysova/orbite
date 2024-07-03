export type * from "atomic-router";
export * from "atomic-router";

import { UnmappedRouteObject } from "atomic-router";
export type RoutesMap = UnmappedRouteObject<any>[];

/**
 * In the future, this function will be used to validate type parameters of routes and paths in routesMap on the type-level.
 */
export function createRoutesMap(routes: [...UnmappedRouteObject<any>[]]): RoutesMap {
  return routes;
}
