import { IModels } from "../questao01"

export const quest2 = ({ a, b }: IModels) => {
    if (a.length != b.length) {
        return undefined
    } else {
        const newArray = a.map((item, index) => {
            if (item === b[index]) {
                return item
            } else {
                return undefined
            }
        })
        return newArray
    }

}