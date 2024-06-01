import PageTitle from "../../components/PageTitle/PageTitle";
export default function HomePage() {
  return (
    <div>
      <PageTitle>
        Welcome{" "}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </PageTitle>
      <p>
        This is the contacts page, to see your contacts, log into your account
        by clicking on the button LogIn
      </p>
      <p>
        Or register as a new user and add your contacts so as not to lose them.
      </p>
    </div>
  );
}