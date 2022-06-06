import { Content, Layer, Theme, Tile, Toggle } from '@carbon/react';
import { Header } from '../components/Header';
import { Accordion } from '../components/Accordion';
import { Dropdown } from '../components/Dropdown';
import { useThemePreference } from '../components/ThemePreference';

export default function IndexPage() {
  const { theme, setTheme } = useThemePreference();

  return (
    <>
      <Header />
      <Content>
        <h1>Global theme: g90</h1>
        <p>
          While the global theme is set to g90 by default, our new theming
          capabilities make it easy to implement light and dark mode.
        </p>
        <Toggle
          className="toggle-spacing"
          onToggle={() => {
            if (theme === 'g10') {
              setTheme('g90');
            }
            if (theme === 'g90') {
              setTheme('g10');
            }
          }}
          labelText="Theme Switcher"
          labelA="Dark"
          labelB="Light"
          id="toggle-1"
        />

        <section>
          <h3>Layering examples</h3>
          <Tile>First layer</Tile>
          <Dropdown id="1" />
          <Layer className="layer-spacing">
            <Tile>Second layer</Tile>
            <Dropdown id="2" />
            <Layer className="layer-spacing">
              <Tile>Third layer</Tile>
              <Dropdown id="3" />
            </Layer>
          </Layer>
        </section>

        <section className="zone-spacing">
          <h3>This accordion uses our global theme</h3>
          <Accordion />
        </section>
        <section>
          <Theme theme="g100" className="zone-spacing">
            <h3>This accordion uses inline theming: g100</h3>
            <Accordion />
          </Theme>
        </section>
        <section>
          <Theme theme="g90" className="zone-spacing">
            <h3>This accordion uses inline theming: g90</h3>
            <Accordion />
          </Theme>
        </section>
        <section>
          <Theme theme="g10" className="zone-spacing">
            <h3>This accordion uses inline theming: g10</h3>
            <Accordion />
          </Theme>
        </section>
        <section>
          <Theme theme="white" className="zone-spacing">
            <h3>This accordion uses inline theming: white</h3>
            <Accordion />
          </Theme>
        </section>
      </Content>
    </>
  );
}
