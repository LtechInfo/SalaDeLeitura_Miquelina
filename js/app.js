// =============================================
// SALA DE LEITURA - EE Miquelina Pedroso Magnani Professora
// Shared Utilities & Data Management
// =============================================

const DB = {
  get: (key) => {
    try {
      return JSON.parse(localStorage.getItem(key)) || [];
    } catch { return []; }
  },
  set: (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  },
  generateId: () => Date.now().toString(36) + Math.random().toString(36).substr(2)
};

// ---- Sample Data Initialization ----
function initSampleData() {
  if (DB.get('initialized').length === 0 || DB.get('initialized') !== true) {
    if (!localStorage.getItem('initialized')) {
      seedBooks();
      seedPessoas();
      seedEmprestimos();
      seedAgendamentos();
      localStorage.setItem('initialized', 'true');
    }
  }
}

function seedBooks() {
  if (DB.get('books').length > 0) return;
  const books = [
    { id: DB.generateId(), titulo: 'Dom Casmurro', autor: 'Machado de Assis', ano: '1899', genero: 'Romance', quantidade: 4, quantidadeDisponivel: 3, isbn: '978-8535910520', editora: 'Editora Ática', descricao: 'Clássico da literatura brasileira narrado por Bentinho, o famoso Dom Casmurro.', dataCadastro: '2024-01-10' },
    { id: DB.generateId(), titulo: 'O Cortiço', autor: 'Aluísio Azevedo', ano: '1890', genero: 'Naturalismo', quantidade: 3, quantidadeDisponivel: 3, isbn: '978-8508114757', editora: 'Editora Melhoramentos', descricao: 'Romance naturalista que retrata a vida numa habitação coletiva no Rio de Janeiro.', dataCadastro: '2024-01-10' },
    { id: DB.generateId(), titulo: 'Iracema', autor: 'José de Alencar', ano: '1865', genero: 'Romantismo', quantidade: 5, quantidadeDisponivel: 5, isbn: '978-8503010351', editora: 'José Olympio', descricao: 'Lenda do Ceará — história de amor entre a índia Iracema e o guerreiro Martim.', dataCadastro: '2024-01-11' },
    { id: DB.generateId(), titulo: 'Vidas Secas', autor: 'Graciliano Ramos', ano: '1938', genero: 'Modernismo', quantidade: 4, quantidadeDisponivel: 2, isbn: '978-8520920456', editora: 'Record', descricao: 'Retrata a vida sofrida de uma família de retirantes no sertão nordestino.', dataCadastro: '2024-01-12' },
    { id: DB.generateId(), titulo: 'O Pequeno Príncipe', autor: 'Antoine de Saint-Exupéry', ano: '1943', genero: 'Infantojuvenil', quantidade: 6, quantidadeDisponivel: 4, isbn: '978-8574068121', editora: 'Agir', descricao: 'A clássica história do pequeno príncipe que viaja por diferentes planetas.', dataCadastro: '2024-01-12' },
    { id: DB.generateId(), titulo: 'Harry Potter e a Pedra Filosofal', autor: 'J.K. Rowling', ano: '1997', genero: 'Fantasia', quantidade: 5, quantidadeDisponivel: 3, isbn: '978-8532530783', editora: 'Rocco', descricao: 'O início da jornada do jovem bruxo Harry Potter em Hogwarts.', dataCadastro: '2024-01-13' },
    { id: DB.generateId(), titulo: 'A Moreninha', autor: 'Joaquim Manuel de Macedo', ano: '1844', genero: 'Romance', quantidade: 2, quantidadeDisponivel: 2, isbn: '978-8508118397', editora: 'Melhoramentos', descricao: 'Considerado o primeiro romance brasileiro, conta o amor de Carolina e Augusto.', dataCadastro: '2024-01-14' },
    { id: DB.generateId(), titulo: 'Memórias Póstumas de Brás Cubas', autor: 'Machado de Assis', ano: '1881', genero: 'Romance', quantidade: 3, quantidadeDisponivel: 3, isbn: '978-8535905779', editora: 'Editora Ática', descricao: 'Narrado por um defunto autor, obra inaugural do Realismo brasileiro.', dataCadastro: '2024-01-14' },
    { id: DB.generateId(), titulo: 'O Senhor dos Anéis', autor: 'J.R.R. Tolkien', ano: '1954', genero: 'Fantasia', quantidade: 3, quantidadeDisponivel: 1, isbn: '978-8533613379', editora: 'Martins Fontes', descricao: 'A épica jornada de Frodo para destruir o Um Anel e salvar a Terra-Média.', dataCadastro: '2024-01-15' },
    { id: DB.generateId(), titulo: 'Capitães da Areia', autor: 'Jorge Amado', ano: '1937', genero: 'Modernismo', quantidade: 4, quantidadeDisponivel: 4, isbn: '978-8520921613', editora: 'Record', descricao: 'Retrata a vida de crianças abandonadas nas ruas de Salvador na década de 1930.', dataCadastro: '2024-01-15' },
    { id: DB.generateId(), titulo: 'A Culpa é das Estrelas', autor: 'John Green', ano: '2012', genero: 'Jovem Adulto', quantidade: 4, quantidadeDisponivel: 2, isbn: '978-8580572285', editora: 'Intrínseca', descricao: 'Uma história de amor entre dois adolescentes que se conhecem em um grupo de apoio ao câncer.', dataCadastro: '2024-01-16' },
    { id: DB.generateId(), titulo: 'Frankenstein', autor: 'Mary Shelley', ano: '1818', genero: 'Terror/Ficção Científica', quantidade: 2, quantidadeDisponivel: 2, isbn: '978-8525052247', editora: 'Penguin-Companhia', descricao: 'O cientista Victor Frankenstein cria um ser a partir de partes de cadáveres.', dataCadastro: '2024-01-16' },
    { id: DB.generateId(), titulo: 'Diário de Anne Frank', autor: 'Anne Frank', ano: '1947', genero: 'Autobiografia', quantidade: 3, quantidadeDisponivel: 3, isbn: '978-8508187195', editora: 'Record', descricao: 'O diário pessoal de uma jovem judia durante a ocupação nazista da Holanda.', dataCadastro: '2024-01-17' },
    { id: DB.generateId(), titulo: 'Percy Jackson e o Ladrão de Raios', autor: 'Rick Riordan', ano: '2005', genero: 'Aventura/Fantasia', quantidade: 5, quantidadeDisponivel: 4, isbn: '978-8598078540', editora: 'Intrínseca', descricao: 'Percy descobre ser filho de Poseidon e parte em busca do raio roubado de Zeus.', dataCadastro: '2024-01-17' },
    { id: DB.generateId(), titulo: 'A Revolução dos Bichos', autor: 'George Orwell', ano: '1945', genero: 'Ficção Política', quantidade: 3, quantidadeDisponivel: 3, isbn: '978-8535909555', editora: 'Editora Ática', descricao: 'Uma alegoria política sobre uma fazenda onde os animais tomam o poder dos humanos.', dataCadastro: '2024-01-18' },
  ];
  DB.set('books', books);
}

