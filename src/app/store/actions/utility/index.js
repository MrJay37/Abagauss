export const pageLoading = () => ({
    type: 'PAGE_LOADING'
})

export const pageLoaded = () => ({
    type: 'LOADING_DONE'
})

export const redirect = (redirect) => ({
    type: 'REDIRECT', redirect
})