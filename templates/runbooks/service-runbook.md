# Runbook: [Nome do Serviço]

| Campo | Valor |
|-------|-------|
| Repositório | [link] |
| Stack | [Next.js / Node / Expo] |
| Dashboard | [link] |
| On-call | [contato] |

## Como Subir
```bash
git clone [repo]
cp .env.example .env.local
npm install
npm run dev
```

## Como Deployar
```bash
git push origin develop  # staging (automático)
# Merge develop → main   # produção (requer aprovação)
```

## Como Rollback
```bash
git revert HEAD
git push origin main
```

## Como Rotacionar Secrets
1. Gerar novo secret no provedor
2. Atualizar no vault / env vars
3. Deployar
4. Revogar secret antigo

## Resposta por Severidade
### SEV-1: All-hands, comunicar em 15min, postmortem em 48h
### SEV-2: On-call + backup, comunicar em 1h
### SEV-3: Ticket, investigar no dia
### SEV-4: Ticket, próximo sprint
