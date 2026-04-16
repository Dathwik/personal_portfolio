export default function Footer() {
  return (
    <footer className="border-t border-neutral-800/50 py-8 max-w-5xl mx-auto px-6 w-full">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-neutral-600 text-xs">
          © {new Date().getFullYear()} Dathwik Kollikonda
        </p>
        <p className="text-neutral-600 text-xs">
          Built with React &amp; deployed on AWS Amplify
        </p>
      </div>
    </footer>
  );
}
