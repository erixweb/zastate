export const createState = (defValue) => {
    let val

    return val = {
        aInternal: defValue,
        aListener: function(val) {},
        set value (val) {
          this.aInternal = val;
          this.aListener(val);
        },
        get value () {
          return this.aInternal;
        },
        listen: function(listener) {
          this.aListener = listener;
        },
    }
}

export default createState