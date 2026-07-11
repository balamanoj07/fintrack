/* =========================================
   APP.JS  –  Auth, routing, shared helpers
   ========================================= */

const App = (() => {

  /* ---------- Storage helpers ---------- */
  const get = (key, fallback = null) => {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
    catch { return fallback; }
  };
  const set = (key, value) => localStorage.setItem(key, JSON.stringify(value));
  const remove = (key) => localStorage.removeItem(key);

  /* ---------- Auth ---------- */
  const USERS_KEY   = 'ft_users';
  const SESSION_KEY = 'ft_session';

  function getUsers()  { return get(USERS_KEY, {}); }
  function saveUsers(u){ set(USERS_KEY, u); }
  function getSession(){ return get(SESSION_KEY, null); }

  function register(name, email, password) {
    const users = getUsers();
    if (users[email]) return { ok: false, msg: 'An account with this email already exists.' };
    users[email] = { name, email, password: btoa(password), createdAt: Date.now() };
    saveUsers(users);
    return { ok: true };
  }

  function login(email, password) {
    const users = getUsers();
    const user  = users[email];
    if (!user)                         return { ok: false, msg: 'No account found with this email.' };
    if (user.password !== btoa(password)) return { ok: false, msg: 'Incorrect password.' };
    set(SESSION_KEY, { email, name: user.name });
    return { ok: true };
  }

  function logout() {
    remove(SESSION_KEY);
    window.location.href = 'index.html';
  }

  function requireAuth() {
    if (!getSession()) window.location.href = 'login.html';
  }

  function redirectIfLoggedIn() {
    if (getSession()) window.location.href = 'dashboard.html';
  }

  function currentUser() { return getSession(); }

  /* ---------- Toast ---------- */
  function showToast(message, type = 'success', duration = 3000) {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }
    const icons = { success: '✓', error: '✕', warning: '⚠' };
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<span>${icons[type] || '✓'}</span><span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s';
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }

  /* ---------- Modal ---------- */
  function openModal(id)  {
    const el = document.getElementById(id);
    if (el) el.classList.add('open');
  }
  function closeModal(id) {
    const el = document.getElementById(id);
    if (el) el.classList.remove('open');
  }

  /* ---------- Format helpers ---------- */
  function formatCurrency(n, currency = '₹') {
    const num = parseFloat(n) || 0;
    return currency + num.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  function formatDate(ts) {
    return new Date(ts).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
  }

  function formatDateInput(ts) {
    return new Date(ts).toISOString().slice(0, 10);
  }

  function today() { return new Date().toISOString().slice(0, 10); }

  /* ---------- Sidebar active state ---------- */
  function setActiveNav() {
    const page = window.location.pathname.split('/').pop() || 'dashboard.html';
    document.querySelectorAll('.nav-item').forEach(el => {
      el.classList.toggle('active', el.getAttribute('href') === page);
    });
  }

  /* ---------- Populate user info in sidebar ---------- */
  function populateUserInfo() {
    const user = currentUser();
    if (!user) return;
    const nameEls  = document.querySelectorAll('.user-name');
    const emailEls = document.querySelectorAll('.user-email');
    const avatarEls = document.querySelectorAll('.user-avatar');
    nameEls.forEach(el  => el.textContent = user.name);
    emailEls.forEach(el => el.textContent = user.email);
    avatarEls.forEach(el => el.textContent = user.name.charAt(0).toUpperCase());
  }

  /* ---------- Mobile sidebar toggle ---------- */
  function initMobileSidebar() {
    const toggle = document.getElementById('sidebarToggle');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    if (!toggle || !sidebar) return;
    toggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      if (overlay) overlay.classList.toggle('open');
    });
    if (overlay) overlay.addEventListener('click', () => {
      sidebar.classList.remove('open');
      overlay.classList.remove('open');
    });
  }

  /* ---------- Close modals on overlay click ---------- */
  function initModalClose() {
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) overlay.classList.remove('open');
      });
    });
    document.querySelectorAll('.modal-close').forEach(btn => {
      btn.addEventListener('click', () => {
        btn.closest('.modal-overlay')?.classList.remove('open');
      });
    });
  }

  /* ---------- Init for app pages ---------- */
  function initAppPage() {
    requireAuth();
    setActiveNav();
    populateUserInfo();
    initMobileSidebar();
    initModalClose();
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) logoutBtn.addEventListener('click', logout);
  }

  return {
    get, set, remove,
    register, login, logout, requireAuth, redirectIfLoggedIn, currentUser,
    showToast, openModal, closeModal,
    formatCurrency, formatDate, formatDateInput, today,
    initAppPage
  };
})();
