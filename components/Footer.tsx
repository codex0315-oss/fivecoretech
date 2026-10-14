import CurrentYear from "./CurrentYear";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-8 text-sm text-muted sm:flex-row sm:px-6">
        <p>
          © <CurrentYear /> FiveCore Technologies. All rights reserved.
        </p>
        <p>Building Digital Solutions Together</p>
      </div>
    </footer>
  );
}