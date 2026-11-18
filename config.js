// Підключення до навчального проєкту Supabase.
// Supabase → Project Settings → API (Data API):
//   url     — Project URL, напр. 'https://abcd1234.supabase.co'
//   anonKey — ключ anon / publishable (НЕ service_role і НЕ secret!)
// Ключ anon можна публікувати: без входу він дає лише функцію перевірки
// підключення crm_ping(); решта функцій доступна тільки після входу.
window.CRM_CONFIG = {
  url: 'https://eiexcdqzwtgagwyvajqt.supabase.co',
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVpZXhjZHF6d3RnYWd3eXZhanF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTQ5NTE0MDEsImV4cCI6MjExMDUyNzQwMX0.LKfBIPk0DZSRguyaNDfa_BXKlzqTm3xETUVi025abrk',
};
