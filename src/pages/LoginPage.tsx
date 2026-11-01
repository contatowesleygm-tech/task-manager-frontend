import { useEffect, useMemo, useState, type FormEvent } from 'react';
import { Check, CheckSquare, CreditCard, Eye, EyeOff, LockKeyhole, Mail, QrCode, UserRound } from 'lucide-react';
import styled from 'styled-components';
import { getSubscriptionPlans } from '../api';
import { Alert, Button } from '../components/ui';
import ThemeToggle from '../components/ThemeToggle';
import type {
  AuthCredentials, AuthUser, PaymentMethod, RegisterResult, SubscriptionPlan, SubscriptionPlanOption,
} from '../types';

interface LoginPageProps {
  onLogin: (credentials: AuthCredentials) => Promise<AuthUser>;
  onRegister: (credentials: AuthCredentials) => Promise<RegisterResult>;
}

const FALLBACK_PLANS: SubscriptionPlanOption[] = [
  {
    id: 'monthly',
    label: 'Mensal',
    price: 29.9,
    currency: 'BRL',
    interval: 'month',
    description: 'Cobrado todo mês · cancele quando quiser',
  },
  {
    id: 'annual',
    label: 'Anual',
    price: 299.9,
    currency: 'BRL',
    interval: 'year',
    description: 'Melhor custo · pagamento único no ano',
  },
];

const money = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

const LoginScreen = styled.main`
  position: relative;
  display: grid;
  min-height: 100vh;
  place-items: center;
  padding: 32px 18px;
  background:
    radial-gradient(ellipse at 16% 14%, rgba(37, 99, 235, .1), transparent 38%),
    radial-gradient(ellipse at 88% 90%, rgba(2, 132, 199, .06), transparent 35%),
    var(--page-bg);
`;

const ThemeControl = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;

const LoginCard = styled.section<{ $wide?: boolean }>`
  width: min(100%, ${({ $wide }) => ($wide ? '560px' : '440px')});
  padding: 38px;
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  background: var(--surface);
  box-shadow: 0 24px 70px var(--shadow);
  transition: width .2s ease;
  @media (max-width: 520px) { padding: 28px 22px; border-radius: 18px; }
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
  margin-bottom: 34px;
  color: var(--text);
  font-size: 18px;
  font-weight: 800;
  letter-spacing: -.3px;
`;

const BrandIcon = styled.span`
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  border-radius: 13px;
  color: var(--primary-contrast);
  background: var(--primary);
  box-shadow: 0 7px 16px var(--shadow);
  svg { width: 23px; height: 23px; }
`;

const Heading = styled.div`
  margin-bottom: 26px;
  h1 { margin: 0 0 8px; color: var(--text); font-size: 27px; letter-spacing: -.7px; }
  p { margin: 0; color: var(--muted); font-size: 14px; line-height: 1.6; }
`;

const Form = styled.form`
  display: grid;
  gap: 18px;
`;

const Field = styled.label`
  display: grid;
  gap: 8px;
  color: var(--text);
  font-size: 14px;
  font-weight: 700;
`;

const InputWrap = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  color: var(--muted);
  > svg { position: absolute; left: 14px; width: 18px; height: 18px; pointer-events: none; }
  input {
    width: 100%;
    height: 48px;
    padding: 0 44px;
    border: 1px solid var(--border);
    border-radius: 10px;
    outline: none;
    color: var(--text);
    background: var(--surface-raised);
    font-size: 14px;
    font-weight: 400;
    transition: border-color .15s ease, box-shadow .15s ease;
  }
  input::placeholder { color: var(--muted); }
  input:focus { border-color: var(--primary); box-shadow: 0 0 0 3px var(--focus); }
`;

const PasswordToggle = styled.button`
  position: absolute;
  right: 8px;
  display: grid;
  width: 34px;
  height: 34px;
  place-items: center;
  border: 0;
  border-radius: 8px;
  color: var(--muted);
  background: transparent;
  &:hover { color: var(--text); background: var(--surface-raised); }
  &:focus-visible { outline: 3px solid var(--focus); }
  svg { width: 18px; height: 18px; }
`;

const FormOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  color: var(--muted);
  font-size: 12px;
`;

