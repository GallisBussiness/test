export default function is_false(param) {
    if (param === null) return true;
    if (typeof param === 'object') {
        return (Array.isArray(param) && param.length === 0) || Object.keys(param).length === 0;
    } else {
        return param === undefined || param == false;
    }
}
