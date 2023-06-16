import css from './home.module.css'


export default function Home() {
  return (
    <div style={css.container}>
      <h1 style={css.title}>
        Contacts manager welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
    </div>
  );
}