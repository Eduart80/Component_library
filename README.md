# React + TypeScript + Vite

Programming Language: React, TypeScript<br>
Testing: Jest

### Instructions for First-Time Setup
To create a React app with TypeScript using Vite, follow these steps:
```bash
npm create vite@latest component-library -- --template react-ts
cd component-library
npm install
```

### Project Structure
After setup, the project structure is as follows:
```plaintext
src/
  components/
    AlertBox/
      AlertBox.tsx
      AlertBox.test.tsx
    UserProfileCard/
      UserProfileCard.tsx
      UserProfileCard.test.tsx
    ProductDisplay/
      ProductDisplay.tsx
      ProductDisplay.test.tsx
  types/
    index.ts
```

Additionally, at the root level, there is a `test` folder. Jest is used for unit testing the components.

### Running Tests
To run the tests, use the following command:
```bash
npm test
```

### Passing Information to Components
Components for `UserProfileCard` and `ProductDisplay` are created, and both require props. For example:
```tsx
export const ProductDisplay: React.FC<ProductDisplayProps> = ({
    product,
    onAddToCart,
}) => {
  return (
    <>
        {/* code */}
    </>
  );
};
```

In `App.tsx`, data is passed to the components as follows:
```tsx
<ProductDisplay
    product={product}
    showDescription={true}
    showStockStatus={product.inStock}
    onAddToCart={handleAddToCart}
/>
```

The data passed to the components can be of different types, such as strings, booleans, numbers, and functions. When rendered, the components display the data on the UI.

### Handling Optional Props
In TypeScript, optional props can be defined by adding a `?` to the property name in the interface. For example:
```ts
interface User {
    name: string;
    age?: number; // Optional property
}
```
This allows the `age` property to be optional when using the `User` interface.

### Special Prop Handling and Requirements
When designing components, I consided the following:
- **Optional Props**: Use the `?` operator to make props optional.
- **Default Props**: Provide default values for optional props to avoid undefined behavior.
- **Prop Validation**: Use TypeScript interfaces to enforce the expected types of props.

### Reflection Questions
1. **What considerations did you make when designing the component interfaces?**
   - Interfaces were designed to be clear and concise, ensuring that each prop had a specific purpose. Optional props were included to allow flexibility.

2. **How did you ensure type safety across your components?**
   - TypeScript interfaces and types were used to strictly define the shape of props and state. This helped catch errors during development.

3. **What challenges did you face when implementing component composition?**
   - Ensuring that components were reusable. Managing prop and data flow between parent and child components.