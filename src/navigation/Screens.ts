enum Auth {
    LOGIN = 'Login',
}

enum Main {
    TABS = 'MainTabs',
    HOME = 'Home',
    PROFILE = 'Profile'
}

enum HOME {
    INDEX = 'Home'
}

enum PROFILE {
    INDEX = 'Profile'
}

const SCREENS = {
    AUTH: Auth,
    MAIN: Main,
    HOME: HOME,
    PROFILE: PROFILE
}

export default SCREENS