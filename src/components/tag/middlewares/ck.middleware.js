export const ckColorMiddleware = (className) => {
    switch (className) {
        case 'danger':
            return '#A41748';
        case 'primary':
            return '#0072F4';
        case 'active':
            return '#3DE084';
        case 'warning':
            return '#CA8E2B';
        default:
            return '#0072F4';
    }
}

export const ckBgMiddleware = (className) => {
    switch (className) {
        case 'danger':
            return '#300313';
        case 'primary':
            return '#10253E';
        case 'active':
            return '#042F14';
        case 'warning':
            return '#3A2503';
        default:
            return '#10253E';
    }
}