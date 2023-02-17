import { getCsrfToken } from "next-auth/react";

const SignIn = ({ csrfToken }: any) => {
  return (
    <form method="post" action="/api/auth/callback/credentials">
      <h1>Login</h1>
      <p>Indtast brugernavn og adgangskode for at logge på</p>
      <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
      <label className="lbUsername">
        Brugernavn:
        <input className="username" name="username" type="text" />
      </label>
      <label className="lbPassword">
        Adgangskode:
        <input className="password" name="password" type="password" />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export async function getServerSideProps(context: any) {
  const csrfToken = await getCsrfToken(context);
  return {
    props: {
      csrfToken: csrfToken || null,
    },
  };
}
SignIn.auth = false;
export default SignIn;