const Remember = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  input { width: 15px; height: 15px; margin: 0; accent-color: var(--primary); }
`;

const PlanField = styled.fieldset`
  margin: 0;
  padding: 0;
  border: 0;
  legend {
    margin-bottom: 10px;
    color: var(--text);
    font-size: 13px;
    font-weight: 700;
  }
`;

const PlanGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  @media (max-width: 520px) { grid-template-columns: 1fr; }
`;

const PlanOption = styled.label<{ $active?: boolean }>`
  position: relative;
  display: grid;
  gap: 6px;
  padding: 14px 14px 13px;
  border: 1.5px solid ${({ $active }) => ($active ? 'var(--primary)' : 'var(--border)')};
  border-radius: 14px;
  background: ${({ $active }) => ($active
    ? 'color-mix(in srgb, var(--primary) 12%, var(--surface))'
    : 'var(--surface-raised)')};
  cursor: pointer;
  transition: border-color .15s ease, background .15s ease, transform .15s ease;
  &:hover { transform: translateY(-1px); border-color: var(--primary); }
  input { position: absolute; opacity: 0; pointer-events: none; }
  strong {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    color: var(--text);
    font-size: 14px;
  }
  em {
    color: var(--text);
    font-size: 22px;
    font-style: normal;
    font-weight: 850;
    letter-spacing: -.04em;
    span { margin-left: 3px; color: var(--muted); font-size: 12px; font-weight: 600; }
  }
  p {
    margin: 0;
    color: var(--muted);
    font-size: 11px;
    line-height: 1.45;
  }
`;

const PlanBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 3px 7px;
  border-radius: var(--radius-full);
  color: var(--primary-strong);
  background: var(--primary-soft);
  font-size: 10px;
  font-weight: 800;
  svg { width: 11px; height: 11px; }
`;

const PaymentOption = styled(PlanOption)`
  strong {
    justify-content: flex-start;
    gap: 8px;
    svg { width: 16px; height: 16px; color: var(--primary-strong); }
  }
`;

const CardFields = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  padding: 14px;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: var(--surface-raised);
  ${Field}:first-child, ${Field}:nth-child(2) { grid-column: 1 / -1; }
  @media (max-width: 520px) {
    grid-template-columns: 1fr;
    ${Field} { grid-column: auto; }
  }
`;

const PlainInput = styled.input`
  width: 100%;
  height: 44px;
  padding: 0 12px;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  outline: none;
  color: var(--text);
  background: var(--surface);
  font-size: 14px;
  &:focus { border-color: var(--primary); box-shadow: 0 0 0 3px var(--focus); }
`;

const PixHint = styled.p`
  margin: 0;
  padding: 12px 14px;
  border: 1px solid color-mix(in srgb, var(--primary) 28%, var(--border));
  border-radius: 12px;
  color: var(--muted);
  background: color-mix(in srgb, var(--primary) 8%, var(--surface));
  font-size: 12px;
  line-height: 1.55;
`;

const PendingBox = styled.div`
  display: grid;
  gap: 12px;
  padding: 16px;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: var(--surface-raised);
  h2 { margin: 0; color: var(--text); font-size: 18px; }
  p { margin: 0; color: var(--muted); font-size: 13px; line-height: 1.55; }
  strong { color: var(--text); }
`;

const SubmitButton = styled(Button)`
  width: 100%;
  min-height: 48px;
  margin-top: 3px;
  border-radius: 10px;
  background: var(--primary);
  color: var(--primary-contrast);
  font-size: 14px;
  &:hover:not(:disabled) { background: var(--primary-strong); }
`;

const Footer = styled.p`
  margin: 23px 0 0;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.6;
  text-align: center;
  button {
    padding: 0;
    border: 0;
    color: var(--primary-strong);
    background: transparent;
    font: inherit;
    font-weight: 700;
  }
  button:hover { text-decoration: underline; }
  button:focus-visible { outline: 3px solid var(--focus); outline-offset: 3px; border-radius: 2px; }
`;

function onlyDigits(value: string) {
  return value.replace(/\D/g, '');
}

function formatCardNumber(value: string) {
  return onlyDigits(value).slice(0, 16).replace(/(\d{4})(?=\d)/g, '$1 ').trim();
}

