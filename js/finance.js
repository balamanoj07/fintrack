/* =========================================
   FINANCE.JS  –  Expenses, Savings, Budget, Goals
   ========================================= */

const Finance = (() => {

  /* ---------- Key helpers (per user) ---------- */
  const key = (type) => {
    const user = App.currentUser();
    return `ft_${type}_${user ? user.email : 'guest'}`;
  };

  /* ==========================================
     EXPENSES
     ========================================== */

  const EXPENSE_CATS = [
    'Food & Dining', 'Transportation', 'Housing', 'Utilities',
    'Healthcare', 'Shopping', 'Entertainment', 'Education',
    'Personal Care', 'Travel', 'Insurance', 'Other'
  ];

  const INCOME_CATS = [
    'Salary', 'Freelance', 'Business', 'Investment',
    'Gift', 'Rental Income', 'Other'
  ];

  function getTransactions() { return App.get(key('transactions'), []); }
  function saveTransactions(d){ App.set(key('transactions'), d); }

  function addTransaction(data) {
    const txns = getTransactions();
    const txn = { id: Date.now(), ...data, createdAt: Date.now() };
    txns.unshift(txn);
    saveTransactions(txns);
    return txn;
  }

  function deleteTransaction(id) {
    const txns = getTransactions().filter(t => t.id !== id);
    saveTransactions(txns);
  }

  function updateTransaction(id, data) {
    const txns = getTransactions().map(t => t.id === id ? { ...t, ...data } : t);
    saveTransactions(txns);
  }

  function getTransactionsByType(type) {
    return getTransactions().filter(t => t.type === type);
  }

  function getSummary() {
    const txns = getTransactions();
    const income   = txns.filter(t => t.type === 'income').reduce((s, t) => s + t.amount, 0);
    const expenses = txns.filter(t => t.type === 'expense').reduce((s, t) => s + t.amount, 0);
    return { income, expenses, balance: income - expenses };
  }

  function getExpensesByCategory() {
    const txns = getTransactions().filter(t => t.type === 'expense');
    const map = {};
    txns.forEach(t => {
      map[t.category] = (map[t.category] || 0) + t.amount;
    });
    return map;
  }

  function getRecentTransactions(n = 10) {
    return getTransactions().slice(0, n);
  }

  function getMonthlyData() {
    const txns = getTransactions();
    const months = {};
    txns.forEach(t => {
      const d = new Date(t.date || t.createdAt);
      const label = d.toLocaleDateString('en-IN', { month: 'short', year: 'numeric' });
      if (!months[label]) months[label] = { income: 0, expense: 0 };
      months[label][t.type] = (months[label][t.type] || 0) + t.amount;
    });
    return months;
  }

  /* ==========================================
     SAVINGS
     ========================================== */

  function getSavingAccounts() { return App.get(key('savings'), []); }
  function saveSavingAccounts(d){ App.set(key('savings'), d); }

  function addSavingAccount(data) {
    const list = getSavingAccounts();
    const item = { id: Date.now(), ...data, logs: [], createdAt: Date.now() };
    list.unshift(item);
    saveSavingAccounts(list);
    return item;
  }

  function deleteSavingAccount(id) {
    saveSavingAccounts(getSavingAccounts().filter(s => s.id !== id));
  }

  function depositToSaving(accountId, amount, note = '') {
    const list = getSavingAccounts().map(s => {
      if (s.id !== accountId) return s;
      const current = parseFloat(s.current || 0) + parseFloat(amount);
      const log = { type: 'deposit', amount: parseFloat(amount), note, date: Date.now() };
      return { ...s, current, logs: [...(s.logs || []), log] };
    });
    saveSavingAccounts(list);
  }

  function withdrawFromSaving(accountId, amount, note = '') {
    const list = getSavingAccounts().map(s => {
      if (s.id !== accountId) return s;
      const current = Math.max(0, parseFloat(s.current || 0) - parseFloat(amount));
      const log = { type: 'withdrawal', amount: parseFloat(amount), note, date: Date.now() };
      return { ...s, current, logs: [...(s.logs || []), log] };
    });
    saveSavingAccounts(list);
  }

  function getTotalSavings() {
    return getSavingAccounts().reduce((s, a) => s + parseFloat(a.current || 0), 0);
  }

  /* ==========================================
     BUDGET
     ========================================== */

  function getBudgets() { return App.get(key('budgets'), []); }
  function saveBudgets(d){ App.set(key('budgets'), d); }

  function addBudget(data) {
    const list = getBudgets();
    const item = { id: Date.now(), ...data, createdAt: Date.now() };
    list.push(item);
    saveBudgets(list);
    return item;
  }

  function deleteBudget(id) { saveBudgets(getBudgets().filter(b => b.id !== id)); }

  function updateBudget(id, data) {
    saveBudgets(getBudgets().map(b => b.id === id ? { ...b, ...data } : b));
  }

  function getBudgetSpent(category, month) {
    // month: 'YYYY-MM'
    const txns = getTransactions().filter(t => {
      if (t.type !== 'expense') return false;
      if (t.category !== category) return false;
      const d = new Date(t.date || t.createdAt);
      const m = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`;
      return m === month;
    });
    return txns.reduce((s, t) => s + t.amount, 0);
  }

  function getBudgetsWithSpent(month) {
    return getBudgets().map(b => {
      const spent = getBudgetSpent(b.category, month);
      const pct   = b.limit > 0 ? Math.min(100, (spent / b.limit) * 100) : 0;
      return { ...b, spent, pct, remaining: Math.max(0, b.limit - spent) };
    });
  }

  /* ==========================================
     GOALS
     ========================================== */

  function getGoals() { return App.get(key('goals'), []); }
  function saveGoals(d){ App.set(key('goals'), d); }

  function addGoal(data) {
    const list = getGoals();
    const item = { id: Date.now(), ...data, current: parseFloat(data.current || 0), createdAt: Date.now() };
    list.unshift(item);
    saveGoals(list);
    return item;
  }

  function deleteGoal(id) { saveGoals(getGoals().filter(g => g.id !== id)); }

  function updateGoal(id, data) {
    saveGoals(getGoals().map(g => g.id === id ? { ...g, ...data } : g));
  }

  function contributeToGoal(id, amount) {
    saveGoals(getGoals().map(g => {
      if (g.id !== id) return g;
      const current = Math.min(g.target, parseFloat(g.current || 0) + parseFloat(amount));
      return { ...g, current };
    }));
  }

  function getGoalProgress(goal) {
    const pct = goal.target > 0 ? Math.min(100, (goal.current / goal.target) * 100) : 0;
    const remaining = Math.max(0, goal.target - goal.current);
    const deadline = goal.deadline ? new Date(goal.deadline) : null;
    const daysLeft = deadline ? Math.ceil((deadline - new Date()) / 86400000) : null;
    return { pct, remaining, daysLeft };
  }

  /* ==========================================
     DASHBOARD SUMMARY
     ========================================== */

  function getDashboardData() {
    const summary  = getSummary();
    const savings  = getTotalSavings();
    const goals    = getGoals();
    const recent   = getRecentTransactions(5);
    const currentMonth = new Date().toISOString().slice(0, 7);
    const budgets  = getBudgetsWithSpent(currentMonth);
    const catSpend = getExpensesByCategory();
    return { summary, savings, goals, recent, budgets, catSpend };
  }

  return {
    EXPENSE_CATS, INCOME_CATS,
    getTransactions, addTransaction, deleteTransaction, updateTransaction,
    getTransactionsByType, getSummary, getExpensesByCategory,
    getRecentTransactions, getMonthlyData,
    getSavingAccounts, addSavingAccount, deleteSavingAccount,
    depositToSaving, withdrawFromSaving, getTotalSavings,
    getBudgets, addBudget, deleteBudget, updateBudget,
    getBudgetSpent, getBudgetsWithSpent,
    getGoals, addGoal, deleteGoal, updateGoal,
    contributeToGoal, getGoalProgress,
    getDashboardData
  };
})();
