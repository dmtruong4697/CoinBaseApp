import i18n from 'i18next'; 
import {initReactI18next} from 'react-i18next'; 
import en from './languages/en.json'; 
import vi from './languages/vi.json'; 
  
i18n.use(initReactI18next).init({ 
  lng: 'en', 
  fallbackLng: 'en', 
  resources: { 
    en: en, 
    vi: vi, 
  }, 
  interpolation: { 
    escapeValue: false // react already safes from xss 
  } 
}); 
  
export default i18n; 