# React

## Why intervalId should be a ref
Because it must survive rerenders, be mutable, and not trigger rerenders. A local variable resets on every render, and state is unnecessary for something that is not rendered.

## Why render state should not depend on refs
Updating a ref does not cause a rerender. So the UI can become out of sync or only appear to work because some unrelated state changed.

## When a ref becomes necessary
When a value must persist across renders and be read or written by different handlers/effects, but should not trigger rerenders.

## useSyncExternalStore
useSyncExternalStore is used to safely read and subscribe to state that lives outside React, like an external store or browser API. You give React a subscribe function and a getSnapshot function so it can rerender consistently when that external state changes.

## useTransition
useTransition lets you mark some state updates as non-urgent, so urgent UI like typing stays responsive. It returns isPending and startTransition, which you use to run slower updates in the background.