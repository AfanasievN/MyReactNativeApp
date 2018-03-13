import Crashes from 'appcenter-crashes';

jest.mock(`appcenter-crashes`, () => {
    return {
        AppCenterReactNative: jest.fn(() => 'undefined')
    }
});