function seedPessoas() {
  if (DB.get('pessoas').length > 0) return;
  const pessoas = [
    { id: DB.generateId(), nome: 'Ana Clara Souza', ra: '2024001', turma: '9º A', tipo: 'Aluno', telefone: '(19) 99876-5432', email: 'ana.souza@escola.edu.br', dataCadastro: '2024-02-01' },
    { id: DB.generateId(), nome: 'Bruno Henrique Oliveira', ra: '2024002', turma: '8º B', tipo: 'Aluno', telefone: '(19) 98765-4321', email: 'bruno.oliveira@escola.edu.br', dataCadastro: '2024-02-01' },
    { id: DB.generateId(), nome: 'Carla Fernanda Lima', ra: '2024003', turma: '7º C', tipo: 'Aluno', telefone: '(19) 97654-3210', email: 'carla.lima@escola.edu.br', dataCadastro: '2024-02-02' },
    { id: DB.generateId(), nome: 'Daniel Rodrigues Costa', ra: '2024004', turma: '6º A', tipo: 'Aluno', telefone: '(19) 96543-2109', email: 'daniel.costa@escola.edu.br', dataCadastro: '2024-02-02' },
    { id: DB.generateId(), nome: 'Eduarda Martins Pereira', ra: '2024005', turma: '9º B', tipo: 'Aluno', telefone: '(19) 95432-1098', email: 'eduarda.pereira@escola.edu.br', dataCadastro: '2024-02-03' },
    { id: DB.generateId(), nome: 'Prof. Ricardo Alves Santos', ra: 'PROF001', turma: 'Língua Portuguesa', tipo: 'Professor', telefone: '(19) 94321-0987', email: 'ricardo.santos@escola.edu.br', dataCadastro: '2024-02-03' },
    { id: DB.generateId(), nome: 'Prof.ª Maria Helena Gomes', ra: 'PROF002', turma: 'História', tipo: 'Professor', telefone: '(19) 93210-9876', email: 'maria.gomes@escola.edu.br', dataCadastro: '2024-02-04' },
    { id: DB.generateId(), nome: 'Felipe Augusto Nascimento', ra: '2024006', turma: '8º A', tipo: 'Aluno', telefone: '(19) 92109-8765', email: 'felipe.nascimento@escola.edu.br', dataCadastro: '2024-02-05' },
  ];
  DB.set('pessoas', pessoas);
}

