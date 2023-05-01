export const clientDB = (kv) => {
    let fns 

    return fns = {
        insert: async (kv) => {
            /**
             * @param {Object} kv 
            */
            if (typeof kv !== "object") {
                console.log("%cError on ZastateAPI\n--> Line: 5\n--> File: `clientDB` API\n--> Typeof kv isn't object", 'color: red')
                return "❌ Error on ClientDB.js line 6."
            }
            for (let i = 0; i < Object.keys(kv).length; i++) {
                await localStorage.setItem(Object.keys(kv)[i], Object.values(kv)[i])
            }
        },
        delete: async (k) => {
            await localStorage.removeItem(k)
        },
        clear: async () => {
            await localStorage.clear()
        }
    }
} 