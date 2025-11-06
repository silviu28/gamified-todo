/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/skillsSlice`; params?: Router.UnknownInputParams; } | { pathname: `/store`; params?: Router.UnknownInputParams; } | { pathname: `/tasksSlice`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/context/UserPreferencesContext`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/skillsSlice`; params?: Router.UnknownOutputParams; } | { pathname: `/store`; params?: Router.UnknownOutputParams; } | { pathname: `/tasksSlice`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `/context/UserPreferencesContext`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/${`?${string}` | `#${string}` | ''}` | `/skillsSlice${`?${string}` | `#${string}` | ''}` | `/store${`?${string}` | `#${string}` | ''}` | `/tasksSlice${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `/context/UserPreferencesContext${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/skillsSlice`; params?: Router.UnknownInputParams; } | { pathname: `/store`; params?: Router.UnknownInputParams; } | { pathname: `/tasksSlice`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/context/UserPreferencesContext`; params?: Router.UnknownInputParams; };
    }
  }
}
