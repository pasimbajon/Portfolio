//Switch function
const switchTheme= () => {
    //Get the root element and data-theme value
    const rootElement = document.documentElement

    let dataTheme = rootElement.getAttribute('data-theme'),
        newTheme;

    newTheme = (dataTheme === 'light') ? 'dark' : 'light';

    //Set the new HTML attribute
    rootElement.setAttribute('data-theme', newTheme);

    //Set the new local storage item
    localStorage.setItem('theme', newTheme);
};
//Add event listener fot the theme switcher
document.querySelector('#header__theme-switcher').addEventListener('click', switchTheme);
document.querySelector('#mobile__theme-switcher').addEventListener('click', switchTheme);

export default switchTheme;