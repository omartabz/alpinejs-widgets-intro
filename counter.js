function Counter(maxValue = 50) {
  return {
      count: 0,
      maxValue: maxValue,
      increment() {
        //   if (this.count < this.maxValue) {
              this.count+=1;
              console.log("increment function")
        //   }
      },
      decrement() {
        //   if (this.count > 0) {
              this.count--;
        //   }
      },
      reset() {
          this.count = 0;
      }
  };
}
