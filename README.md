# Hexagonal Architecture POC

This is a **proof of concept** of **Hexagonal Architecture / Clean Architecture** in a Frontend **React** app.  
The goal? Show how to build **clean, modular, and scalable application** and show that this type of architecture is not exclusive to the backend.

---

## Highlights

- Clear separation of **business logic** and **external dependencies**
- Use of **TypeScript** for type safety
- Easy to extend with new adapters or features

---

## Project Structure

```
src/
├── application/ # Use cases & business logic implementations
├── domain/ # Core entities, services & unchanging business logic
└── infrastructure/ # External integrations
```

## Key Parts

This project uses an ApplicationContext as DI (Dependency Injector), where you can choose if you want to use an standard **HTTP** repository for the application request or use a **localStorage** repository.

## Running the App

1. Install every dependencies

```bash
npm install
```

2. Choose a repository implementaion using [HTTP](https://github.com/Asega1996/hexagonal-arch-poc/blob/main/src/infrastructure/ui/react/context/application-context/application-context.tsx#11) or [localStorage](https://github.com/Asega1996/hexagonal-arch-poc/blob/main/src/infrastructure/ui/react/context/application-context/application-context.tsx#12).

3. If you have choose HTTP you should setup the mocks for the request runing

```bash
npm run mocks
```

“Clean architecture isn’t just for the backend. Your frontend deserves love too.”
