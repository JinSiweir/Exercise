let Vue;
//创建 KVueRouter 类
class KVueRouter {
  constructor(options) {
    this.$options = options;
    // 创建响应式current 路由属性  发生变化组件重新render
    Vue.util.defineReactive(this, 'current', '/');

    // 监控url变化
    window.addEventListener('hashchange', this.onHashChange.bind(this));
    window.addEventListener('load', this.onHashChange.bind(this));

    //routes 路由映射表
    this.routeMap = {};
    options.routes.forEach((route) => {
      this.routeMap[route.path] = route;
    });
  }
  onHashChange() {
    console.log(window.location.hash);
    this.current = window.location.hash.slice(1);
  }
}

//挂载到Vue上面
KVueRouter.install = function (_Vue) {
  Vue = _Vue;
  Vue.mixin({
    beforeCreate() {
      if (this.$options.router) {
        Vue.prototype.$router = this.$options.router;
      }
    },
  });

  Vue.component('router-link', {
    props: {
      to: {
        type: String,
        required: true,
      },
    },
    render(h) {
      //h(tag,data,children)
      return h('a', { attrs: { href: '#' + this.to } }, this.$slots.default);
    },
  });
  Vue.component('router-view', {
    render(h) {
      const { routeMap, current } = this.$router;
      const component = routeMap[current].component || null;
      /**
     this.$router.$options.routes.forEach((route) => {
        if (route.path === this.$router.current) {
          component = route.component;
        }
      });
     */
      return h(component);
    },
  });
};

export default KVueRouter;
