export const useLoaded = () => useState('loaded', () => false)
export const useTransition = () => useState('transition', () => 'load')
export const menuOpened = () => useState('opened', () => false)