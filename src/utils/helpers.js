export const chunkArray = (inputArray, chunkSize) => {
    return inputArray.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / chunkSize)

        if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = [] // start a new chunk
        }

        resultArray[chunkIndex].push(item)

        return resultArray
    }, [])
}

export const getRandomIndexes = (length, size) => {
    const indexes = [];
    const created = {};

    while (indexes.length < size) {
        const random = Math.floor(Math.random() * length);
        if (!created[random]) {
            indexes.push(random);
            created[random] = true;
        }
    }
    return indexes;
};

export const generateFiltersQueryString = (operator, curValue, newParam) => {
    let uglyStr = curValue;
    let opLen = operator.length + 2;

    if (uglyStr.includes(newParam)) {
        uglyStr = uglyStr.replace(newParam, '');
    } else {
        uglyStr = uglyStr + ' ' + operator + ' ' + newParam;
    }
    // Redundant operators
    if (uglyStr.lastIndexOf(' ' + operator + ' ', 0) === 0) {
        uglyStr = uglyStr.slice(opLen);
    }
    if (uglyStr.substring(uglyStr.length - opLen) === ' ' + operator + ' ') {
        uglyStr = uglyStr.slice(0, -opLen);
    }

    return uglyStr.replaceAll(' ' + operator + '  ' + operator + ' ', ' ' + operator + ' ');
};
  