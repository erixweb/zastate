export const createState = (initialValue) => {
    let val

    return val = {
        aInternal: initialValue,
        aListener: function(val) {},
        set value (val) {
          this.aInternal = val
          this.aListener(val)
        },
        get value () {
          return this.aInternal
        },
        listen: function(listener) {
          this.aListener = listener
        },
    }
}

export default createState