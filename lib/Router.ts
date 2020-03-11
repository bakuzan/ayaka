import generateUniqueId from './generateUniqueId';

export interface RouterOptions {
  baseUrl?: string;
  baseTitle?: string;
}

export interface Route {
  name: string;
  title?: string;
  url: string;
  render: (key: string) => any;
}

export interface RouteUpdate {
  key: string;
  fromRoute?: Route;
  toRoute: Route;
}

class Router {
  private appRoutes: Route[] = [];
  private baseUrl = '/';
  private baseTitle = '';
  private listeners: ((update: RouteUpdate) => void)[] = [];

  constructor(routes: Route[], opts: RouterOptions = {}) {
    this.appRoutes = routes;
    this.baseUrl = opts.baseUrl || '/';
    this.baseTitle = opts.baseTitle || '';

    this.listenToPopState();
  }

  get base() {
    return this.baseUrl;
  }

  get currentRoute() {
    const path = this.guardPath(
      `/${window.location.pathname.replace(this.baseUrl, '')}`
    );

    return this.appRoutes.find((x) => x.url === path);
  }

  public subscribe(fn: (update: RouteUpdate) => void) {
    this.listeners.push(fn);
    return () => {
      const index = this.listeners.indexOf(fn);
      this.listeners.splice(index, 1);
    };
  }

  public push(location: string) {
    const fromRoute = this.currentRoute;
    const routeUrl = this.guardPath(location.replace(this.baseUrl, ''));
    const toRoute = this.appRoutes.find((x) => x.url === routeUrl);

    if (!toRoute) {
      // TODO
      // Handle unknown route ??
      console.error('Unknown route', routeUrl);
      return;
    }

    const usableLocation = location.startsWith(this.baseUrl)
      ? location
      : `${this.baseUrl}${location}`;

    const targetUrl = `${window.location.origin}${usableLocation}`;

    window.history.pushState(null, '', targetUrl);
    this.setPageTitle(toRoute.title);
    this.publishChange(toRoute, fromRoute);
  }

  public guardPath(path: string, stripQuery = true) {
    if (!path) {
      return this.baseUrl;
    }

    let p = stripQuery ? path.split('?')[0] : path;
    p = p.replace(/\/\//g, '/');
    p = p.startsWith('/') ? p : `/${p}`;
    p = p.endsWith('/') ? p.slice(0, -1) : p;
    return p || this.baseUrl;
  }

  public setPageTitle(title?: string) {
    if (!title && !this.baseTitle) {
      return;
    }

    let newTitle: string;
    if (title && this.baseTitle) {
      newTitle = `${title} | ${this.baseTitle}`;
    } else if (!title) {
      newTitle = this.baseTitle;
    } else {
      newTitle = title;
    }

    document.title = newTitle;
  }

  private listenToPopState() {
    window.onpopstate = () => {
      const path = this.guardPath(
        `/${window.location.pathname.replace(this.baseUrl, '')}`
      );

      const toRoute = this.appRoutes.find((x) => x.url === path);
      if (!toRoute) {
        // TODO
        // Handle unknown route ??
        console.error('Unknown route', path);
        return;
      }

      this.setPageTitle(toRoute.title);
      this.publishChange(toRoute);
    };
  }

  private publishChange(toRoute: Route, fromRoute?: Route) {
    const key = generateUniqueId();
    const payload = { key, fromRoute, toRoute };

    this.listeners.forEach((fn) => fn(payload));
  }
}

export default Router;
