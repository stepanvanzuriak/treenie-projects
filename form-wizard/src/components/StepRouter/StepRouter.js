class StepRouter {
  constructor(onBack, onNext) {
    this.onBack = onBack;
    this.onNext = onNext;
    this.routers = [];
  }

  add({ path, component, props }) {
    this.routers.push({
      path,
      component,
      props: { ...props, onBack: this.onBack, onNext: this.onNext }
    });
  }
}

export default StepRouter;
