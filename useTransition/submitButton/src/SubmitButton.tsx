import { useTransition } from 'react'

export default function SubmitButton () {
  const [isPending, startTransition] = useTransition();

  const onSubmit = () => {
    startTransition(async () => {
      await new Promise<{ success: boolean }>((resolve) => {
        // Simulate a slow network request
        console.log('Form submitted!')

        setTimeout(() => {
          resolve({ success: true })
        }, 2000);
      });
    });
  };

  return (
    <>
      {isPending && <p>Submitting...</p>}
      <button disabled={isPending} onClick={onSubmit}>
        Submit
      </button>
    </>
  );
}
