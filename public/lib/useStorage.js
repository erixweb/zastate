export const useStorage = (name) => {
    let val

    return val = {
        aInternal: localStorage[`${name}`],
        aListener: function(val) {},
        set val(val) {
          this.aInternal = localStorage.setItem(name, val);
          this.aListener(val);
        },
        get val() {
          return localStorage[`${name}`];
        },
        listen: function(listener) {
          this.aListener = listener;
        }
    }
}

export default useStorage