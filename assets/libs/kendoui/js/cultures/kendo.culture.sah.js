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
    kendo.cultures["sah"] = {
        name: "sah",
        numberFormat: {
            pattern: ["-n"],
            decimals: 2,
            ",": " ",
            ".": ",",
            groupSize: [3,0],
            percent: {
                pattern: ["-n%","n%"],
                decimals: 2,
                ",": " ",
                ".": ",",
                groupSize: [3,0],
                symbol: "%"
            },
            currency: {
                pattern: ["-n$","n$"],
                decimals: 2,
                ",": " ",
                ".": ",",
                groupSize: [3],
                symbol: "₽"
            }
        },
        calendars: {
            standard: {
                days: {
                    names: ["Өрөбүл","энидиэнньик","Оптуорунньук","Сэрэдээ","Чэппиэр","Бээтинсэ","Субуота"],
                    namesAbbr: ["Өр","Бн","Оп","Ср","Чп","Бт","Сб"],
                    namesShort: ["Өр","Бн","Оп","Ср","Чп","Бт","Сб"]
                },
                months: {
                    names: ["Тохсунньу","Олунньу","Кулун тутар","Муус устар","Ыам ыйа","Бэс ыйа","От ыйа","Атырдьах ыйа","Балаҕан ыйа","Алтынньы","Сэтинньи","Ахсынньы"],
                    namesAbbr: ["Тхс","Олн","Клн","Мсу","Ыам","Бэс","Оты","Атр","Блҕ","Алт","Сэт","Ахс"]
                },
                AM: ["КИ","ки","КИ"],
                PM: ["КК","кк","КК"],
                patterns: {
                    d: "dd.MM.yyyy",
                    D: "dddd, yyyy 'с.' MMMM d 'күнэ'",
                    F: "dddd, yyyy 'с.' MMMM d 'күнэ' H:mm:ss",
                    g: "dd.MM.yyyy H:mm",
                    G: "dd.MM.yyyy H:mm:ss",
                    m: "MMMM d 'күнэ'",
                    M: "MMMM d 'күнэ'",
                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                    t: "H:mm",
                    T: "H:mm:ss",
                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                    y: "yyyy 'с.' MMMM",
                    Y: "yyyy 'с.' MMMM"
                },
                "/": ".",
                ":": ":",
                firstDay: 1
            }
        }
    }
})(this);


return window.kendo;

}, typeof define == 'function' && define.amd ? define : function(_, f){ f(); });