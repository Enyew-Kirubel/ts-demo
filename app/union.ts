interface Opt {
    something: string
}

type Something = 'Auto'

// const fucn = (arg: Opt | Something) => {
//     arg.something
// }

// union workaround example

type SuccessResponse = {
    data: any;
    status: '200'
}

type ErrorResponse = {
    status: '400'
}

type PossibleReponse = ErrorResponse | SuccessResponse


// const handleResponse = (res: PossibleReponse) => {
//     return res.data
// }

const handleResponse = (res: PossibleReponse) => {
    if(res.status === '200')
    return res.data
    return null
}
