// stamper.js
//
// Make and invert standard timestamps
//
// Copyright 2012, E14N https://e14n.com/
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

"use strict";

var dateFormat = require("dateformat");

var Stamper = {
    stamp: function(date) {
        if (!date) {
            date = new Date();
        }
        return dateFormat(date, "isoUtcDateTime", true);
    },
    unstamp: function(ts) {
        return new Date(ts);
    }
};

exports.Stamper = Stamper;
