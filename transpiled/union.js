// const handleResponse = (res: PossibleReponse) => {
//     return res.data
// }
const handleResponse = (res) => {
    if (res.status === '200')
        return res.data;
    return null;
};
