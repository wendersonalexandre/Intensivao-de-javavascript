// ⚠️ AVISO DE SEGURANÇA:
// Armazenar chaves de API no front-end expõe sua chave publicamente.
// Qualquer pessoa pode inspecionar o código e usar sua chave da OpenAI.
// Isso pode resultar em cobranças inesperadas na sua conta.
//
// Para produção, use sempre um backend para proteger suas chaves.

export const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
