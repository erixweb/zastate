export const useEffect = (fn, st) => {
    if (st) {
        return st.listen(fn)
    }
}

export default useEffect