/**
 * Copyright 2015 Telerik AD
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(f, define){
    define([], f);
})(function(){

(function( window, undefined ) {
    var kendo = window.kendo || (window.kendo = { cultures: {} });
    kendo.cultures["yo-NG"] = {
        name: "yo-NG",
        numberFormat: {
            pattern: ["-n"],
            decimals: 2,
            ",": ",",
            ".": ".",
            groupSize: [3],
            percent: {
                pattern: ["-n %","n %"],
                decimals: 2,
                ",": ",",
                ".": ".",
                groupSize: [3],
                symbol: "%"
            },
            currency: {
                pattern: ["-$ n","$ n"],
                decimals: 2,
                ",": ",",
                ".": ".",
                groupSize: [3],
                symbol: "₦"
            }
        },
        calendars: {
            standard: {
                days: {
                    names: ["Àìkú","Ajé","Ìṣẹ́gun","Ọjọ́\u0027rú","Ọjọ́\u0027bọ̀","Ẹtì","Àbámẹ́ta"],
                    namesAbbr: ["Àìk","Ajé","Ìṣg","Ọjr","Ọjb","Ẹti","Àbá"],
                    namesShort: ["Àì","Aj","Ìṣ","Ọj","Ọb","Ẹt","Àb"]
                },
                months: {
                    names: ["Oṣu Muharram","Oṣu Safar","Oṣu R Awwal","Oṣu R Aakhir","Oṣu J Awwal","Oṣu J Aakhira","Oṣu Rajab","Oṣu Sha\u0027baan","Oṣu Ramadhan","Oṣu Shawwal","Oṣu Dhul Qa\u0027dah","Oṣu Dhul Hijjah"],
                    namesAbbr: ["Oṣu Muharram","Oṣu Safar","Oṣu R Awwal","Oṣu R Aakhir","Oṣu J Awwal","Oṣu J Aakhira","Oṣu Rajab","Oṣu Sha\u0027baan","Oṣu Ramadhan","Oṣu Shawwal","Oṣu Dhul Qa\u0027dah","Oṣu Dhul Hijjah"]
                },
                AM: ["Òwúrọ́","òwúrọ́","ÒWÚRỌ́"],
                PM: ["Alẹ̀","alẹ̀","ALẸ̀"],
                patterns: {
                    d: "d/M/yyyy",
                    D: "dddd, dd MMMM, yyyy",
                    F: "dddd, dd MMMM, yyyy h:mm:ss tt",
                    g: "d/M/yyyy h:mm tt",
                    G: "d/M/yyyy h:mm:ss tt",
                    m: "dd MMMM",
                    M: "dd MMMM",
                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                    y: "MMMM,yyyy",
                    Y: "MMMM,yyyy"
                },
                "/": "/",
                ":": ":",
                firstDay: 0
            }
        }
    }
})(this);


return window.kendo;

}, typeof define == 'function' && define.amd ? define : function(_, f){ f(); });