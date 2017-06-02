// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

document.addEventListener('DOMContentLoaded', function() {

      document.getElementById("makeitso").onclick = function (e) {
        chrome.management.getSelf((res) => {console.log(res)});
        chrome.permissions.request({ permissions: ['management'] }, (granted) => {
          console.log('request granted:', granted);
          console.log('chrome.management.getAll', chrome.management.getAll);
          });
        };
    });

