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
    kendo.cultures["zgh-Tfng-MA"] = {
        name: "zgh-Tfng-MA",
        numberFormat: {
            pattern: ["-n"],
            decimals: 2,
            ",": " ",
            ".": ",",
            groupSize: [3],
            percent: {
                pattern: ["-n %","n %"],
                decimals: 2,
                ",": " ",
                ".": ",",
                groupSize: [3],
                symbol: "%"
            },
            currency: {
                pattern: ["-n $","n $"],
                decimals: 2,
                ",": " ",
                ".": ",",
                groupSize: [3],
                symbol: "ⴷⵔⵎ"
            }
        },
        calendars: {
            standard: {
                days: {
                    names: ["ⴰⵙⴰⵎⴰⵙ","ⴰⵢⵏⴰⵙ","ⴰⵙⵉⵏⴰⵙ","ⴰⴽⵕⴰⵙ","ⴰⴽⵡⴰⵙ","ⴰⵙⵉⵎⵡⴰⵙ","ⴰⵙⵉⴹⵢⴰⵙ"],
                    namesAbbr: ["ⵙⵎⵙ","ⵢⵏⵙ","ⵙⵏⵙ","ⴽⵕⵙ","ⴽⵡⵙ","ⵙⵎⵡ","ⵙⴹⵙ"],
                    namesShort: ["ⵙⵎ","ⵢⵏ","ⵙⵏ","ⴽⵕ","ⴽⵡ","ⵙⵡ","ⵚⴹ"]
                },
                months: {
                    names: ["ⵉⵏⵏⴰⵢⵔ","ⴱⵕⴰⵢⵕ","ⵎⴰⵕⵚ","ⵉⴱⵔⵉⵔ","ⵎⴰⵢⵢⵓ","ⵢⵓⵏⵢⵓ","ⵢⵓⵍⵢⵓⵣ","ⵖⵓⵛⵜ","ⵛⵓⵜⴰⵏⴱⵉⵔ","ⴽⵜⵓⴱⵕ","ⵏⵓⵡⴰⵏⴱⵉⵔ","ⴷⵓⵊⴰⵏⴱⵉⵔ"],
                    namesAbbr: ["ⵏⵢⵔ","ⴱⵕⵢ","ⵎⵕⵚ","ⴱⵔⵔ","ⵎⵢⵢ","ⵢⵏⵢ","ⵢⵍⵢ","ⵖⵛⵜ","ⵛⵜⵏ","ⴽⵜⴱ","ⵏⵡⴱ","ⴷⵊⵏ"]
                },
                AM: [""],
                PM: [""],
                patterns: {
                    d: "dd-MM-yyyy",
                    D: "dddd, dd MMMM, yyyy",
                    F: "dddd, dd MMMM, yyyy HH.mm.ss",
                    g: "dd-MM-yyyy HH.mm",
                    G: "dd-MM-yyyy HH.mm.ss",
                    m: "dd MMMM",
                    M: "dd MMMM",
                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                    t: "HH.mm",
                    T: "HH.mm.ss",
                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                    y: "MMMM, yyyy",
                    Y: "MMMM, yyyy"
                },
                "/": "-",
                ":": ".",
                firstDay: 1
            }
        }
    }
})(this);


return window.kendo;

}, typeof define == 'function' && define.amd ? define : function(_, f){ f(); });