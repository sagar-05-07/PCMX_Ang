import { Injectable } from '@angular/core';
import { Settings } from './app.settings.model';

@Injectable()
export class AppSettings {
    public settings = new Settings(
        'PCMX',       //theme name
        true,           //loadingSpinner
        true,           //fixedHeader
        true,           //sidenavIsOpened
        true,           //sidenavIsPinned  
        true,           //sidenavUserBlock 
        'vertical',     //horizontal , vertical
        'default',      //default, compact, mini
        'grey-light', //indigo-light, grey-light
        false,          // true = rtl, false = ltr
        false            // true = has footer, false = no footer
    )
}

