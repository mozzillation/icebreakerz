export const breakpoints = {
	mobile: '320px',
	tablet: '768px',
	desktop: '1440px'
}


export default {
	mobile: `(min-width: ${breakpoints.mobile})`,
	tablet: `(min-width: ${breakpoints.tablet})`,
	desktop: `(min-width: ${breakpoints.desktop})`,
	pwa: `(display-mode: standalone)`
};
