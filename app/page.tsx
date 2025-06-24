"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <header className="bg-white shadow-lg py-8 text-center">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">John Doe</h1>
        <p className="text-xl text-gray-600 mb-2">Experienced software engineer with 5+ years of experience in full-stack development. Passionate about creating scalable web applications and mentoring junior developers.</p>
        <a href="mailto:john.doe@example.com" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          {"✉️"} {email}
        </a>
      </header>
      <main className="max-w-4xl mx-auto px-4 py-12">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <li key={0} className="bg-white rounded shadow p-3 text-center">JavaScript</li>
<li key={1} className="bg-white rounded shadow p-3 text-center">React</li>
<li key={2} className="bg-white rounded shadow p-3 text-center">Node.js</li>
<li key={3} className="bg-white rounded shadow p-3 text-center">Python</li>
<li key={4} className="bg-white rounded shadow p-3 text-center">SQL</li>
<li key={5} className="bg-white rounded shadow p-3 text-center">Git</li>
<li key={6} className="bg-white rounded shadow p-3 text-center">AWS</li>
          </ul>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Experience</h2>
          <ul className="space-y-4">
            <li key={0} className="bg-white rounded shadow p-4 flex items-start gap-3"><span style={{color:'#2563eb',fontWeight:'bold',marginRight:'8px'}}>•</span><span>Senior Software Engineer at Tech Corp (2020</span></li>
<li key={1} className="bg-white rounded shadow p-4 flex items-start gap-3"><span style={{color:'#2563eb',fontWeight:'bold',marginRight:'8px'}}>•</span><span>2024)</span></li>
<li key={2} className="bg-white rounded shadow p-4 flex items-start gap-3"><span style={{color:'#2563eb',fontWeight:'bold',marginRight:'8px'}}>•</span><span>Full Stack Developer at Startup Inc (2018</span></li>
<li key={3} className="bg-white rounded shadow p-4 flex items-start gap-3"><span style={{color:'#2563eb',fontWeight:'bold',marginRight:'8px'}}>•</span><span>2020)</span></li>
          </ul>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Education</h2>
          <ul className="space-y-4">
            <li key={0} className="bg-white rounded shadow p-4 flex items-start gap-3"><span style={{color:'#2563eb',fontWeight:'bold',marginRight:'8px'}}>•</span><span>Bachelor of Science in Computer Science</span></li>
<li key={1} className="bg-white rounded shadow p-4 flex items-start gap-3"><span style={{color:'#2563eb',fontWeight:'bold',marginRight:'8px'}}>•</span><span>University of Technology (2014</span></li>
<li key={2} className="bg-white rounded shadow p-4 flex items-start gap-3"><span style={{color:'#2563eb',fontWeight:'bold',marginRight:'8px'}}>•</span><span>2018)</span></li>
          </ul>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          <ul className="space-y-4">
            <li key={0} className="bg-white rounded shadow p-4 flex items-start gap-3"><span style={{color:'#2563eb',fontWeight:'bold',marginRight:'8px'}}>•</span><span>E</span></li>
<li key={1} className="bg-white rounded shadow p-4 flex items-start gap-3"><span style={{color:'#2563eb',fontWeight:'bold',marginRight:'8px'}}>•</span><span>commerce Platform (React/Node.js)</span></li>
<li key={2} className="bg-white rounded shadow p-4 flex items-start gap-3"><span style={{color:'#2563eb',fontWeight:'bold',marginRight:'8px'}}>•</span><span>Portfolio Website (Next.js)</span></li>
<li key={3} className="bg-white rounded shadow p-4 flex items-start gap-3"><span style={{color:'#2563eb',fontWeight:'bold',marginRight:'8px'}}>•</span><span>Task Management App (Python/Django)</span></li>
          </ul>
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p>&copy; 2024 John Doe. All rights reserved.</p>
      </footer>
    </div>
  );
}