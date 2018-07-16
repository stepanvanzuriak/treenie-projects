export class StepRouter {
  constructor() {
    this.routers = [];
    this.last = '';
    this.first = '';
    this.current = '';
    this.pastSteps = [];
  }

  add({ path, component, props }) {
    this.routers.push({
      path,
      component,
      props
    });
  }

  setCurrent(current) {
    this.current = current;
  }

  setPastSteps(pastSteps) {
    this.pastSteps = pastSteps;
  }

  setLast(route) {
    this.last = route;
  }

  setFirst(route) {
    this.first = route;
    this.setCurrent(route);
  }

  setRouters(routers, defaultComponent) {
    this.setFirst(routers[0].path);
    this.setLast(routers[routers.length - 1].path);

    routers
      .map((props, index) => ({
        ...props,
        back: index - 1 > -1 ? routers[index - 1].path : null,
        next: index + 1 < routers.length ? routers[index + 1].path : null
      }))
      .forEach(({ path, component, ...props }) => {
        this.add({
          path,
          component: component
            ? component
            : rest => defaultComponent({ ...props, ...rest })
        });
      });
  }

  isCurrent(router) {
    return this.current === router;
  }

  isLast(route) {
    return this.last === route;
  }
}