function seedEmprestimos() {
  if (DB.get('emprestimos').length > 0) return;
  const pessoas = DB.get('pessoas');
  const books = DB.get('books');
  if (!pessoas.length || !books.length) return;

  const hoje = new Date();
  const fmt = (d) => d.toISOString().split('T')[0];
  const addDays = (d, n) => { const r = new Date(d); r.setDate(r.getDate() + n); return r; };

  const emprestimos = [
    { id: DB.generateId(), pessoaId: pessoas[0].id, livroId: books[0].id, dataEmprestimo: fmt(addDays(hoje, -10)), dataPrevistaDevolucao: fmt(addDays(hoje, 4)), dataDevolvido: null, status: 'ativo', multa: 0 },
    { id: DB.generateId(), pessoaId: pessoas[1].id, livroId: books[3].id, dataEmprestimo: fmt(addDays(hoje, -20)), dataPrevistaDevolucao: fmt(addDays(hoje, -6)), dataDevolvido: null, status: 'atrasado', multa: 0 },
    { id: DB.generateId(), pessoaId: pessoas[2].id, livroId: books[4].id, dataEmprestimo: fmt(addDays(hoje, -15)), dataPrevistaDevolucao: fmt(addDays(hoje, -1)), dataDevolvido: null, status: 'atrasado', multa: 0 },
    { id: DB.generateId(), pessoaId: pessoas[4].id, livroId: books[5].id, dataEmprestimo: fmt(addDays(hoje, -5)), dataPrevistaDevolucao: fmt(addDays(hoje, 9)), dataDevolvido: null, status: 'ativo', multa: 0 },
    { id: DB.generateId(), pessoaId: pessoas[0].id, livroId: books[8].id, dataEmprestimo: fmt(addDays(hoje, -30)), dataPrevistaDevolucao: fmt(addDays(hoje, -16)), dataDevolvido: fmt(addDays(hoje, -16)), status: 'devolvido', multa: 0 },
    { id: DB.generateId(), pessoaId: pessoas[3].id, livroId: books[6].id, dataEmprestimo: fmt(addDays(hoje, -8)), dataPrevistaDevolucao: fmt(addDays(hoje, 6)), dataDevolvido: null, status: 'ativo', multa: 0 },
  ];
  DB.set('emprestimos', emprestimos);
}

function seedAgendamentos() {
  if (DB.get('agendamentos').length > 0) return;
  const hoje = new Date();
  const fmt = (d) => d.toISOString().split('T')[0];
  const addDays = (d, n) => { const r = new Date(d); r.setDate(r.getDate() + n); return r; };

  const agendamentos = [
    { id: DB.generateId(), responsavel: 'Prof. Ricardo Alves Santos', turma: '9º A', data: fmt(addDays(hoje, 1)), horarioInicio: '08:00', horarioFim: '09:00', proposito: 'Pesquisa sobre Literatura Brasileira', status: 'confirmado' },
    { id: DB.generateId(), responsavel: 'Prof.ª Maria Helena Gomes', turma: '8º B', data: fmt(addDays(hoje, 2)), horarioInicio: '10:00', horarioFim: '11:00', proposito: 'Leitura livre e revisão de conteúdo', status: 'confirmado' },
    { id: DB.generateId(), responsavel: 'Prof. Ricardo Alves Santos', turma: '7º C', data: fmt(addDays(hoje, 3)), horarioInicio: '14:00', horarioFim: '15:00', proposito: 'Trabalho de pesquisa sobre Romantismo', status: 'pendente' },
    { id: DB.generateId(), responsavel: 'Prof.ª Maria Helena Gomes', turma: '6º A', data: fmt(hoje), horarioInicio: '09:00', horarioFim: '10:00', proposito: 'Contação de histórias', status: 'confirmado' },
  ];
  DB.set('agendamentos', agendamentos);
}

// ---- Book Helpers ----
const Books = {
  getAll: () => DB.get('books'),
  getById: (id) => DB.get('books').find(b => b.id === id),
  save: (book) => {
    const books = DB.get('books');
    const idx = books.findIndex(b => b.id === book.id);
    if (idx >= 0) books[idx] = book; else books.push(book);
    DB.set('books', books);
  },
  delete: (id) => {
    const books = DB.get('books').filter(b => b.id !== id);
    DB.set('books', books);
  },
  getTotalQuantity: () => DB.get('books').reduce((s, b) => s + (parseInt(b.quantidade) || 0), 0),
  getTotalAvailable: () => DB.get('books').reduce((s, b) => s + (parseInt(b.quantidadeDisponivel) || 0), 0),
};

