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
    kendo.cultures["kk-KZ"] = {
        name: "kk-KZ",
        numberFormat: {
            pattern: ["-n"],
            decimals: 2,
            ",": " ",
            ".": ",",
            groupSize: [3],
            percent: {
                pattern: ["-n%","n%"],
                decimals: 2,
                ",": " ",
                ".": ",",
                groupSize: [3],
                symbol: "%"
            },
            currency: {
                pattern: ["-$n","$n"],
                decimals: 2,
                ",": " ",
                ".": "-",
                groupSize: [3],
                symbol: "₸"
            }
        },
        calendars: {
            standard: {
                days: {
                    names: ["Жексенбі","Дүйсенбі","Сейсенбі","Сәрсенбі","Бейсенбі","Жұма","Сенбі"],
                    namesAbbr: ["Жек","Дүй","Сей","Сәр","Бей","Жұм","Сен"],
                    namesShort: ["Жк","Дс","Сс","Ср","Бс","Жм","Сн"]
                },
                months: {
                    names: ["қаңтар","ақпан","наурыз","сәуір","мамыр","маусым","шілде","тамыз","қыркүйек","қазан","қараша","желтоқсан"],
                    namesAbbr: ["қаң","ақп","нау","сәу","мам","мау","шіл","там","қыр","қаз","қар","жел"]
                },
                AM: [""],
                PM: [""],
                patterns: {
                    d: "d-MMM-yy",
                    D: "d MMMM yyyy 'ж.'",
                    F: "d MMMM yyyy 'ж.' HH:mm:ss",
                    g: "d-MMM-yy HH:mm",
                    G: "d-MMM-yy HH:mm:ss",
                    m: "d MMMM",
                    M: "d MMMM",
                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                    t: "HH:mm",
                    T: "HH:mm:ss",
                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                    y: "MMMM yyyy",
                    Y: "MMMM yyyy"
                },
                "/": "-",
                ":": ":",
                firstDay: 1
            }
        }
    }
})(this);


return window.kendo;

}, typeof define == 'function' && define.amd ? define : function(_, f){ f(); });