/**
 * 判断是不是非数组对象
 */
function isObj(obj) {
  return (
    typeof obj === 'object' &&
    !Array.isArray(obj) &&
    obj !== null &&
    obj !== undefined
  );
}
/**
 * 响应式
 */
function observe(obj) {
  if (!isObj(obj)) {
    return new TypeError();
  }

  Object.keys(obj).forEach((key) => {
    let internalValue = obj[key];
    let dep = new Dep();
    Object.defineProperty(obj, key, {
      get() {
        dep.depend();
        return internalValue;
      },
      set(newValue) {
        const isChanged = internalValue !== newValue;
        if (isChanged) {
          internalValue = newValue;
          dep.notify();
        }
      },
    });
  });
}

// Dep 观察者
window.Dep = class Dep {
  constructor() {
    this.subscribers = new Set();
  }
  //   依赖收集
  depend() {
    if (activeUpdate) {
      this.subscribers.add(activeUpdate);
    }
  }
  //使用依赖
  notify() {
    this.subscribers.forEach((subscriber) => subscriber());
  }
};
let activeUpdate;
//**通过闭包使得执行中可以访问wrappedUpdate
function autorun(update) {
  function wrappedUpdate() {
    activeUpdate = wrappedUpdate;
    update();
    activeUpdate = null;
  }
  wrappedUpdate();
}

const state = {
  count: 0,
};

observe(state);

// 包含渲染函数
autorun(() => {
  console.log(state.count);
});
// should immediately log "count is: 0"

state.count++;
// should log "count is: 1"
