export const Truncate = (fullStr, strLen, separator) => {
    if (fullStr.length <= strLen) return fullStr

    separator = separator || '...'

    var frontChars = 5,
        backChars = 4

    return fullStr.substr(0, frontChars) + separator + fullStr.substr(fullStr.length - backChars)
}
