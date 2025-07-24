# Admin Dashboard Functionality for Accounting Application

This project implements part of the functionality for an admin dashboard in an accounting management application. Currently, the "Invoices" button shows the number of invoices from the previous month and the percentage increase or decrease compared to the month before. The "Payments" section displays the total of all payment amounts from the previous month along with the percentage change compared to the previous month.
## Getting Started

### Prerequisites

- Docker must be installed on your machine.
- Git must be installed for cloning the repository.

### Installation

1. Clone the repository using the following command:

   ```bash
   git clone https://github.com/TamarDehan2005/First-task.git
   ```

2. Navigate to the `Client` directory and create a `.env` file with the following content:

   ```plaintext
   REACT_APP_API_URL=http://localhost:7106
   ```

3. From the root directory of the cloned project, run the following command to build and start the containers:

   ```bash
   docker-compose up --build
   ```

### Accessing the Application

- Once the containers are running, you can access the application at:
  - Swagger UI: [http://localhost:7106](http://localhost:7106)
  - React Application: [http://localhost:3000](http://localhost:3000)

## Features

- View the number of receipts from the previous month.
- Display percentage change in receipts compared to the previous month.
- Show total payment amounts from the previous month.
- Indicate percentage change in payment amounts compared to the previous month.
