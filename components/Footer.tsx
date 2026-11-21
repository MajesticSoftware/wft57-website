export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="container-max py-8 text-xs text-zinc-400 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p>All Rights Reserved WFT57 © {new Date().getFullYear()}</p>
        <p>
          developer:{" "}
          <a className="underline underline-offset-4 hover:text-white" href="https://vbsbusinesstech.com" target="_blank" rel="noreferrer">
            VBS Business-Tech Solutions
          </a>
        </p>
      </div>
    </footer>
  );
}
