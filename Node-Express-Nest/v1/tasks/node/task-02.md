---
topic: "NODE JS"
taskNumber: 2
---

# Task 02: File Stream Transformer

Read a `.csv` file, apply transformations (e.g., capitalize names), and write the result to a new file using Node.js streams: `fs.createReadStream`, `Transform`, and `createWriteStream`.

## Requirements

### Core Functionality

1. **Read CSV File**

   - Use `fs.createReadStream()` to read input CSV
   - Handle large files efficiently with streams

2. **Transform Data**

   - Create custom `Transform` stream
   - Apply data transformations line by line
   - Handle CSV parsing and formatting

3. **Write Output File**
   - Use `fs.createWriteStream()` to write results
   - Maintain CSV format in output

### Data Transformations Required

1. **Name Capitalization**

   - Capitalize first and last names
   - Handle multiple names properly

2. **Email Normalization**

   - Convert emails to lowercase
   - Validate email format

3. **Phone Number Formatting**

   - Format phone numbers to (XXX) XXX-XXXX
   - Remove invalid phone numbers

4. **Date Standardization**
   - Convert dates to YYYY-MM-DD format
   - Handle different input date formats

### Input CSV Format

Create a sample input file `data/users.csv`:

```csv
name,email,phone,birthdate,city
john doe,JOHN.DOE@EXAMPLE.COM,1234567890,12/25/1990,new york
jane smith,Jane.Smith@Gmail.Com,555-123-4567,1985-03-15,los angeles
bob johnson,BOB@TEST.COM,invalid-phone,03/22/1992,chicago
alice brown,alice.brown@company.org,9876543210,1988/07/04,houston
```

### Expected Output Format

The output file `data/users_transformed.csv` should look like:

```csv
name,email,phone,birthdate,city
John Doe,john.doe@example.com,(123) 456-7890,1990-12-25,New York
Jane Smith,jane.smith@gmail.com,(555) 123-4567,1985-03-15,Los Angeles
Bob Johnson,bob@test.com,INVALID,1992-03-22,Chicago
Alice Brown,alice.brown@company.org,(987) 654-3210,1988-07-04,Houston
```

### Implementation Details

**Step 1. Transform Stream Classes**

- `CSVParser`: Convert CSV lines to JavaScript objects
- `DataTransformer`: Apply transformations to each record
- `CSVWriter`: Convert objects back to CSV format

**Step 2. Required Helper Functions**

- `capitalizeName(name)`: Capitalize names properly
- `normalizeEmail(email)`: Convert emails to lowercase and validate
- `formatPhone(phone)`: Format phone numbers to (XXX) XXX-XXXX
- `standardizeDate(date)`: Convert dates to YYYY-MM-DD format

**Step 3. Main Processing Function**

- `processCSVFile(inputPath, outputPath)`: Main processing pipeline
- `createSampleData()`: Create sample input files for testing

## Testing Your Implementation

After implementing your solution, test it by running:

```bash
node task-02-test.js
```

The test suite will verify:

- Helper functions work correctly
- Transform streams process data properly
- Full file processing works end-to-end
- Error handling is implemented
- Sample data creation works

## Document Your Work

After completing all previous steps, you must document your work in the file `solutions/task-02.txt`:

- include a brief description of your implementation
- explain how to run your solution
- provide `.js`, `data/users.csv` and `data/users_transformed.csv` files with your implementation

## Bonus Points

- Add progress reporting for large files
- Support different CSV delimiters
- Add data validation with detailed error reporting
- Create a CLI tool to run transformations
- Add support for multiple transformation rules
- Implement streaming JSON to CSV conversion

## Error Handling Requirements

1. Handle file not found errors
2. Handle malformed CSV data
3. Handle write permission errors
4. Provide meaningful error messages
5. Clean up resources on errors
