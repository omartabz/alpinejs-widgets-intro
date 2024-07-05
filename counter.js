function Counter(maxValue = 10) {
  return {
      count: 0,
      maxValue: maxValue,
      increment() {
      if (this.count < this.maxValue) {
              this.count++;
              console.log("increment function")
          }
      },
      decrement() {
         if (this.count > 0) {
              this.count--;
          }
      },
      reset() {
          this.count = 0;
      }
  };
}
