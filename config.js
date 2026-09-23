// Isi salah satu atau keduanya untuk mengaktifkan pengiriman langsung.
// Jangan menaruh password, token, atau API key di file publik ini.
window.PORTFOLIO_CONFIG = window.PORTFOLIO_CONFIG || {};
if (typeof window.PORTFOLIO_CONFIG.email !== 'string') window.PORTFOLIO_CONFIG.email = "";
if (typeof window.PORTFOLIO_CONFIG.whatsapp !== 'string') window.PORTFOLIO_CONFIG.whatsapp = "";
if (typeof window.PORTFOLIO_CONFIG.imageUrl !== 'string') window.PORTFOLIO_CONFIG.imageUrl = "";
if (typeof window.PORTFOLIO_CONFIG.prestasiMax !== 'number') window.PORTFOLIO_CONFIG.prestasiMax = 100;
