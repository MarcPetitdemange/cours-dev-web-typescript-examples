interface LikeArray {
    length: number
}

function size<T extends LikeArray>(arr: T):
    number {
    return arr.length
}