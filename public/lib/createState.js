export const createState = (defValue) => {
    let val

    return val = {
        aInternal: defValue,
        aListener: function(val) {},
        set val(val) {
          this.aInternal = val;
          this.aListener(val);
        },
        get val() {
          return this.aInternal;
        },
        listen: function(listener) {
          this.aListener = listener;
        }
    }
}

export default createState