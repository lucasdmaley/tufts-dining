// state.js
// Create atoms to store source of truth for application

import { atom, selector } from 'recoil';

export const appState = atom({
    key: 'appState',
    default: {
        menu: true
    }
});

export const getAppState = selector({
    key: 'getAppState',
    get: ({get}) => {
        return get(appState);
    }
})

export const keyState = atom({
    key: 'keyState',
    default: {
        key: true
    }
})

export const getKeyState = selector({
    key: 'getKeyState',
    get: ({get}) => {
        return get(keyState);
    }
})

export const customizationState = atom({
    key: 'customizationState',
    default: {
        meal_time: 'Breakfast',
        downhill: false,
        uphill: false,
        mealplan: true,
        jumbocash: false,
        favorites: false,
        rare_finds: false,
        vegetarian: false,
        vegan: false,
        gluten_free: false,
        milk_free: false,
        nut_free: false,
        allergen_free: false
    }
});

export const getCustomizationState = selector({
    key: 'getCustomizationState',
    get: ({get}) => {
        return get(customizationState);
    }
});

export const getBitpackedCustomizationState = selector({
    key: 'getBitpackedCustomizationState',
    get: ({get}) => {
        const customization = get(customizationState);
        let id = "";
        customization.downhill ? id += '1' : id += '0'; //able to make this
        customization.uphill ? id += '1' : id += '0'; //more modular?
        customization.mealplan ? id += '1' : id += '0';
        customization.jumbocash ? id += '1' : id += '0';
        customization.favorites ? id += '1' : id += '0';
        customization.rare_finds ? id += '1' : id += '0';
        customization.vegetarian ? id += '1' : id += '0';
        customization.vegan ? id += '1' : id += '0';
        customization.gluten_free ? id += '1' : id += '0';
        customization.milk_free ? id += '1' : id += '0';
        customization.nut_free ? id += '1' : id += '0';
        customization.allergen_free ? id += '1' : id += '0';
        console.log("created id: " + id);
        return id;
    }
});

export const getTimePeriod = selector({
    key: 'getTimePeriod',
    get: ({get}) => {
        return get(customizationState).meal_time;
    }
});