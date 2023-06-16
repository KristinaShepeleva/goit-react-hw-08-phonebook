import css from './home.module.css'

export default function Home() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>
        Contacts manager welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
    </div>
  );
}