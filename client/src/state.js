// state.js
// Create atoms to store source of truth for application

import { atom, selector } from 'recoil';

export const customizationState = atom({
    key: 'customizationState',
    default: {
        meal_time: 'Breakfast',
        downhill: false,
        uphill: false,
        mealplan: false,
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