const IS_DEV = process.env.APP_VARIANT === 'development';
const IS_PREVIEW = process.env.APP_VARIANT === 'preview';

const getAppName = () => {
    if (IS_DEV) return 'ExpoProject (Dev)';
    if (IS_PREVIEW) return 'ExpoProject (Preview)';
    return 'ExpoProject: Emoji Stickers';
};

const getBundleIdentifier = () => {
    if (IS_DEV) return 'com.anastasiiaalex.expoproject.dev';
    if (IS_PREVIEW) return 'com.anastasiiaalex.expoproject.preview';
    return 'com.anastasiiaalex.expoproject';
};

const getAndroidPackage = () => {
    if (IS_DEV) return 'com.anastasiiaalex.expoprojectdev';
    if (IS_PREVIEW) return 'com.anastasiiaalex.expoprojectpreview';
    return 'com.anastasiiaalex.expoproject';
};

export default ({ config }) => ({
    ...config,
    name: getAppName(),
    ios: {
        ...config.ios,
        bundleIdentifier: getBundleIdentifier(),
    },
    android: {
        ...config.android,
        package: getAndroidPackage(),
    },
});
