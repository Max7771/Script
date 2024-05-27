// ==UserScript==
// @name         OMRR
// @namespace    Test IO – Education Team – Onboarding
// @author       Charlie
// @version      2.0
// @description  Implementing the expanded text abbreviations into buttons functionality to the official specific rejection reasons for Test IO Onboarding tickets into their complete forms and banners to highlight relevant tickets based on the tester’s location (yellow and red).
// @icon         https://test.io/content/dam/test-io/test_io_logo1.svg
// @match        https://onboardingmanager.test.io/managers/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to inject the script into the page
    function injectScript(scriptText) {
        const scriptElement = document.createElement('script');
        scriptElement.textContent = scriptText;
        document.head.appendChild(scriptElement);
    }

    // Retrieve the script from GitHub raw file
    fetch('https://raw.githubusercontent.com/CharlieMrFox/TestIO_CE_OManagersRRs/main/v052024.3')
        .then(response => response.text())
        .then(script => {
            injectScript(script);
        });

})();
