export default function Header({ onDarkModeClick, darkMode }) {

    return (
        <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {darkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
    )
}