import json
import pandas as pd
from datetime import datetime

# Read JSON data from the file
with open('rwanda.json', 'r') as f:
    data = json.load(f)

# Function to recursively parse the JSON and collect data
def parse_json(data, parent_name="Rwanda", level=1):
    rows = []
    opening_date = "01-01-00"

    for key, value in data.items():
        # Determine the level name
        if level == 1:
            level_name = "Country"
        elif level == 2:
            level_name = "Province"
        elif level == 3:
            level_name = "District"
        elif level == 4:
            level_name = "Sector"
        elif level == 5:
            level_name = "Cell"
        elif level == 6:
            level_name = "Village"
        else:
            level_name = f"Level {level}"

        name = f"{key} {level_name}"
        uid = code = name
        short_name = key
        row = {
            "name": name,
            "uid": uid,
            "code": code,
            "parent": parent_name,
            "shortName": short_name,
            "level": level,
            "openingDate": opening_date
        }
        rows.append(row)
        
        # Recursive call for next level
        if isinstance(value, dict):
            rows.extend(parse_json(value, name, level+1))
        elif isinstance(value, list):
            for item in value:
                item_name = f"{item} Village"
                item_uid = item_code = item_name
                item_short_name = item
                item_row = {
                    "name": item_name,
                    "uid": item_uid,
                    "code": item_code,
                    "parent": name,
                    "shortName": item_short_name,
                    "level": level+1,
                    "openingDate": opening_date
                }
                rows.append(item_row)

    return rows

# Parse the JSON data
parsed_data = parse_json({"rwandaCountry": data["rwandaCountry"]})

# Create a DataFrame and save it to a CSV file
df = pd.DataFrame(parsed_data)

df.to_csv('rwanda_administrative_divisions.csv', index=False)

print("CSV files created successfully.")