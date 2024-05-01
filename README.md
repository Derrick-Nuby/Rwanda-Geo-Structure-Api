# Rwanda Geographic Hierarchy Selector

This project provides a hierarchical form for selecting geographic locations within Rwanda. Users can select a country, province, district, sector, cell, and village using dropdown menus.

## Features

- **Hierarchical Dropdowns**: Users can navigate through the geographic hierarchy by selecting options from dependent dropdown menus.
- **Dynamic Population**: Dropdown options are dynamically populated based on the user's selection in the preceding dropdown.
- **Data Structure**: The geographic hierarchy is structured within a JavaScript object (`data`) to facilitate dynamic population of dropdowns.
- **Validation**: Dropdowns are disabled if there are no options available for the selected parent, ensuring a valid selection at each level.
- **Reset Functionality**: Users can reset the form to its initial state, clearing all selections made so far.

## Usage

1. **Select Country**: Begin by selecting "Rwanda" from the country dropdown.
2. **Navigate Hierarchically**: Proceed to select a province, district, sector, cell, and village sequentially using the dropdown menus.
3. **Reset Form**: To start over, use the reset button to clear all selections and return to the initial state.

## Installation

To use this project locally:

1. Clone the repository:

    ```bash
    git clone https://github.com/Derrick-Nuby/Rwanda-Geo-Structure.git
    ```

2. Open `index.html` in your web browser.

## Data Structure

The geographic hierarchy is represented within the `data` object in `script.js`. Ensure that the structure of this object matches the hierarchical structure of the dropdowns.

```javascript
const data = {
    "Rwanda": {
        "Province 1": {
            "District 1": {
                "Sector 1": {
                    "Cell 1": ["Village 1", "Village 2"],
                    "Cell 2": ["Village 3", "Village 4"]
                },
                // Add more sectors and cells as needed
            },
            // Add more districts, sectors, cells, and villages as needed
        },
        // Add more provinces, districts, sectors, cells, and villages as needed
    },
    // Add data for other countries if applicable
};

## Contributing
Contributions are welcome! If you have any suggestions, enhancements, or bug fixes, feel free to open an issue or create a pull request.

## License
This project is licensed under the MIT License.

## Also
Feel free to use this updated version in your repository's README.md file. Let me know if you need further assistance!