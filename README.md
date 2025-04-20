# Unit Converter CLI

Welcome to the **Unit Converter CLI**! This is a powerful and user-friendly command-line tool designed to handle a wide variety of unit conversions with ease. Whether you're working with liquid measurements, distances, time, or other units, this tool has you covered.

---

## 🚀 Features

- **Extensive Unit Support**: Convert between a wide range of units, including:
    - **Distance**: meters, kilometers, miles, feet, inches, etc.
    - **Liquid**: liters, milliliters, gallons, cups, etc.
    - **Time**: seconds, minutes, hours, days, etc.
    - **Temperature**: Celsius, Fahrenheit, Kelvin.
    - **Weight**: grams, kilograms, pounds, ounces.
    - **Speed**: meters per second, kilometers per hour, miles per hour.
    - And many more!
- **Batch Conversions**: Convert multiple values at once for added convenience.
- **Custom Units**: Define and use your own custom units for specialized conversions.
- **Localization**: Support for multiple languages to cater to a global audience.
- **Web Interface**: A web-based version of the tool for easier access and usability.
- **API Integration**: Programmatic access to conversions via a RESTful API.
- **User-Friendly CLI**: Simple and intuitive command-line interface for quick conversions.
- **High Precision**: Accurate calculations for all supported units.
- **Cross-Platform**: Works seamlessly on Windows, macOS, and Linux.

---

## 📦 Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/moxlyy/unit-converter.git
    ```
2. Navigate to the project directory:
    ```bash
    cd unit-converter
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

---

## 🛠️ Usage

### CLI Usage
Run the CLI tool with the following command:
```bash
node converter.js
```

Follow the prompts to select the type of conversion, input values, and desired units.

#### Example
Convert 5 kilometers to miles:
```bash
> Enter the value to convert: 5
> Select the source unit: kilometers
> Select the target unit: miles
Result: 3.11 miles
```

---

### 🌐 Web Interface

The Unit Converter also includes a web-based interface for easier access. To use the web interface:

1. Start the server:
    ```bash
    node server.js
    ```
2. Open your browser and navigate to:
    ```
    http://localhost:3000
    ```
3. Use the `/convert` endpoint to perform conversions. For example:
    ```
    http://localhost:3000/convert?value=5&sourceUnit=kilometers&targetUnit=miles
    ```

---

### 🌐 API Integration

The Unit Converter provides a RESTful API for programmatic access to conversions.

#### Base URL
```
http://localhost:3000
```

#### Endpoints

##### `GET /convert`
Perform a unit conversion.

**Query Parameters**:
- `value` (required): The numeric value to convert.
- `sourceUnit` (required): The unit of the input value.
- `targetUnit` (required): The unit to convert to.

**Example Request**:
```
GET /convert?value=5&sourceUnit=kilometers&targetUnit=miles
```

**Example Response**:
```json
{
  "value": 5,
  "sourceUnit": "kilometers",
  "targetUnit": "miles",
  "result": 3.11
}
```

**Error Response**:
```json
{
  "error": "Conversion not supported."
}
```

---

## 🤝 Contributing

Contributions are welcome! If you'd like to add more units, improve the tool, or implement new features, feel free to fork the repository and submit a pull request.

### Steps to Contribute:
1. Fork the repository.
2. Create a new branch for your feature or bug fix:
    ```bash
    git checkout -b feature-name
    ```
3. Commit your changes:
    ```bash
    git commit -m "Add feature-name"
    ```
4. Push to your fork:
    ```bash
    git push origin feature-name
    ```
5. Open a pull request.

---

## 🧪 Running Tests

This project uses [Jest](https://jestjs.io/) for testing. To run the tests, use the following command:
```bash
npm test
```

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

Start converting units effortlessly with the **Unit Converter CLI** today!