export const DivideArrays = (array,size) => {
    return array.reduce((result, _, index) => {
        if (index % size === 0) result.push(array.slice(index, index + size));
        return result;
      }, []);
}