// ---- People Helpers ----
const Pessoas = {
  getAll: () => DB.get('pessoas'),
  getById: (id) => DB.get('pessoas').find(p => p.id === id),
  save: (pessoa) => {
    const pessoas = DB.get('pessoas');
    const idx = pessoas.findIndex(p => p.id === pessoa.id);
    if (idx >= 0) pessoas[idx] = pessoa; else pessoas.push(pessoa);
    DB.set('pessoas', pessoas);
  },
  delete: (id) => {
    const pessoas = DB.get('pessoas').filter(p => p.id !== id);
    DB.set('pessoas', pessoas);
  }
};

// ---- Loan Helpers ----
const Emprestimos = {
  getAll: () => DB.get('emprestimos'),
  getById: (id) => DB.get('emprestimos').find(e => e.id === id),
  getAtivos: () => DB.get('emprestimos').filter(e => e.status !== 'devolvido'),
  getByPessoa: (pessoaId) => DB.get('emprestimos').filter(e => e.pessoaId === pessoaId),
  save: (emp) => {
    const emps = DB.get('emprestimos');
    const idx = emps.findIndex(e => e.id === emp.id);
    if (idx >= 0) emps[idx] = emp; else emps.push(emp);
    DB.set('emprestimos', emps);
  },
  updateStatus: () => {
    const hoje = new Date(); hoje.setHours(0,0,0,0);
    const emps = DB.get('emprestimos').map(e => {
      if (e.status === 'ativo') {
        const prev = new Date(e.dataPrevistaDevolucao + 'T00:00:00');
        if (prev < hoje) e.status = 'atrasado';
      }
      return e;
    });
    DB.set('emprestimos', emps);
  },
  calcMulta: (dataVencimento) => {
    const hoje = new Date(); hoje.setHours(0,0,0,0);
    const venc = new Date(dataVencimento + 'T00:00:00');
    if (hoje <= venc) return 0;
    const dias = Math.floor((hoje - venc) / 86400000);
    return (dias * 0.50).toFixed(2);
  }
};

// ---- Schedule Helpers ----
const Agendamentos = {
  getAll: () => DB.get('agendamentos'),
  getById: (id) => DB.get('agendamentos').find(a => a.id === id),
  save: (ag) => {
    const ags = DB.get('agendamentos');
    const idx = ags.findIndex(a => a.id === ag.id);
    if (idx >= 0) ags[idx] = ag; else ags.push(ag);
    DB.set('agendamentos', ags);
  },
  delete: (id) => {
    const ags = DB.get('agendamentos').filter(a => a.id !== id);
    DB.set('agendamentos', ags);
  }
};

// ---- UI Helpers ----
function formatDate(dateStr) {
  if (!dateStr) return '-';
  const [y, m, d] = dateStr.split('-');
  return `${d}/${m}/${y}`;
}

function today() {
  return new Date().toISOString().split('T')[0];
}

function addDaysToDate(dateStr, days) {
  const d = new Date(dateStr + 'T00:00:00');
  d.setDate(d.getDate() + days);
  return d.toISOString().split('T')[0];
}

function showToast(msg, type = 'success') {
  const existing = document.getElementById('toast-container');
  if (!existing) {
    const tc = document.createElement('div');
    tc.id = 'toast-container';
    tc.style.cssText = 'position:fixed;top:20px;right:20px;z-index:9999;display:flex;flex-direction:column;gap:10px;';
    document.body.appendChild(tc);
  }
  const toast = document.createElement('div');
  const colors = { success: '#26a69a', error: '#e53935', warning: '#fb8c00', info: '#039be5' };
  toast.style.cssText = `background:${colors[type]||colors.success};color:#fff;padding:14px 20px;border-radius:10px;font-size:14px;font-weight:500;box-shadow:0 4px 15px rgba(0,0,0,.2);min-width:260px;max-width:340px;animation:slideIn .3s ease;`;
  toast.textContent = msg;
  document.getElementById('toast-container').appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; toast.style.transition = 'opacity .4s'; setTimeout(() => toast.remove(), 400); }, 3200);
}

function getGeneros() {
  return ['Romance', 'Naturalismo', 'Romantismo', 'Modernismo', 'Realismo', 'Poesia', 'Conto', 'Crônica', 'Fantasia', 'Aventura', 'Terror', 'Ficção Científica', 'Ficção Política', 'Jovem Adulto', 'Infantojuvenil', 'Autobiografia', 'Biografia', 'História', 'Ciências', 'Didático', 'Outros'];
}

function statusBadge(status) {
  const map = {
    'ativo': ['badge-success', 'Ativo'],
    'atrasado': ['badge-danger', 'Atrasado'],
    'devolvido': ['badge-secondary', 'Devolvido'],
    'confirmado': ['badge-success', 'Confirmado'],
    'pendente': ['badge-warning', 'Pendente'],
    'cancelado': ['badge-danger', 'Cancelado'],
  };
  const [cls, label] = map[status] || ['badge-secondary', status];
  return `<span class="badge ${cls}">${label}</span>`;
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
  initSampleData();
  Emprestimos.updateStatus();
});
