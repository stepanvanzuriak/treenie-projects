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
      props: { ...props }
    });
  }

  setCurrent(current) {
    this.current = current;
  }

  setPastSteps(pastSteps) {
    this.pastSteps = pastSteps;
  }

  setLast(last) {
    this.last = last;
  }

  setFirst(first) {
    this.first = first;
    this.setCurrent(first);
  }

  setRouters(routers, defaultComponent) {
    routers.forEach(({ path, component, ...props }) => {
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
