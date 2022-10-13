export const horizontalMiddleware = (className) => {
    switch (className) {
        case 'center':
            return 'center';
        case 'left':
            return 'flex-start';
        case 'right':
            return 'flex-end';
        case 'between':
            return 'space-between';
        default:
            return 'flex-start';
    }   
}

export const verticalMiddleware = (className) => {
    switch (className) {
        case 'center':
            return 'center';
        case 'left':
            return 'flex-start';
        case 'right':
            return 'flex-end';
        case 'between':
            return 'space-between';
        default:
            return 'flex-start';
    }   
}