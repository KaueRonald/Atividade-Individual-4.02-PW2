export interface IModels {
    a: String[],
    b: String[],
}

export const quest1 = ({ a, b }: IModels) => {
    const arraysAreEqual = a.length === b.length && a.every((value, index) => value === b[index]);

    if (arraysAreEqual) {
        return true;
    } else {
        return false;
    }
}