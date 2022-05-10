import { Component } from "react";
import { RiBrush2Fill } from "react-icons/ri";
import { ThemeToggleStyle } from "./style";

interface ThemeToggleProps {
  toggleTheme: () => void;
}

export class ThemeToggle extends Component<ThemeToggleProps> {
  constructor(props: ThemeToggleProps) {
    super(props);
  }

  render() {
    const { toggleTheme } = this.props;

    return (
      <ThemeToggleStyle
        onClick={() => {
          toggleTheme();
        }}
      >
        <RiBrush2Fill title="Alternar Tema" />
      </ThemeToggleStyle>
    );
  }
}
