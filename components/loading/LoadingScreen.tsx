// File: components/loading/LoadingScreen.tsx
import { Loading } from "./Loading";

export function LoadingScreen() {
  return (
    <Loading
      variant="fullscreen"
      message="Creating Your Perfect Plan"
      showProgress
    />
  );
}
