export default function Footer() {
  return (
    <div className="flex flex-col max-h-screen bottom-10">
      <footer className="border-t border-t-slate-500">
        <div className="flex items-center justify-between">
          <div className="mt-7 flex items-center gap-2">
            <img src="/logo.svg" alt="Portlyze Logo" className="w-7" />
            <h3>Portlyze &copy; 2025</h3>
          </div>
          <div>
            <p>Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
