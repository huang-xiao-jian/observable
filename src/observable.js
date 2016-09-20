/**
 * @description - echarts config operation chain
 * @author - bornkiller <hjj491229492@hotmail.com>
 */
export class Observable {
  constructor() {
    this.observers = [];
  }
  
  next(info) {
    this.observers.forEach((item) => {
      item.observer.call(this, info);
    });
  }
  
  subscribe(observer) {
    let identity = Symbol('BORNKILLER_OBSERVABLE');
    
    this.observers.push({identity, observer});
    
    return {
      unsubscribe: () => {
        this.observers = this.observers.filter((item) => {
          return item.identity !== identity;
        });
      }
    };
  }
}