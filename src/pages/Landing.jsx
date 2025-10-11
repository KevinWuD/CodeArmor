export default function Landing() {
  const year = new Date().getFullYear();
  const features = [
    {
      t: 'In-Editor Feedback',
      d: 'Real-time squiggly underlines and tooltips directly inside VS Code.',
    },
    {
      t: 'Actionable Fixes',
      d: 'Not just warnings—step-by-step solutions for immediate remediation.',
    },
    {
      t: 'Low Noise',
      d: 'Prioritizes accuracy with minimal false positives.',
    },
  ];

  const steps = [
    {
      n: '01',
      t: 'Install',
      d: 'Get CodeArmor from VS Marketplace or local load.',
    },
    {
      n: '02',
      t: 'Code',
      d: 'Write your serverless functions in VS Code as usual.',
    },
    {
      n: '03',
      t: 'Fix',
      d: 'Follow instant inline feedback to secure your code.',
    },
  ];

  const team = [
    { name: 'Thin Thin Khine', gh: 'https://github.com/Thinthin77', li: '#' },
    { name: 'Kevin Wu', gh: 'https://github.com/KevinWuD', li: '#' },
    { name: 'Peter Tan-Gatue', gh: 'https://github.com/Ptangatue', li: '#' },
    { name: 'Michal Marrow', gh: 'https://github.com/MichalMarrow', li: '#' },
  ];

  return (
    <main className='min-h-dvh bg-neutral-950 text-white selection:bg-white/10'>
      {/* Navbar */}
      <header className='max-w-6xl mx-auto px-6 py-5 flex items-center justify-between'>
        <a href='#' className='text-xl font-bold tracking-tight'>
          CodeArmor
        </a>
        <nav className='hidden sm:flex gap-6 text-sm text-neutral-300'>
          <a href='#features' className='hover:text-white'>
            Features
          </a>
          <a href='#how' className='hover:text-white'>
            How it Works
          </a>
          <a href='#team' className='hover:text-white'>
            Team
          </a>
          <a href='#contact' className='hover:text-white'>
            Contact
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className='relative overflow-hidden'>
        <div
          className='pointer-events-none absolute inset-0 opacity-30 blur-3xl'
          style={{
            background:
              'radial-gradient(60% 60% at 50% 0%, #ef233c33 0%, transparent 60%)',
          }}
        />
        <div className='max-w-6xl mx-auto px-6 py-20 text-center'>
          <h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
            Security as Natural as Coding
          </h1>
          <p className='mt-4 text-neutral-300 max-w-2xl mx-auto'>
            CodeArmor is a VS Code extension that works like a spell-checker for
            security—flagging vulnerabilities in serverless functions with
            instant, actionable feedback.
          </p>
          <div className='mt-8 flex justify-center gap-4'>
            <a
              href='https://marketplace.visualstudio.com/items?itemName=CodeArmor.codearmor'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex rounded-xl px-6 py-3 bg-white text-black font-medium'
            >
              Get on Marketplace
            </a>
            <a
              href='https://github.com/oslabs-beta/CodeArmor'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex rounded-xl px-6 py-3 border border-white/15'
            >
              Github Repo
            </a>
          </div>
          <div className='mt-10 flex flex-wrap justify-center gap-3 text-xs text-neutral-300'>
            <span className='rounded-full border border-white/10 px-3 py-1'>
              JavaScript / TypeScript
            </span>
            <span className='rounded-full border border-white/10 px-3 py-1'>
              AWS Lambda Support
            </span>
            <span className='rounded-full border border-white/10 px-3 py-1'>
              Low False Positives
            </span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id='features' className='max-w-6xl mx-auto px-6 py-16'>
        <h2 className='text-2xl md:text-3xl font-semibold'>Key Features</h2>
        <p className='mt-2 text-neutral-400'>
          CodeArmor integrates seamlessly into your IDE, providing feedback that
          is relevant, actionable, and developer-friendly.
        </p>
        <div className='mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3'>
          {features.map((f, i) => (
            <div key={i} className='rounded-2xl border border-white/10 p-6'>
              <h3 className='text-lg font-semibold'>{f.t}</h3>
              <p className='mt-2 text-neutral-300'>{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Security Rules */}
      <section id='rules' className='max-w-6xl mx-auto px-6 py-16'>
        <h2 className='text-2xl md:text-3xl font-semibold'>Security Rules</h2>
        <p className='mt-2 text-neutral-400'>
          CodeArmor currently detects and flags five categories of security
          vulnerabilities:
        </p>
        <div className='mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3'>
          <div className='rounded-2xl border border-white/10 p-6'>
            <h3 className='text-lg font-semibold'>Injection Prevention</h3>
            <p className='mt-2 text-neutral-300'>
              Detects unsafe <code>eval()</code>, script injection, and
              unsanitized DOM APIs.
            </p>
          </div>

          <div className='rounded-2xl border border-white/10 p-6'>
            <h3 className='text-lg font-semibold'>Deserialization Safety</h3>
            <p className='mt-2 text-neutral-300'>
              Flags unsafe <code>JSON.parse()</code>, prototype pollution, and
              untrusted object creation.
            </p>
          </div>

          <div className='rounded-2xl border border-white/10 p-6'>
            <h3 className='text-lg font-semibold'>Secrets Management</h3>
            <p className='mt-2 text-neutral-300'>
              Detects hardcoded credentials, API keys, and tokens to prevent
              data exposure.
            </p>
          </div>

          <div className='rounded-2xl border border-white/10 p-6'>
            <h3 className='text-lg font-semibold'>Input Validation</h3>
            <p className='mt-2 text-neutral-300'>
              Highlights unsanitized user inputs that can lead to XSS or SQL
              injection.
            </p>
          </div>

          <div className='rounded-2xl border border-white/10 p-6'>
            <h3 className='text-lg font-semibold'>IAM Permissions</h3>
            <p className='mt-2 text-neutral-300'>
              Surfaces overly permissive policies and risky role usage in
              serverless functions.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id='how' className='max-w-6xl mx-auto px-6 py-16'>
        <h2 className='text-2xl md:text-3xl font-semibold'>How It Works</h2>
        <p className='mt-2 text-neutral-400'>
          No extra dashboards. No delays. Just instant feedback while you code.
        </p>
        <div className='mt-8 grid gap-6 md:grid-cols-3'>
          {steps.map((s) => (
            <div
              key={s.n}
              className='rounded-2xl border border-white/10 p-6 text-left'
            >
              <div className='text-sm text-neutral-400'>{s.n}</div>
              <h3 className='mt-1 text-lg font-semibold'>{s.t}</h3>
              <p className='mt-2 text-neutral-300'>{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section id='team' className='max-w-6xl mx-auto px-6 py-16'>
        <h2 className='text-2xl md:text-3xl font-semibold'>Meet the Team</h2>
        <div className='mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-4'>
          {team.map((m) => (
            <div
              key={m.name}
              className='rounded-2xl border border-white/10 p-5 text-center'
            >
              <div className='font-medium'>{m.name}</div>
              <div className='mt-2 flex justify-center gap-3 text-sm text-neutral-300'>
                <a
                  href={m.gh}
                  target='_blank'
                  className='hover:text-white underline'
                >
                  GitHub
                </a>
                <a
                  href={m.li}
                  target='_blank'
                  className='hover:text-white underline'
                >
                  LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        id='contact'
        className='border-t border-white/10 mt-10 text-sm text-neutral-400'
      >
        <div className='max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-4'>
          {/* <div>© {year} CodeArmor. All rights reserved.</div> */}
          <div className='flex gap-4'>
            <a href='#' className='hover:text-white'>
              {/* Privacy */}
            </a>
            <a href='#' className='hover:text-white'>
              {/* Terms */}
            </a>
            <a href='mailto:hello@codearmor.dev' className='hover:text-white'>
              {/* hello@codearmor.dev */}
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
