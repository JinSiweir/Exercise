//   数据响应式
function defineReactive(obj, key, val) {
  //   递归进行对象中对象属性响应式
  observe(val);
  //设置响应式
  Object.defineProperty(obj, key, {
    get() {
      console.log(`get`, key);
      return val;
    },
    set(newVal) {
      if (newVal != val) {
        console.log(`set`, key);
        observe(newVal);
        val = newVal;
      }
    },
  });
}
function observe(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return;
  }
  new Observer(obj);
}

class Observer {
  constructor(value) {
    this.value = value;
    if (Array.isArray(value)) {
      // todo 数组响应式
    } else {
      this.walk(value);
    }
  }
  // 响应式
  walk(obj) {
    Object.keys(obj).forEach((key) => defineReactive(obj, key, obj[key]));
  }
}

function proxy(vm) {
  Object.keys(vm.$data).forEach((key) => {
    Object.defineProperty(vm, key, {
      get() {
        return vm.$data[key];
      },
      set(v) {
        vm.$data[key] = v;
      },
    });
  });
}

class Kvue {
  constructor(options) {
    this.options = options;
    this.$data = options.data;

    // 响应式
    observe(this.$data);

    // 代理
    proxy(this);
  }
}
