ATM.Assessment

ATM.Assessment is a .NET solution that demonstrates an example ATM-like system. It is structured around several projects, each responsible for a distinct aspect of the application. This repository is intended to showcase how different layers—such as API, Data, Services, Validation, ViewModels, and Tests—can work together in a clean, modular architecture.
Projects Overview
1. ATM.API

   Location: ATM.API/

   Purpose: Contains the main ASP.NET Core Web API application for handling client-facing requests and routing them to the appropriate services.

   Key Files:

        Program.cs – Entry point of the .NET application.

        appsettings.json – Configuration file.

        AccountsController.json – Example of a controller handling ATM account-related endpoints (if it’s a JSON configuration, it may be used for specific settings).

2. ATM.Data

   Location: ATM.Data/

   Purpose: Represents the Data Access Layer (DAL). It handles the database context, migrations, and repository implementations for interacting with underlying data stores.

   Key Files:

        DbContext.cs – Defines the Entity Framework database context.

        Migrations/ – Contains auto-generated database migration files.

        Repositories/ – Classes that encapsulate CRUD operations for domain entities.

3. ATM.Services

   Location: ATM.Services/

   Purpose: Houses the application’s business logic. Classes within this project encapsulate the “core” operations and rules that drive the ATM features (e.g., transferring funds, retrieving account information).

   Key Files:

        AccountService.cs – Example class that implements the business logic for managing accounts.

        IAccountService.cs – Interface defining contract methods for account services.

4. ATM.Validation

   Location: ATM.Validation/

   Purpose: Contains logic for validating input models and requests before they reach the business logic layer. By placing validation here, the application ensures data integrity and consistency.

   Key Files:

        TransactionRequestValidator.cs – Validates requests for standard transactions.

        TransferRequestValidator.cs – Validates requests for transfer operations.

5. ATM.ViewModels

   Location: ATM.ViewModels/

   Purpose: Defines the DTOs (Data Transfer Objects) or “View Models” used by API endpoints and user-facing layers, ensuring a separation between entity models and exposed data.

   Key Files:

        TransactionRequest.cs – Represents a transaction request payload.

        TransferRequest.cs – Represents a transfer request payload.

6. Tests

   Location: Tests/

   Purpose: Contains unit test projects for validating the correctness of logic within the corresponding layers:

        ATM.Services.Tests – Unit tests for AccountService and other service classes.

        ATM.Validation.Tests – Unit tests for TransactionRequestValidator and TransferRequestValidator.

Getting Started

    Prerequisites

        .NET 6 SDK or later installed.

        A local or remote database (if you plan to run EF migrations).

    Clone the Repository


Restore Dependencies

dotnet restore

Build the Solution

dotnet build

Run the API Project

cd ATM.API
dotnet run

    By default, the API may be accessible at https://localhost:5001 or a similar address.

    Adjust in appsettings.json or via environment variables if necessary.

Run the Tests

    dotnet test

        Executes all test projects within the Tests folder.

Folder Structure Summary

ATM.Assessment/
├── ATM.API/
├── ATM.Data/
├── ATM.Services/
├── ATM.Validation/
├── ATM.ViewModels/
└── Tests/
├── ATM.Services.Tests/
└── ATM.Validation.Tests/


# Frontend

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
