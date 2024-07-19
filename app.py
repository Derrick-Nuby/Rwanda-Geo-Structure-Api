import csv
import json

# Load the replacement mappings from the JSON file
with open('names.json', 'r') as json_file:
    replacements = json.load(json_file)

# Read the CSV file, perform replacements, and write to a new file
with open('replacement.csv', 'r', newline='', encoding='utf-8') as input_file, \
     open('output.csv', 'w', newline='', encoding='utf-8') as output_file:
    
    reader = csv.reader(input_file)
    writer = csv.writer(output_file)
    
    for row in reader:
        new_row = []
        for cell in row:
            for old_value, new_value in replacements.items():
                cell = cell.replace(old_value, new_value)
            new_row.append(cell)
        writer.writerow(new_row)

print("Replacement complete. Output saved to 'output.csv'")