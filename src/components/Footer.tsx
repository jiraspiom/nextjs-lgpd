import Link from 'next/link'

export default function Footer() {
  return (
    <footer
      style={{
        padding: '1rem',
        textAlign: 'center',
        borderTop: '1px solid #ccc',
      }}
    >
      <p>
        &copy; {new Date().getFullYear()} nextjsLGPD. Todos os direitos
        reservados.
      </p>
      <div style={{ marginTop: '0.5rem' }}>
        <Link
          href="/politica-privacidade"
          style={{ textDecoration: 'underline', color: '#0070f3' }}
        >
          Política de Privacidade
        </Link>
      </div>
    </footer>
  )
}
