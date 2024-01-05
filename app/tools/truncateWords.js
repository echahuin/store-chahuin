const truncateWords = (str, num) => {
    const truncated = str && str.length > num ? str.substring(0, num) + '...' : str;
    return truncated;
}

export default truncateWords;