function planPeriod(plan: SubscriptionPlanOption) {
  return plan.interval === 'year' || plan.id === 'annual' ? '/ano' : '/mês';
}

export default function LoginPage({ onLogin, onRegister }: LoginPageProps) {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [plans, setPlans] = useState<SubscriptionPlanOption[]>(FALLBACK_PLANS);
  const [paymentMethods, setPaymentMethods] = useState({ pix: true, card: true });
  const [plan, setPlan] = useState<SubscriptionPlan>('annual');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('pix');
  const [cardHolder, setCardHolder] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpMonth, setCardExpMonth] = useState('');
  const [cardExpYear, setCardExpYear] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [registerResult, setRegisterResult] = useState<RegisterResult | null>(null);

  useEffect(() => {
    let active = true;
    void getSubscriptionPlans()
      .then(response => {
        if (!active) return;
        const nextPlans = response.plans?.length ? response.plans : FALLBACK_PLANS;
        setPlans(nextPlans);
        if (response.payment_methods) setPaymentMethods(response.payment_methods);
        if (!nextPlans.some(item => item.id === plan)) {
          setPlan(nextPlans[0]?.id ?? 'annual');
        }
        if (response.payment_methods && !response.payment_methods.pix && response.payment_methods.card) {
          setPaymentMethod('card');
        }
      })
      .catch(() => {
        /* fallback plans already loaded */
      });
    return () => { active = false; };
  }, []);

  const selectedPlan = useMemo(
    () => plans.find(item => item.id === plan) ?? plans[0] ?? FALLBACK_PLANS[1],
    [plan, plans],
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    setLoading(true);
    try {
      const credentials: AuthCredentials = { email: email.trim(), password };
      if (mode === 'register') {
        if (password.trim().length < 8) throw new Error('A senha deve ter no mínimo 8 caracteres.');
        credentials.name = name.trim();
        credentials.plan = plan;
        credentials.payment_method = paymentMethod;
        if (paymentMethod === 'card') {
          const number = onlyDigits(cardNumber);
          const expMonth = Number(cardExpMonth);
          const expYear = Number(cardExpYear);
          if (number.length < 13) throw new Error('Informe um número de cartão válido.');
          if (!cardHolder.trim()) throw new Error('Informe o nome impresso no cartão.');
          if (!Number.isInteger(expMonth) || expMonth < 1 || expMonth > 12) {
            throw new Error('Informe um mês de validade entre 1 e 12.');
          }
          const validYear = (expYear >= 25 && expYear <= 99) || (expYear >= 2025 && expYear <= 2099);
          if (!Number.isInteger(expYear) || !validYear) {
            throw new Error('Informe um ano de validade válido (ex.: 30 ou 2030).');
          }
          if (!/^\d{3,4}$/.test(cardCvv)) throw new Error('Informe o CVV com 3 ou 4 dígitos.');
          credentials.card = {
            holder_name: cardHolder.trim(),
            number,
            exp_month: expMonth,
            exp_year: expYear,
            cvv: cardCvv,
          };
        }
        const result = await onRegister(credentials);
        setRegisterResult(result);
      } else {
        await onLogin(credentials);
      }
    } catch (requestError: any) {
      setError(requestError?.message || requestError?.response?.data?.error || (mode === 'register'
        ? 'Não foi possível criar sua conta. Verifique os dados informados.'
        : 'E-mail ou senha inválidos.'));
    } finally {
      setLoading(false);
    }
  }

  if (registerResult) {
    const payment = registerResult.payment;
    const pix = payment.pix;
    return (
      <LoginScreen>
        <ThemeControl><ThemeToggle /></ThemeControl>
        <LoginCard $wide>
          <Brand>
            <BrandIcon><CheckSquare aria-hidden="true" /></BrandIcon>
            Rumo
          </Brand>
          <Heading>
            <h1>Conta criada</h1>
            <p>Agora falta confirmar o pagamento da assinatura para liberar o acesso completo.</p>
          </Heading>
          <PendingBox>
            <h2>
              {payment.payment_method === 'pix' ? 'Pagamento Pix pendente' : 'Pagamento no cartão pendente'}
            </h2>
            <p>
              Plano <strong>{registerResult.subscription.plan === 'annual' ? 'Anual' : 'Mensal'}</strong>
              {' · '}
              <strong>{money.format(Number(payment.amount) || 0)}</strong>
            </p>
            <p>Status: <strong>{payment.status}</strong></p>
            {payment.payment_method === 'pix' && (
              <p>
                {pix?.ready && pix.copy_paste
                  ? `Pix copia e cola: ${pix.copy_paste}`
                  : pix?.message || 'O Pix ainda será gerado pelo gateway de pagamento.'}
              </p>
            )}
            {payment.payment_method === 'card' && payment.card && (
              <p>
                Cartão {payment.card.brand || ''} final {payment.card.last4 || '****'}
                {payment.card.holder_name ? ` · ${payment.card.holder_name}` : ''}
              </p>
            )}
            {registerResult.next_step && (
              <p>Próximo passo: <strong>{registerResult.next_step}</strong></p>
            )}
          </PendingBox>
          <SubmitButton
            type="button"
            $variant="primary"
            onClick={() => {
              setRegisterResult(null);
              setMode('login');
              setPassword('');
            }}
          >
            Ir para o login
          </SubmitButton>
        </LoginCard>
      </LoginScreen>
    );
  }

  return (
    <LoginScreen>
      <ThemeControl><ThemeToggle /></ThemeControl>
      <LoginCard $wide={mode === 'register'}>
        <Brand>
          <BrandIcon><CheckSquare aria-hidden="true" /></BrandIcon>
          Rumo
        </Brand>
        <Heading>
          <h1>{mode === 'login' ? 'Bem-vindo de volta' : 'Crie sua conta'}</h1>
          <p>
            {mode === 'login'
              ? 'Entre com seus dados para acessar seu espaço de produtividade.'
              : 'Escolha o plano, o pagamento e comece a organizar tarefas, estudos e finanças.'}
          </p>
        </Heading>
        {error && <Alert variant="error" title="Não foi possível continuar" message={error} onDismiss={() => setError('')} />}
        <Form onSubmit={event => { void handleSubmit(event); }}>
          {mode === 'register' && (
            <PlanField>
              <legend>Plano de assinatura</legend>
              <PlanGrid>
                {plans.map(option => {
                  const active = plan === option.id;
                  return (
                    <PlanOption key={option.id} $active={active}>
                      <input
                        type="radio"
                        name="subscription-plan"
                        value={option.id}
                        checked={active}
                        onChange={() => setPlan(option.id)}
                      />
                      <strong>
                        {option.label}
                        {option.id === 'annual' && <PlanBadge><Check />Melhor custo</PlanBadge>}
                      </strong>
                      <em>{money.format(option.price)}<span>{planPeriod(option)}</span></em>
                      <p>{option.description || (option.id === 'annual'
                        ? 'Pagamento único no ano'
                        : 'Cobrado todo mês · cancele quando quiser')}</p>
                    </PlanOption>
                  );
                })}
              </PlanGrid>
            </PlanField>
          )}
          {mode === 'register' && (
            <PlanField>
              <legend>Método de pagamento</legend>
              <PlanGrid>
                {paymentMethods.pix && (
                  <PaymentOption $active={paymentMethod === 'pix'}>
                    <input
                      type="radio"
                      name="payment-method"
                      value="pix"
                      checked={paymentMethod === 'pix'}
                      onChange={() => setPaymentMethod('pix')}
                    />
                    <strong><QrCode />Pix</strong>
                    <p>Pagamento instantâneo. O QR Code é gerado após confirmar o cadastro.</p>
                  </PaymentOption>
                )}
                {paymentMethods.card && (
                  <PaymentOption $active={paymentMethod === 'card'}>
                    <input
                      type="radio"
                      name="payment-method"
                      value="card"
                      checked={paymentMethod === 'card'}
                      onChange={() => setPaymentMethod('card')}
                    />
                    <strong><CreditCard />Cartão</strong>
                    <p>Crédito. Número e CVV não ficam salvos no servidor.</p>
                  </PaymentOption>
                )}
              </PlanGrid>
            </PlanField>
          )}
          {mode === 'register' && paymentMethod === 'pix' && (
            <PixHint>
              Ao criar a conta no plano {selectedPlan.label.toLowerCase()} ({money.format(selectedPlan.price)}{planPeriod(selectedPlan)}),
              a assinatura fica pendente até a confirmação do Pix.
            </PixHint>
          )}
          {mode === 'register' && paymentMethod === 'card' && (
            <CardFields>
              <Field>
                Nome no cartão
                <PlainInput
                  value={cardHolder}
                  onChange={event => setCardHolder(event.target.value)}
                  autoComplete="cc-name"
                  placeholder="Como está impresso"
                  required
                />
              </Field>
              <Field>
                Número do cartão
                <PlainInput
                  value={cardNumber}
                  onChange={event => setCardNumber(formatCardNumber(event.target.value))}
                  inputMode="numeric"
                  autoComplete="cc-number"
                  placeholder="0000 0000 0000 0000"
                  required
                />
              </Field>
              <Field>
                Mês
                <PlainInput
                  value={cardExpMonth}
                  onChange={event => setCardExpMonth(onlyDigits(event.target.value).slice(0, 2))}
                  inputMode="numeric"
                  autoComplete="cc-exp-month"
                  placeholder="MM"
                  required
                />
              </Field>
              <Field>
                Ano
                <PlainInput
                  value={cardExpYear}
                  onChange={event => setCardExpYear(onlyDigits(event.target.value).slice(0, 4))}
                  inputMode="numeric"
                  autoComplete="cc-exp-year"
                  placeholder="30 ou 2030"
                  required
                />
              </Field>
              <Field>
                CVV
                <PlainInput
                  value={cardCvv}
                  onChange={event => setCardCvv(onlyDigits(event.target.value).slice(0, 4))}
                  inputMode="numeric"
                  autoComplete="cc-csc"
                  placeholder="000"
                  required
                />
              </Field>
            </CardFields>
          )}
          {mode === 'register' && (
            <Field>
              Nome
              <InputWrap>
                <UserRound aria-hidden="true" />
                <input type="text" autoComplete="name" placeholder="Seu nome" value={name} onChange={event => setName(event.target.value)} required />
              </InputWrap>
            </Field>
          )}
          <Field>
            E-mail
            <InputWrap>
              <Mail aria-hidden="true" />
              <input
                type="email"
                autoComplete="email"
                placeholder="voce@exemplo.com"
                value={email}
                onChange={event => setEmail(event.target.value)}
                required
              />
            </InputWrap>
          </Field>
          <Field>
            Senha
            <InputWrap>
              <LockKeyhole aria-hidden="true" />
              <input
                type={showPassword ? 'text' : 'password'}
                autoComplete={mode === 'register' ? 'new-password' : 'current-password'}
                placeholder={mode === 'register' ? 'Mínimo de 8 caracteres' : 'Digite sua senha'}
                minLength={mode === 'register' ? 8 : undefined}
                value={password}
                onChange={event => setPassword(event.target.value)}
                required
              />
              <PasswordToggle
                type="button"
                onClick={() => setShowPassword(current => !current)}
                aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                aria-pressed={showPassword}
              >
                {showPassword ? <EyeOff aria-hidden="true" /> : <Eye aria-hidden="true" />}
              </PasswordToggle>
            </InputWrap>
          </Field>
          {mode === 'login' && (
            <FormOptions>
              <Remember><input type="checkbox" />Manter conectado</Remember>
              <span>Proteja suas credenciais</span>
            </FormOptions>
          )}
          <SubmitButton type="submit" $variant="primary" disabled={loading}>
            {loading
              ? 'Aguarde...'
              : mode === 'login'
                ? 'Entrar'
                : paymentMethod === 'pix'
                  ? `Continuar com Pix · ${money.format(selectedPlan.price)}`
                  : `Pagar com cartão · ${money.format(selectedPlan.price)}`}
          </SubmitButton>
        </Form>
        <Footer>
          {mode === 'login' ? 'Ainda não tem conta?' : 'Já possui uma conta?'}
          {' '}
          <button
            type="button"
            onClick={() => {
              setMode(mode === 'login' ? 'register' : 'login');
              setError('');
              setRegisterResult(null);
            }}
          >
            {mode === 'login' ? 'Cadastre-se' : 'Entrar'}
          </button>
        </Footer>
      </LoginCard>
    </LoginScreen>
  );
}
