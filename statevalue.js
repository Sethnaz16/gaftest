

let getPvOutput = (state) => {
    let output = 0;
    switch(state){
        case 'NJ':
            output = 285;
            break;
        case 'CA':
            output = 300;
            break;
        case 'MD':
            output = 100;
            break;
        default:
            output = 0
    }
    return output;
}

