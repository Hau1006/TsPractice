import { boil } from "./common/boil"

/**
 * Min gets the smallest value from a list
 *
 * Ex. max([{ num: 1 }, { num: 2 }], x => x.num) == 1
 */
const min = <T extends number | object>(
    array: readonly T[],
    getter?: (item: T) => number

) => {
    const get = getter ? getter : (v: any) => v
    console.log(get, 'get')
    return boil(array, (a, b) =>
        (get(a) < get(b) ? a : b)
    )

}
export {
    min

}