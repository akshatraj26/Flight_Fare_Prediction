# Flight Fare Prediction Model

This repository contains an end-to-end flight fare prediction model built using a Random Forest algorithm. The model is deployed with Flask for creating a web application, and JavaScript is used for client-side data validation.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Model Details](#model-details)
- [File Structure](#file-structure)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project aims to predict flight fares based on various input features such as airline, date of journey, source, destination, and more. The primary technologies used are Python, Flask, and JavaScript.

## Features

- Predict flight fares using a Random Forest model.
- Web interface built with Flask for easy interaction.
- Client-side validation using JavaScript to ensure data integrity.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/flight-fare-prediction.git
    cd flight-fare-prediction
    ```

2. Create and activate a virtual environment:
    ```bash
    python -m venv venv
    source venv/bin/activate   # On Windows, use `venv\Scripts\activate`
    ```

3. Install the required packages:
    ```bash
    pip install -r requirements.txt
    ```

4. Start the Flask application:
    ```bash
    python main.py
    ```

5. Open your web browser and go to `http://127.0.0.1:5000/` to use the application.

## Usage

1. Enter the required flight details in the web form.
2. Click the "Predict Fare" button.
3. The predicted fare will be displayed on the screen.

## Model Details

- **Algorithm:** Random Forest
- **Libraries:** scikit-learn, pandas, numpy
- **Training Data:** The model is trained on a dataset containing various flight details and their corresponding fares.

## File Structure

```
flight-fare-prediction/
├── static/
│   └── js/
│       └── validation.js
├── templates/
│   └── index.html
├── main.py
├─── flight_fare_model.pkl
├── requirements.txt
└── README.md
```

- `static/js/sript.js`: Contains JavaScript code for client-side data validation.
- `templates/index.html`: HTML template for the web interface.
- `app.py`: Main Flask application file.
- `model/flight_fare_model.pkl`: Pre-trained Random Forest model.
- `requirements.txt`: List of required Python packages.
- `README.md`: Documentation file.

## Contributing

Contributions are welcome! Please fork this repository and submit pull requests with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

![first1](https://github.com/akshatraj26/Flight_Fare_Prediction/blob/main/images/Screenshot%20(2).png)
![pic2](https://github.com/akshatraj26/Flight_Fare_Prediction/blob/main/images/Screenshot%20(3).png)
![pic3](https://github.com/akshatraj26/Flight_Fare_Prediction/blob/main/images/Screenshot%20(4).png)
![pic4](https://github.com/akshatraj26/Flight_Fare_Prediction/blob/main/images/Screenshot%20(5).png)
![pic5](https://github.com/akshatraj26/Flight_Fare_Prediction/blob/main/images/Screenshot%20(6).png)
![pic6](https://github.com/akshatraj26/Flight_Fare_Prediction/blob/main/images/Screenshot%20(7).png)
![pic7](https://github.com/akshatraj26/Flight_Fare_Prediction/blob/main/images/Screenshot%20(8).png)

