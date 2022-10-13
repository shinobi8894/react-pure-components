export const ckBgMiddleware = (bg) => {
    switch (bg) {
        case 'primary':
            return '#0072F4';
        case 'active':
            return '#17C964';
        case 'warning':
            return '#F5A524';
        case 'danger':
            return '#F31260';
        default:
            return '#9750DD';
    }
}