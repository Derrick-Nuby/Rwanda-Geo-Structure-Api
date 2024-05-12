# Rwanda Geo Structure

## Overview

Rwanda Geo Structure is a JavaScript app designed to simplify the process of obtaining local Rwandan administrative divisions. This app allows developers to easily integrate a form into their web applications, enabling users to select various administrative divisions such as country, province, district, sector, cell, and village. By utilizing this library, developers can streamline the process of collecting location-based data from users in Rwanda.

## Purpose

The primary purpose of this project is to provide developers with a convenient tool for gathering location information within Rwanda. By embedding the provided form into their applications, developers can ensure consistent data collection and simplify user interaction when selecting local administrative divisions. This project aims to enhance the user experience and improve the efficiency of location-based data collection processes in Rwandan applications.

## Usage

To integrate Rwanda Geo Structure into your web application, follow these simple steps:

1. Include the provided JavaScript file in your project:

    ```html
    <script type="text/javascript" src="https://derrick-nuby.github.io/Rwanda-Geo-Structure-Api/rwandageostructure.js"></script>
    ```

2. Create a form in your HTML with the following structure:

    ```html
    <form >            
            <label for="country">Enter the country</label>
            <select name="country" id="country">
                <option value="select">Select Your Country</option>
            </select>

            <label for="province">Enter the province</label>
            <select name="province" id="province">
                <option value="select">Select Your Province</option>
            </select>

            <label for="district">Enter the district</label>
            <select name="district" id="district">
                <option value="select">Select Your District</option>
            </select>

            <label for="sector">Enter the sector</label>
            <select name="sector" id="sector">
                <option value="select">Select Your Sector</option>
            </select>

            <label for="cell">Enter the cell</label>
            <select name="cell" id="cell">
                <option value="select">Select Your Cell</option>
            </select>

            <label for="village">Enter the village</label>
            <select name="village" id="village">
                <option value="select">Select Your Village</option>
            </select>
    </form>
    ```

3. Ensure that each form field has the corresponding ID specified in the HTML (e.g., `country`, `province`, `district`, `sector`, `cell`, `village`).

4. Users can now interact with the form to select the desired administrative divisions within Rwanda.

## Contributors
Derrick Nuby
## Initial development License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
Special thanks to all contributors who helped make this project possible.