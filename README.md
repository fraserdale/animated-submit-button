# Submit Button Component

A React component for creating an animated submit button with a smooth transition from submit to success state.


https://github.com/user-attachments/assets/94b79216-5cfd-4c3b-abcf-5225450197c9


## Usage

```tsx
function App() {
  return (
    <SubmitButton
      onClick={() => console.log("Button clicked")}
      submitText={{
        originalSubstring: "Submit",
        hiddenSubstring: "ting",
      }}
      successText="Done."
    />
  );
}
```

## Props

| Prop        | Type                                                     | Default                                                    | Description                                            |
| ----------- | -------------------------------------------------------- | ---------------------------------------------------------- | ------------------------------------------------------ |
| onClick     | `() => void`                                             | undefined                                                  | Callback function triggered when the button is clicked |
| submitText  | `{ originalSubstring: string, hiddenSubstring: string }` | `{ originalSubstring: "Submit", hiddenSubstring: "ting" }` | Text configuration for the submit state animation      |
| successText | `string`                                                 | "Done."                                                    | Text displayed when the submit action completes        |

## Features

- Smooth animation transitions between states
- Spring-based letter animations
- Disabled state during submission
- Color transitions between states
- Mobile-friendly with responsive design

## License

MIT
