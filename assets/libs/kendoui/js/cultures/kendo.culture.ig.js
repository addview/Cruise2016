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
    kendo.cultures["ig"] = {
        name: "ig",
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
                pattern: ["$-n","$ n"],
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
                    names: ["Sọnde","Mọnde","Tuzde","Wednesde","Tọsde","Fraịde","Satọde"],
                    namesAbbr: ["Sọn","Mọn","Tuz","Ojo","Tọs","Fra","Sat"],
                    namesShort: ["Sọ","Mọ","Tu","We","Tọs","Fra","Sa"]
                },
                months: {
                    names: ["Jenụwarị","Febụwarị","Machị","Eprelu","Mey","Juun","Julaị","Ọgọst","Septemba","Ọcktọba","Nọvemba","Disemba"],
                    namesAbbr: ["Jen","Feb","Mac","Epr","Mey","Jun","Jul","Ọgọ","Sep","Ọkt","Nọv","Dis"]
                },
                AM: ["Ụtụtụ","ụtụtụ","ỤTỤTỤ"],
                PM: ["Ehihie","ehihie","EHIHIE"],
                patterns: {
                    d: "d/M/yyyy",
                    D: "dddd, MMMM dd, yyyy",
                    F: "dddd, MMMM dd, yyyy h.mm.ss tt",
                    g: "d/M/yyyy h.mm tt",
                    G: "d/M/yyyy h.mm.ss tt",
                    m: "d MMMM",
                    M: "d MMMM",
                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                    t: "h.mm tt",
                    T: "h.mm.ss tt",
                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                    y: "MMMM, yyyy",
                    Y: "MMMM, yyyy"
                },
                "/": "/",
                ":": ".",
                firstDay: 0
            }
        }
    }
})(this);


return window.kendo;

}, typeof define == 'function' && define.amd ? define : function(_, f){ f(); });